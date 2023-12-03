document.addEventListener('turbo:load', function () {
  const carouselGrid = document.getElementById('movieCarousel');
  const moviesGrid = document.getElementById('moviesGrid');
  const gridButton = document.querySelector('.btn-fa-list');
  const showCarouselBtn = document.getElementById('showCarouselBtn');
  const carouselIndicator = document.querySelector('.carousel-indicators');

  function showMoviesGrid() {
    carouselGrid.style.display = 'none';
    moviesGrid.style.display = '';
    if (carouselIndicator) {
      carouselIndicator.style.display = 'none';
    }
  }

  function showCarousel() {
    carouselGrid.style.display = 'block';
    moviesGrid.style.display = 'none';
    carouselIndicator.style.display = '';
  }

  if (gridButton) {
    gridButton.addEventListener('click', function (event) {
      event.preventDefault();
      showMoviesGrid();
    });
  }

  if (showCarouselBtn) {
    showCarouselBtn.addEventListener('click', function (event) {
      event.preventDefault();
      showCarousel();
    });
  }
});
