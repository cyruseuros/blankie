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
        </div>
      </template>
    `}
  `.css`
    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
      cursor: pointer;
      width: 100%;
    }

    input[type="range"]::-webkit-slider-runnable-track,
    input[type="range"]::-moz-range-track {
      background: var(--color-dark);
      color: var(--color-accent);
      accent-color: var(--color-accent);
      height: 1px;
    }

    input[type="range"]::-webkit-slider-thumb,
    input[type="range"]::-moz-range-thumb {
      -webkit-appearance: none;
      appearance: none;
      border: none;
      border-radius: 50%;
      height: 1rem;
      width: 1rem;
      background-color: var(--color-accent);
    }
  `
})
