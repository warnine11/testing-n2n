/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
const CustomInit = {
  init({ button, drawer, hero, content }) {
    console.log('Initializing CustomInit with:', { button, drawer, hero, content });
    if (button) {
      button.addEventListener('click', (event) => {
        this._toggleDrawer(event, drawer);
      });
    }
    if (hero) {
      hero.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    }
    if (content) {
      content.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    }
  },

  _toggleDrawer(event, drawer) {
    if (drawer) {
      drawer.classList.toggle('open');
    }
  },

  _closeDrawer(event, drawer) {
    if (drawer) {
      drawer.classList.remove('open');
    }
  },
};

export default CustomInit;