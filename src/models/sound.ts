import { store, type Model } from 'hybrids'
import { noCase } from 'change-case'
import localforage from 'localforage'
import defaultSoundsEmojis from '../assets/sounds.json'

type DefaultSoundId = keyof typeof defaultSoundsEmojis
type SoundId = string | DefaultSoundId

interface AudioElement {
  audio: HTMLAudioElement
  gain: GainNode
}

interface SoundModel {
  id: SoundId
  name: string
  emoji: string
  file: string
  volume: number
  audio: AudioElement
}

const SoundModel: Model<SoundModel> = {
  id: true,
  name: "",
  emoji: "",
  file: "",
  volume: store.value(0, n => n >= 0 && n <= 100, 'volume out of range'),
  audio: m => {
    const audio = getLoopingAudio(m.id, m.file)
    audio.gain.gain.value = m.volume / 100
    return audio
  },

  [store.connect]: {
    // TODO: allow custom sounds
    list: () => Object.keys(defaultSoundsEmojis),
    set: async (id, value) => await localforage.setItem(id as string, value),
    get: async id => await localforage.getItem(id as string) || buildDefaultSound(id as DefaultSoundId),
  }
}

function buildDefaultSound(id: DefaultSoundId): Partial<SoundModel> {
  return {
    id: id,
    name: noCase(id),
    emoji: defaultSoundsEmojis[id],
    file: id + ".mp3",
  }
}

const audioCtx = new AudioContext()
const audioCache: Record<string, AudioElement> = {}

function getLoopingAudio(id: string, src: string): AudioElement {
  if (audioCache[id]) {
    return audioCache[id]
  }

  const audio = new Audio(src)
  audio.loop = true

  const source = audioCtx.createMediaElementSource(audio)
  const gain = audioCtx.createGain()

  source.connect(gain)
  gain.connect(audioCtx.destination)

  audioCache[id] = { audio, gain }
  return audioCache[id]
}

export default SoundModel
