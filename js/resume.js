// adds loaded class on page load
$(document).ready(function () {

  setTimeout(function () {
    $('body').addClass('loaded');
    $('h1').css('color', '#222222');
  }, 2000);

});

// adds/removes body padding at specific scroll position
$(window).scroll(function () {
  var y_scroll_pos = window.pageYOffset;
  var scroll_pos_test = 950;
  
  if ($(window).width() >= 992) {
    if (y_scroll_pos > scroll_pos_test) {
      $("body").stop().animate({"padding-left":"17rem"});
    }
    else {
      $("body").stop().animate({ "padding-left": "0rem" });
    }
  }
});

// configured nav fadin/out at specific scroll position
$(function() {
  $(window).scroll(function () {
    if ($(window).width() >= 992) {
      if ($(this).scrollTop() > 950) {
        $("#sideNav").stop().animate({ "left": "0px" });
      }
      else {
        $("#sideNav").stop().animate({"left":"-300px"});
      }
    }
  });
});


(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
