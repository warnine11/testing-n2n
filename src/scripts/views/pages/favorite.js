/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'; // Pastikan jalur impor sudah benar
import { createItemRestaurant, LoadingIndicator } from '../templates/restaurant-content';

const Like = {
  async render() {
    return `
      <div class="katalog">
        <h1 tabindex="0" class="katalog_label">Favorite Kamu</h1>
        <div id="Restaurant" class="posts"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants(); // Pastikan fungsi ini sudah didefinisikan dan bekerja dengan benar
    const restaurantContainer = document.querySelector('.posts');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createItemRestaurant(restaurant); // Gunakan createItemRestaurant yang benar
    });

    this._hideHero();
  },

  _hideHero() {
    const heroContent = document.querySelector('hero-section');
    if (heroContent) {
      heroContent.style.display = 'none';
    }
  },
};

export default Like;
