import { store, define, html } from 'hybrids'
import SoundModel from '../models/sound'

interface Fab {
  playing: boolean
  sounds?: SoundModel[]
}

function togglePlay(e: Fab) {
  if (e.sounds) {
    console.log('clicked')
    if (e.playing) {
      e.playing = false
      for (const sound of e.sounds) {
        sound.audio.pause()
      }
    } else {
      e.playing = true
      for (const sound of e.sounds) {
        sound.audio.play()
      }
    }
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