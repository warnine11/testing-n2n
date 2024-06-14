/* eslint-disable linebreak-style */
import DaftarRestaurant from '../views/pages/list-restaurant';
import DetailResto from '../views/pages/detail';
import FavoritePage from '../views/pages/favorite'; // Import FavoritePage

const routes = {
  '/': DaftarRestaurant,
  '/like': FavoritePage, // Add FavoritePage to routes
  '/detail/:id': DetailResto,
};

export default routes;
