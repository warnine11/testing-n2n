/* eslint-disable linebreak-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="jumbotron">
        <picture>
          <source media="(max-width: 600px)" srcset="images/heros/hero-image_4-small.jpg">
          <source media="(min-width: 601px)" srcset="images/heros/hero-image_4-large.jpg">
          <img src="images/heros/hero-image_4-large.jpg" alt="Hero Image" />
        </picture>
        <h1>Met Dateng Di Saddam Resto</h1>
        <p>Mau Mangan Apa Bang Hari ini?</p>
      </div>
    `;
  }
}

customElements.define('hero-section', Hero);
