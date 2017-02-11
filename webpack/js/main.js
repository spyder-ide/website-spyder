foundation = require('foundation-sites/dist/js/foundation.min.js');
require("font-awesome-loader");
require('slick-carousel')

$(document).ready(function ($) {
  $('.carousel-default').slick({});
  $('.carousel-home').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
});

  $('.carousel-users').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 5000,

    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

  });

  $(document).foundation();
});
