import { store, type Model } from 'hybrids'
import { capitalCase } from 'change-case'
import defaultSoundsEmojis from '../assets/sounds.json'

type DefaultSoundId = keyof typeof defaultSoundsEmojis

interface Sound {
  id: string
  // TODO: use later for custom sounds
  default: boolean
  name: string
  emoji: string
  file: string
}

const Sound: Model<Sound> = {
  id: true,
  default: true,
  name: "",
  emoji: "",
  file: "",
  [store.connect]: {
    get: id => buildDefaultSound(id as DefaultSoundId),
    list: (_) => Object.keys(defaultSoundsEmojis).map(id => buildDefaultSound(id as DefaultSoundId))
  }
}

function buildDefaultSound(id: DefaultSoundId): Sound {
  return {
    id: id,
    default: true,
    name: capitalCase(id),
    emoji: defaultSoundsEmojis[id],
    file: id + ".ogg"
  }
}


