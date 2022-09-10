// todo ================================ SLIDER__BRANDS
$(document).ready(function () {
  // тут вказується клас DIVчика яз якого потрібно зробити слайдер
  $('.slick__brands-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    // arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

   /* responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],*/

    prevArrow: '<button type="button" class="slick-prev">&#60;</button>',
    nextArrow: '<button type="button" class="slick-next">&#62;</button>',
  });
});

