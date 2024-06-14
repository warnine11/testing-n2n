/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable */
import CustomInit from '../utils/drawer-init';
import parselurl from '../routes/parsel-url';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, hero, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    CustomInit.init({
      button: this._button,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
    });

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = parselurl.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLink = document.querySelector('.skip-to-content');
    const mainContent = document.querySelector('#maincontent');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.focus();
    });
  }
}

export default App;
