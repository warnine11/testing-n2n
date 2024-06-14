/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
    console.log('Installing Service Worker ...');
   
    // TODO: Caching App Shell Resource
  });
   
  self.addEventListener('activate', (event) => {
    console.log('Activating Service Worker ...');
   
    // TODO: Delete old caches
  });
   
  self.addEventListener('fetch', (event) => {
    console.log(event.request);
   
    event.respondWith(fetch(event.request));
    // TODO: Add/get fetch request to/from caches
  });