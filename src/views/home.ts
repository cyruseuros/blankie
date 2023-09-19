import { define, html } from 'hybrids'
import '../components/sounds'
import '../components/fab'

interface Home { }

export default define<Home>({
  tag: 'app-home',
  content: () => html`
    <template layout="column items:center">
      <img src="/icon.png" alt="blankie logo"/>
      <app-sounds></app-sounds>
      <app-fab></app-fab>
      <footer layout="::color:bg margin:top:2 margin:bottom:4">
        <p layout="margin:bottom:0">something to help my 🐹 sleep while i'm away</p>
        <p layout="margin:top:1 block:end">— 🐻</p>
      </footer>
    </template>
  `.css`
    img {
      width: min(300px, 75%);
      aspect-ratio: 1 / 1;
      margin-top: -25px;
      margin-bottom: -25px
    }
  `,
})
