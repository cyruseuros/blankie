import { define, html } from 'hybrids'
import '../components/sounds'
import '../components/fab'

interface Home { }

export default define<Home>({
  tag: 'app-home',
  content: () => html`
    <template layout="column items:center">
      <h1 layout="::color:bg">🧸 blankie</h1>
      <app-sounds></app-sounds>
      <app-fab></app-fab>
      <footer layout="::color:bg margin:top:2 margin:bottom:4">
        <p layout="margin:bottom:0">something to help my 🐹 sleep while i'm away</p>
        <p layout="margin:top:1 block:end">— 🐻</p>
      </footer>
    </template>
  `,
})
