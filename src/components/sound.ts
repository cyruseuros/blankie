import { define, store, html } from 'hybrids'
import SoundModel from '../models/sound'

interface Sound {
  sound?: SoundModel
}

export default define<Sound>({
  tag: 'app-sound',
  sound: store(SoundModel),
  render: e => html`
    ${store.ready(e.sound) && html`
      <template layout>
        <input type="range" min="0" max="100"
          value="${e.sound?.volume}" oninput="${html.set(e.sound, 'volume')}">
        <div layout="row gap:1 items:center content:center">
          <div>${e.sound?.emoji}</div>
          <div>${e.sound?.name}</div>
          ${e.sound?.audio}
        </div>
      </template>
    `}
  `.css`
    input[type=range] {
      accent-color: var(--color-accent);
      background: transparent;
      width: 100%;
    }
  `
})
