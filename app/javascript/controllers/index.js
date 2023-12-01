// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)

$(document).ready(function() {
  const myCarouselElement = document.querySelector('#movieCarousel');
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
  });

  const myCarousel = document.getElementById('movieCarousel');

  myCarousel.addEventListener('slide.bs.carousel', event => {
    // do something...
    const newIndex = event.to;

    // Envoyer la nouvelle position au serveur via AJAX
    $.ajax({
      type: 'POST',
      url: '/update_carousel_position',
      data: { position: newIndex },
      success: function(response) {
        console.log('Carousel position updated successfully.');
      },
      error: function(error) {
        console.error('Error updating carousel position:', error);
      }
    });
  });
});
