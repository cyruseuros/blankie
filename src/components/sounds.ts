import { define, store, html } from 'hybrids'
import SoundModel from '../models/sound'
import './sound'

interface Sounds {
  sounds?: SoundModel[]
}

export default define<Sounds>({
  tag: 'app-sounds',
  sounds: store([SoundModel]),
  render: e => html`
    <template
      layout="column
              items:center
              gap:1
              width:max:min(85%,500px)
              ::background-color:bg
              ::border-radius:gentle
              ::box-shadow:thick padding:3">
      ${e.sounds?.map(sound => store.ready(e.sounds) && html`<app-sound layout="width:66%" sound="${sound.id}"></app-sound>`)}
    </template>
  `
})
