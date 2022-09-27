// todo ================================ SLIDER__BRANDS
$(document).ready(function () {
  // тут вказується клас DIVчика яз якого потрібно зробити слайдер
  $('.slick__brands-slider').slick({
    // dots: true,
    infinite: true,
    // arrows: true,

    // centerMode: true,
    // centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          dots: true,
          // arrows: true,
          // centerMode: true,
          // centerPadding: '20px',
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    prevArrow: '<button type="button" class="slick-prev">&#60;</button>',
    nextArrow: '<button type="button" class="slick-next">&#62;</button>',
  });
});
