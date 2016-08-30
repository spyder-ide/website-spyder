foundation = require('foundation-sites/dist/foundation.min.js');
require("font-awesome-loader");
require('slick-carousel')

$(document).ready(function ($) {
  $('.carousel-default').slick({});
  $('.carousel-home').slick({
    autoplay: true,
    autoplaySpeed: 2000,
});

  $(document).foundation();
});
