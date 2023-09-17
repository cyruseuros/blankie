import { define, mount, html, router } from 'hybrids';
import Home from './views/home'

interface App {
  stack: HTMLElement[]
}

const App = define<App>({
  tag: 'app-container',
  stack: router(Home),
  content: e => html`
    <template layout="column">
      ${e.stack}
    </template>
  `
})

if (import.meta.hot) import.meta.hot.accept();
mount(document.body, App)
