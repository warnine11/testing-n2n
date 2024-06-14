/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking and Unliking A Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking one restaurant', async ({ I }) => {
  // Ensure no restaurants are liked initially
  I.waitForElement('.restaurant-item__not__found', 10);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  // Navigate to the main page
  I.amOnPage('/');
  I.waitForElement('.restaurant__title a', 10);

  // Ensure the restaurant list is loaded
  I.waitForElement('.restaurant-item', 10);

  // Grab the first restaurant's title
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  // Click on the first restaurant to navigate to its detail page
  I.click(firstRestaurant);

  // Wait for the like button to be visible and click it
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Navigate to the liked restaurants page
  I.amOnPage('/#/like');
  I.waitForElement('.restaurant-item', 10);

  // Verify if the restaurant is now liked
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');

  // Compare the titles to ensure they match
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('liking and then unliking a Restaurant', async ({ I }) => {
    // Increase wait time and add verbose logging
    I.waitForElement('.main .list #restaurant-list', 15);
    console.log("Restaurant list element found");
    I.click(locate('.card .title a').first());
  
    I.seeElement('[aria-label="like this Restaurant"]');
    I.click('[aria-label="like this Restaurant"]');
  
    I.amOnPage('/#/favorite');
    I.waitForElement('.list-item', 10); // Wait for favorite list items to appear
    console.log("Favorite list loaded");
  
    I.click(locate('.list-item a').first());
  
    I.seeElement('[aria-label="unlike this Restaurant"]');
    I.click('[aria-label="unlike this Restaurant"]');
  
    I.amOnPage('/#/favorite');
    I.waitForElement('.list-item__not__found', 10); // Wait for favorite list to be empty
    console.log("Favorite list empty");
  
    I.dontSeeElement('.list-item');
  });
