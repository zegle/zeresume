// adds loaded class on page load
$(document).ready(function () {

  setTimeout(function () {
    $('body').addClass('loaded');
    $('h1').css('color', '#222222');
  }, 2000);

});

/*..................Page animation triggers when element comes into viewport...............*/
  (function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {

      var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

  })(jQuery);

var win = $(window);

win.scroll(function (event) {
  if ($(window).width() >= 992) { 
    $(".animated").each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("fadeLeftRight");
        $(".showhide").css('visibility', 'visible');
        $(".animate").addClass("slideup");
      }
      else {
        $(".animated").removeClass("fadeLeftRight");
        $(".animate").removeClass("slideup");
        $(".showhide").css('visibility', 'hidden');
      }
    });
    $(".experience").each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        $(".animate1").addClass("slidelft").css('visibility', 'visible');
        $(".animate2").addClass("slidedwn").css("visibility", "visible");
        $(".animate3").addClass("slideup").css("visibility", "visible");
      }
      else {
        $(".animate1").removeClass("slidelft").css("visibility", "hidden");
        $(".animate2").removeClass("slidedwn").css("visibility", "hidden");
        $(".animate3").removeClass("slideup").css("visibility", "hidden");
      }
    });
    $(".education").each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        $(".animate4").addClass("slidelft").css('visibility', 'visible');
        $(".animate5").addClass("slidedwn").css("visibility", "visible");
        $(".animate6").addClass("slideup").css("visibility", "visible");
      }
      else {
        $(".animate4").removeClass("slidelft").css("visibility", "hidden");
        $(".animate5").removeClass("slidedwn").css("visibility", "hidden");
        $(".animate6").removeClass("slideup").css("visibility", "hidden");
      }
    });
    $(".skills").each(function (i, el) {
      var el = $(el);
      if (el.visible(true)) {
        $(".animate7").addClass("bounceInLeft").css('visibility', 'visible');
      }
      else {
        $(".animate7").removeClass("bounceInLeft").css("visibility", "hidden");
      }
    });
  }
});

// configured nav slide in at specific scroll point, 
// adds/removes body padding at specific scroll position
$(function() {
  $(window).scroll(function () {
    var availableScroll = $(document).height() - $(window).height();
      var x = $(window).scrollTop();
    if ($(window).width() >= 992) {
      if (x >= 998 || Math.abs(x - availableScroll) < 10) {
        $("body").stop().animate({ "padding-left": "17rem" });
        $("#sideNav").stop().animate({ "left": "0px" });
        /*$(".animate").addClass("typewriter").css('visibility', 'visible');*/
      }
      else {
        $("#sideNav").stop().animate({"left":"-300px"});
        $("body").stop().animate({ "padding-left": "0rem" });
        /*$(".animate").removeClass("typewriter").css('visibility', 'hidden');*/
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
