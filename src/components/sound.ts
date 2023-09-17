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
      <template layout="column">
        <div layout="row">
          <div>${e.sound?.emoji}</div>
          <div>${e.sound?.name}</div>
        </div>

        <input type="range" min="0" max="100"
          value="${e.sound?.volume}" oninput="${html.set(e.sound, 'volume')}">

        ${e.sound?.audio}
      </template>
    `}
  `.css`
  `
})
