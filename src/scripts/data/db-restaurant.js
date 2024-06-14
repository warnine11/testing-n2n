/* eslint-disable linebreak-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
import API_RESTAURANT from '../globals/api-restaurant';

class Dbrestaurant {
  static async listRestaurant() {
    try {
      const response = await fetch(API_RESTAURANT.LIST_RESTAURANT);
      const responseJson = await response.json();
      console.log(responseJson); // Log to check the response
      return responseJson.restaurants;
    } catch (error) {
      console.error('Failed to fetch restaurant list:', error);
      throw error;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_RESTAURANT.DETAIL(id));
      const responseJson = await response.json();
      console.log(responseJson); // Log to check the response
      return responseJson.restaurant;
    } catch (error) {
      console.error('Failed to fetch restaurant details:', error);
      throw error;
    }
  }
}
export default Dbrestaurant;
