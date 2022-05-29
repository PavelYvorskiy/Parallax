const swiper = new Swiper(".mySwiper", {
   loop: true,
   autoplay: {
       delay: 1,
   },
   speed:8000,
   breakpoints: {
    // when window width is >= 320px
    310: {
      slidesPerView: 2,
      spaceBetween: 2
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 3
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 4
    },
    769: {
        slidesPerView: 5,
        spaceBetween: 4
      },
      1000:{
        slidesPerView: 6,
        spaceBetween: 4
      }
  }
  });