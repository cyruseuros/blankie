import { store, define, html } from 'hybrids'
import SoundModel from '../models/sound'

interface Fab {
  playing: boolean
  sounds?: SoundModel[]
}

function togglePlay(e: Fab) {
  if (e.sounds) {
    if (e.playing) {
      for (const sound of e.sounds) {
        sound.audio.pause()
      }
    } else {
      for (const sound of e.sounds) {
        sound.audio.play()
      }
    }

    e.playing = !e.playing
  }
}

export default define<Fab>({
  tag: 'app-fab',
  playing: false,
  sounds: store([SoundModel]),
  render: () => html`
    <button type="button" onclick="${togglePlay}">play/pause<button>
  `
}) 