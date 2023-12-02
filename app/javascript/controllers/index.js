// Import and register all your controllers from the importmap under controllers/*
import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)

document.addEventListener('DOMContentLoaded', function () {
  // Initialisation du carousel avec Bootstrap
  const myCarouselElement = document.querySelector('#movieCarousel');
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
  });

  // Gestionnaire d'événement pour le carousel
  const myCarousel = document.getElementById('movieCarousel');
  myCarousel.addEventListener('slide.bs.carousel', event => {
    // do something...
    const newIndex = event.to;

    // Appeler une fonction locale pour mettre à jour la position
    updateCarouselPosition(newIndex);
  });

  // Fonction locale pour mettre à jour la position du carousel
  function updateCarouselPosition(newIndex) {
    // Faites quelque chose avec la nouvelle position, par exemple, loggez-la
    console.log('Carousel position updated:', newIndex);
  }

  // Gestionnaire d'événement pour le bouton de bascule entre le carousel et la grille
  const carouselGrid = document.getElementById('movieCarousel');
  const moviesGrid = document.getElementById('moviesGrid');
  const gridButton = document.querySelector('.btn-fa-list');
  const showCarouselBtn = document.getElementById('showCarouselBtn');
  const carouselIndicator = document.querySelector('.carousel-indicators');

  // Vérifier si le carousel a déjà été initialisé
  if (!myCarousel.dataset.initialized) {
    // Masquer le carousel et afficher la grille
    function showMoviesGrid() {
      carouselGrid.style.display = 'none';
      moviesGrid.style.display = '';
      carouselIndicator.style.display = 'none';
    }

    // Masquer la grille et afficher le carousel
    function showCarousel() {
      carouselGrid.style.display = 'block';
      moviesGrid.style.display = 'none';
      carouselIndicator.style.display = '';
    }

    // Gérer le clic sur le bouton "Home"
    gridButton.addEventListener('click', function (event) {
      event.preventDefault();
      showMoviesGrid();
    });

    // Gérer le clic sur le bouton "Show Carousel"
    showCarouselBtn.addEventListener('click', function (event) {
      event.preventDefault();
      showCarousel();
    });

    // Marquer le carousel comme initialisé
    myCarousel.dataset.initialized = true;
  }

  // Vous pouvez également ajouter une fonction pour afficher le carousel au chargement initial de la page
  // showCarousel();
});
