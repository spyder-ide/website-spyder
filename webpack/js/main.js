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

  $(document).foundation();
});
