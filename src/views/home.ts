import { define, html } from 'hybrids'
import '../components/sounds'
import '../components/fab'

interface Home { }

export default define<Home>({
  tag: 'app-home',
  content: () => html`
    <template layout="column">
      <app-sounds></app-sounds>
      <app-fab></app-fab>
    </template>
  `,
})
