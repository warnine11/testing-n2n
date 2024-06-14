/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';
/* eslint-disable */

// Utility function to create a list of items
const createList = (items) => items.map(item => `<li>${item.name}</li>`).join('');

// Utility function to create customer reviews
const createReviews = (reviews, rating) => reviews.map(review => `
  <div class="resto_reviews">
    <img src="images/heros/icon.png" alt="" class="header_logo" >
    <p class="customer">${review.name}</p>
    <p class="review_customer">${review.review}</p>
    <p style="color: rgb(255, 196, 112);" tabindex="0" class="item_rating">⭐️⭐️⭐️ Rating: ${rating}</p>
    <p class="review_date" style="rgb(63, 29, 56);">${review.date}</p>
  </div>
`).join('');

const DetailRestoku = (restaurant) => `
  <div class="container">
    <h2 class="resto-info_name">${restaurant.name}</h2>
    <img class="resto-info_img" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}"/>
    <div class="info">
      <p tabindex="0" class="resto-info_city">Location: ${restaurant.city}</p>
      <p tabindex="0" class="resto-info_description">${restaurant.description}</p>
      <p tabindex="0" class="resto-info_address">Address: ${restaurant.address}</p>
      <p class="menu_title" style="color: rgb(63, 29, 56);">Menu</p>
      <div class="grid-card">
        <img src="images/heros/logo.jpg" alt="Gambar 2">
        <h2 style="color: rgb(255, 196, 112);">Makanan</h2>
        <ul class="category_list">${createList(restaurant.menus.foods)}</ul>
      </div>
      <div class="grid-card">
        <img src="images/heros/logo.jpg" alt="Gambar 2">
        <h2>Minuman</h2>
        <ul class="category_list">${createList(restaurant.menus.drinks)}</ul>
      </div>
      <p class="reviews_title" style="color: rgb(255, 196, 112);">Customer Reviews</p>
      <div class="reviews">
        ${createReviews(restaurant.customerReviews, restaurant.rating)}
      </div>
    </div>
  </div>
`;

const createItemRestaurant = (restaurant) => `
  <div tabindex="0" class="post-item">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="item_content">
      <p tabindex="0" class="item_rating">⭐️ Rating: ${restaurant.rating}</p>
      <h1 tabindex="0" class="item_title"><a class="interactive-link" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
      <p tabindex="0" class="item_description">${restaurant.description}</p>
      <p tabindex="0" class="item_city">Location: ${restaurant.city}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const LoadingIndicator = () => `
  <div class="loading-indicator">
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
    <p>Loading...</p>
  </div>
`;

export {
  DetailRestoku,
  createItemRestaurant,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  LoadingIndicator,
};
