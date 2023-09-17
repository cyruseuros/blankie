import { store, define, html } from 'hybrids'
import SoundModel from '../models/sound'

interface Fab {
  playing: boolean
  sounds?: SoundModel[]
  icon: string
  label: string
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
  icon: e => e.playing ? "🔈" : "🔊",
  label: e => e.playing ? "pause" : "play",
  sounds: store([SoundModel]),
  render: e => html`
    <template layout>
      <button
        layout="::background-color:fg
                ::color:bg
                ::border-radius:round
                ::box-shadow:thick
                padding:2
                fixed
                layer:2
                bottom:3
                left:50%
                ::font-family:system"
        type="button" onclick="${togglePlay}">
        ${e.icon}
      </button>
    </template>
  `.css`
    button {
      border: none;
      transform: translate(-50%);
    }

    button:active {
      box-shadow: var(--box-shadow-thin);
    }    
  `
}) 