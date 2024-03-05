/*
Lektor-Icon Theme
Copyright (c) 2016- Lektor-Icon Contributors

Original standalone HTML5 theme distributed under the terms of the
Creative Commons Attribution 3.0 license -->
https://creativecommons.org/licenses/by/3.0/

Additions, modifications and porting released under the terms of the
MIT (Expat) License: https://opensource.org/licenses/MIT
See the LICENSE.txt file for more details
https://github.com/spyder-ide/lektor-icon/blob/master/LICENSE.txt

For information on the included third-party assets, see NOTICE.txt
https://github.com/spyder-ide/lektor-icon/blob/master/NOTICE.txt
*/

/* global showMailingPopUp, mailchimpButtonEnabled */

(function () {
  "use strict";

  const heroHeight = function () {
    const headerHeight = $(".js-sticky").outerHeight();
    if ($(window).outerWidth() >= 768) {
      $(".js-fullheight-home").css(
        "height",
        `calc(100dvh - ${headerHeight}px)`
      );
      $(".hero-section").css("margin-top", `${headerHeight}px`);
    } else {
      $(".js-fullheight-home").css("height", "50dvh");
      $(".hero-section").css("margin-top", "0px");
    }
  };

  const setHeroHeight = function () {
    heroHeight();
    $(window).on("resize", heroHeight);
  };

  // Loading animation
  const loaderPage = function () {
    $(".fh5co-loader").fadeOut("slow");
  };

  // Show and hide tab content and images on click in the mission section
  const fh5coTabs = function () {
    $(".fh5co-tabs li a").on("click", function (event) {
      event.preventDefault();
      const $this = $(this);
      const tab = $this.data("tab");
      $(".fh5co-tabs li").removeClass("active");
      $this.closest("li").addClass("active");
      $this
        .closest(".fh5co-tabs-container")
        .find(".fh5co-tab-content")
        .removeClass("active");
      $this
        .closest(".fh5co-tabs-container")
        .find('.fh5co-tab-content[data-tab-content="' + tab + '"]')
        .addClass("active");
      $this.closest(".body-section").find(".tab-image").removeClass("active");
      $this
        .closest(".body-section")
        .find('.tab-image[data-tab-content="' + tab + '"]')
        .addClass("active");
    });
  };

  // Parallax
  const parallax = function () {
    $(window).stellar({
      horizontalScrolling: false,
      responsive: true,
    });
  };

  // Hide the sidebar if user scrolls the page
  const scrolledWindow = function () {
    $(window).on("scroll", function () {
      if ($("body").hasClass("offcanvas-visible")) {
        $("body").removeClass("offcanvas-visible");
        $(".js-fh5co-nav-toggle").removeClass("active");
      }
    });

    $(window).on("resize", function () {
      if ($("body").hasClass("offcanvas-visible")) {
        $("body").removeClass("offcanvas-visible");
        $(".js-fh5co-nav-toggle").removeClass("active");
      }
    });
  };

  // Page Nav
  const clickMenu = function () {
    let topVal = $(window).width() < 768 ? 0 : 58;

    $(window).on("resize", function () {
      topVal = $(window).width() < 768 ? 0 : 58;
    });
    $(
      '.fh5co-main-nav a:not([class="external"]), #fh5co-offcanvas a:not([class="external"]), a.fh5co-content-nav:not([class="external"])'
    ).on("click", function (event) {
      const section = $(this).data("nav-section");

      if ($('div[data-section="' + section + '"]').length) {
        $("html, body").animate(
          {
            scrollTop:
              $('div[data-section="' + section + '"]').offset().top - topVal,
          },
          500,
          "easeInOutExpo"
        );

        event.preventDefault();
      }
    });
  };

  // Reflect scrolling in navigation
  const navActive = function (section) {
    $(
      ".fh5co-main-nav a[data-nav-section], #fh5co-offcanvas a[data-nav-section]"
    ).removeClass("active");
    $(".fh5co-main-nav, #fh5co-offcanvas")
      .find('a[data-nav-section="' + section + '"]')
      .addClass("active");
  };

  // A section to scroll to on the mainpage
  const navigationSection = function () {
    const $section = $("div[data-section]");

    $section.waypoint(
      function (direction) {
        if (direction === "down") {
          navActive($(this.element).data("section"));
        }
      },
      {
        offset: "150px",
      }
    );

    $section.waypoint(
      function (direction) {
        if (direction === "up") {
          navActive($(this.element).data("section"));
        }
      },
      {
        offset: function () {
          return -$(this.element).height() + 155;
        },
      }
    );
  };

  // Set Mailchimp event handler
  const setMailchimpEvent = function () {
    document.getElementById("mailchimp-button").onclick = function () {
      showMailingPopUp();
    };
  };

  // Document on DOM ready
  $(function () {
    setHeroHeight();
    loaderPage();
    fh5coTabs();
    parallax();
    scrolledWindow();
    clickMenu();
    navigationSection();
    if (mailchimpButtonEnabled) {
      setMailchimpEvent();
    }
  });
})();
