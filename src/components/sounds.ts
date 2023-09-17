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
    <template layout="column">
      ${e.sounds?.map(sound => store.ready(e.sounds) && html`<app-sound sound="${sound.id}"></app-sound>`)}
    </template>
  `
})
