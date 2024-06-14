/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
class Header extends HTMLElement {
  constructor() {
    super();
    // Attach Shadow DOM
    this.attachShadow({ mode: 'open' });

    // Create style element
    this._style = document.createElement('style');
    this._updateStyle();
  }

  // Update style method
  _updateStyle() {
    this._style.textContent = `
      /* CSS dasar */
      @viewport {
        width: device-width;
        zoom: 1.0;
      }

      /* Reset CSS */
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }

      body {
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
        color: #424242;
        max-width: 1200px;
        margin: 0 auto;
      }

      /* Header */
      .header {
        min-height: 3.5em;
        transition: min-height 0.3s;
        padding: 1em;
      }

      .header__inner {
        max-width: 50em;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }
      
      .header__inner h1 {
        font-size: 4vw; /* Responsif terhadap lebar layar */
      }
      @media (min-width: 600px) {
        .header__inner h1 {
          font-size: 3rem; /* Menjadi lebih besar pada layar yang lebih lebar */
        }
      }
      
      @media (min-width: 900px) {
        .header__inner h1 {
          font-size: 4rem; /* Menjadi lebih besar pada layar yang sangat lebar */
        }
      }

      .skip-to-content {
        position: absolute;
        top: -40px;
        left: 0;
        background-color: #000;
        color: #fff;
        padding: 5px;
        z-index: 1000;
      }

      .skip-to-content:focus {
        top: 0;
      }

      .header__title {
        font-weight: 300;
        font-size: 2.5em;
        margin: 0.5em 0.25em;
        display: inline-block;
        color: #212121;
      }

      .header_logo {
        width: 50px;
        height: auto;
        margin-right: 20px;
      }

      /* Top level navigation */
      .nav {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 1em 0;
      }

      .nav__toggle {
        display: none;
        font-size: 1.5em;
        background: none;
        border: none;
        cursor: pointer;
      }

      @media screen and (max-width: 768px) {
        .nav {
          position: fixed;
          top: 0;
          left: -250px; /* Hide navigation drawer by default */
          width: 250px;
          height: 100%;
          background-color: #f4f4f4;
          z-index: 1000;
          transition: left 0.3s ease;
        }

        .nav.open {
          left: 0; /* Show navigation drawer when toggle button is pressed */
        }

        .nav__toggle {
          display: block;
          position: absolute;
          top: 1em;
          left: 1em;
          font-size: 1.3em; /* Adjust the font size to make it smaller */
          width: 44px; /* Set the width to 44px */
          height: 44px; /* Set the height to 44px */
          padding: 0.5em; /* Adjust the padding to control the overall size */
          background: none;
          border: none;
          cursor: pointer;
        }

        .nav__list {
          padding-top: 4em; /* Adjust padding top to hide header */
        }
      }

      .nav__list {
        width: 100%;
        padding: 0;
        margin: 0;
        text-align: center;
      }

      .nav__item {
        display: inline-block;
        width: 25%;
        text-align: center;
        line-height: 2em;
        text-transform: uppercase;
      }

      .nav a {
        display: inline-block;
        padding: 1em;
        text-decoration: none;
        color: #616161;
      }

      .nav a:hover {
        text-decoration: underline;
        color: #000;
      }

      @media screen and (max-width: 768px) {
        /* Arrange drawer items vertically */
        .nav__list {
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Align items to the left */
        }

        /* Set 100% width for each item */
        .nav__item {
          width: 100%;
          margin-bottom: 1em; /* Adjust spacing between items */
        }

        /* Reset padding and width for links inside drawer items */
        .nav__item a {
          padding: 1em 2em; /* Adjust padding for items */
          width: auto;
          text-align: left; /* Align text to the left */
        }

        /* Adjust padding top to hide header */
        .nav__list {
          padding-top: 4em;
        }

        /* Close button */
        #closeDrawer {
          position: absolute;
          top: 0;
          right: 1;
          padding: 0.75em; /* Add padding to enlarge touch area */
          font-size: 2em; /* Adjust font size */
          background: none;
          border: none;
          cursor: pointer;
          color: #616161;
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this._style.textContent}</style>

      <header class="header">
        <div class="header__inner">
          <div tabindex="0" class="header__title">
            <img src="images/heros/logo.jpg" alt="Saddam Resto" class="header_logo">
            <h1>Saddam Resto</h1>
          </div>
          <button id="menu" class="nav__toggle">☰</button>
          <nav id="drawer" class="nav-list nav">
            <ul class="nav__list">
              <li class="nav__item"><a href="/">Home</a></li>
              <li class="nav__item"><a href="#/like">Favorite</a></li>
              <li class="nav__item"><a href="https://www.instagram.com/unknwn_wldn911?igsh=MXU5ZHB4OG95aG54MQ==" target="_blank" rel="noopener noreferrer">About Me</a></li>
            </ul>
            <button id="closeDrawer" class="nav__toggle" aria-label="Close navigation drawer">×</button>
          </nav>
        </div>
      </header>
    `;

    this._setupEventListeners();
  }

  _setupEventListeners() {
    const menuButton = this.shadowRoot.querySelector('#menu');
    const closeButton = this.shadowRoot.querySelector('#closeDrawer');
    const drawer = this.shadowRoot.querySelector('#drawer');

    menuButton.addEventListener('click', () => {
      drawer.classList.add('open');
    });

    closeButton.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }
}

customElements.define('header-section', Header);
