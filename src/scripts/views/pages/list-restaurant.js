/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import Dbrestaurant from '../../data/db-restaurant';
import { createItemRestaurant, LoadingIndicator } from '../templates/restaurant-content';

const ListRestaurant = {
  async render() {
    return `
      <section class="content">  
        <div class="katalog">
          <h1 class="latest__label">Resto List</h1>
          <div id="loading-indicator" class="loading-indicator"></div>
          <div id="restaurants" class="posts"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // eslint-disable-next-line no-underscore-dangle
    this._showHero();
    this.renderLoading();
    setTimeout(async () => {
      try {
        const restaurants = await Dbrestaurant.listRestaurant();
        this.renderRestaurants(restaurants);
      } catch (error) {
        this.renderError(error.message);
      }
    }, 2000); // Menunggu 2 detik sebelum memulai proses asynchronous
  },

  renderLoading() {
    const loadingIndicator = document.querySelector('#loading-indicator');
    loadingIndicator.innerHTML = LoadingIndicator();
    loadingIndicator.style.display = 'block'; // Memastikan elemen loading ditampilkan
  },

  renderRestaurants(restaurants) {
    const loadingIndicator = document.querySelector('#loading-indicator');
    loadingIndicator.style.display = 'none'; // Menghilangkan loading indicator
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = ''; // Menghapus konten sebelumnya jika ada
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createItemRestaurant(restaurant); // Gunakan createItemRestaurant yang benar
    });
  },

  renderError(message) {
    const loadingIndicator = document.querySelector('#loading-indicator');
    loadingIndicator.style.display = 'none'; // Menghilangkan loading indicator
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = `<p class="error-message">${message}</p>`;
  },

  // eslint-disable-next-line no-underscore-dangle
  _showHero() {
    const heroContent = document.querySelector('hero-section');
    if (heroContent) {
      heroContent.style.display = 'block';
    }
  },
};

export default ListRestaurant;
