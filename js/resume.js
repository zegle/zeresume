// adds loaded class on page load
$(document).ready(function () {

  setTimeout(function () {
    $('body').addClass('loaded');
    $('h1').css('color', '#222222');
  }, 2000);

});

// configured nav slide in at specific scroll point, 
// adds/removes body padding at specific scroll position
$(function() {
  $(window).scroll(function () {
    if ($(window).width() >= 992) {
      if ($(this).scrollTop() >= 998) {
        $("body").stop().animate({ "padding-left": "17rem" });
        $("#sideNav").stop().animate({ "left": "0px" });
        $(".animate").addClass("typewriter").css('visibility', 'visible');
      }
      else {
        $("#sideNav").stop().animate({"left":"-300px"});
        $("body").stop().animate({ "padding-left": "0rem" });
        $(".animate").removeClass("typewriter").css('visibility', 'hidden');
      }
      if ($(this).scrollTop() >= 1972) {
        $(".animate1").addClass("slidelft").css("visibility", "visible");
        $(".animate2").addClass("slidedwn").css("visibility", "visible");
        $(".animate3").addClass("slideup").css("visibility", "visible");

      }
      else {
        $(".animate1").removeClass("slidelft").css("visibility", "hidden");
        $(".animate2").removeClass("slidedwn").css("visibility", "hidden");
        $(".animate3").removeClass("slideup").css("visibility", "hidden");
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
