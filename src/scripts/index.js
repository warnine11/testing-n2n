/* eslint-disable */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import './views/custom-elemen/hero';
import './views/custom-elemen/footer';
import './views/custom-elemen/header';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';



document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    hero: document.querySelector('hero-section'),
    content: document.querySelector('#maincontent'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
});
const generateImage = () => {
  for (let i = START; i < START + NUMBER_OF_IMAGES; i++) {
    document.body.innerHTML += `<img class="lazyload" data-src="https://picsum.photos/id/${i}/400/400" alt="dummy images"><br>`;
  }
};

generateImage();
