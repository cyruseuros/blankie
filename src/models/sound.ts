import { store, type Model } from 'hybrids'
import { capitalCase } from 'change-case'
import localforage from 'localforage'
import defaultSoundsEmojis from '../assets/sounds.json'

type DefaultSoundId = keyof typeof defaultSoundsEmojis
type SoundId = string | DefaultSoundId

interface Sound {
  id: SoundId
  name: string
  emoji: string
  file: string
  volume: number
  audio: HTMLAudioElement
}

const Sound: Model<Sound> = {
  id: true,
  name: "",
  emoji: "",
  file: "",
  volume: store.value(0, n => n >= 0 && n <= 100, 'volume out of range'),
  audio: m => {
    const audio = new Audio(m.file)
    audio.loop = true
    return audio
  },

  [store.connect]: {
    // TODO: allow custom sounds
    list: () => Object.keys(defaultSoundsEmojis),
    set: async (id, value) => await localforage.setItem(id as string, value),
    observe: (_, m) => {
      if (m) {
        m.audio.volume = m.volume / 100
      }
    },
    get: async id => await localforage.getItem(id as string) || buildDefaultSound(id as DefaultSoundId),
  }
}

function buildDefaultSound(id: DefaultSoundId): Partial<Sound> {
  return {
    id: id,
    name: capitalCase(id),
    emoji: defaultSoundsEmojis[id],
    file: id + ".ogg",
  }
}

export default Sound
