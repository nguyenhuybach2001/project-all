//scroll header
$(function () {
  $(document).ready(function(){
    var nav = $('.l-nav');
    var body = $('body');
    var headerBannerHeight = 0;
    if($('.c-header-banner').length > 0){
      var headerBanner = $('.c-header-banner');
      headerBannerHeight = headerBanner.height();
    }
    var headerTotal = headerBannerHeight;
    if(nav.length > 0){
      $(window).scroll(function(){
        if($(this).scrollTop() > headerTotal){
          nav.addClass('has-fixed');
          body.addClass('has-padding');
        }
        if($(this).scrollTop() <= headerTotal){
          nav.removeClass('has-fixed');
          body.removeClass('has-padding');
        }
      });
    }
  });
});

//var function menu click
$(function () {
  $(document).ready(function(){
    if($('.js-menu-expand').length > 0){
      $('.js-menu-expand').click(function(e) {
        e.preventDefault();
        var menu = $('.c-header-right');
        if (menu.hasClass('has-menu-tiny')) {
          $(this).removeClass('active');
          menu.removeClass('has-menu-tiny')
              .slideUp();
        } else {
          $(this).addClass('active');
          menu.addClass('has-menu-tiny')
              .slideDown();
        }
      });
    }
  });
});

//var function star slider
$(function () {
  $(document).ready(function(){
    if($('.js-star-slider').length > 0){
      $('.js-star-slider').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        responsiveClass:false,
        nav:true,
        dots:false,
        autoplay:true,
        autoHeight:false,
        autoplayTimeout:6000,
        autoplaySpeed:1000,
        autoplayHoverPause:true,
        navText:false
      });
    }
  });
});

//var function combatant slider
$(function () {
  $(document).ready(function(){
    if($('.js-combatant-slider').length > 0){
      $('.js-combatant-slider').owlCarousel({
        loop:false,
        responsiveClass:false,
        nav:true,
        dots:false,
        autoplay:false,
        autoHeight:false,
        autoplayTimeout:6000,
        autoplaySpeed:1000,
        autoplayHoverPause:true,
        navText:false,
        responsive:{
          0:{
            items:1,
            margin:0
          },
          768:{
            items:3,
            margin:20
          },
          1200:{
            items:3,
            margin:30
          }
        }
      });
    }
  });
});

//var function project tabs click
$(function () {
  $(document).ready(function(){
    if($('.c-project-tabs').length > 0){
      $('.c-project-tabs .c-project-tabs__title ul li a').click(function(e) {
        e.preventDefault();
        var parent = $(this).parent();
        var root = $(this).parent().parent().parent().parent();
        var id = $(this).attr('href');
        if (!parent.hasClass('active')) {
          $('.c-project-tabs__title ul li.active',root).removeClass('active');
          $('.c-project-tabs__pane.active',root).hide().removeClass('active');
          parent.addClass('active');
          $(id).show().addClass('active');
        }
      });
    }
  });
});

//var function pupil slider
$(function () {
  $(document).ready(function(){
    if($('.js-pupil-slider').length > 0){
      $('.js-pupil-slider').owlCarousel({
        loop:true,
        responsiveClass:false,
        nav:true,
        dots:false,
        autoplay:false,
        autoHeight:false,
        autoplayTimeout:6000,
        autoplaySpeed:1000,
        autoplayHoverPause:true,
        navText:false,
        responsive:{
          0:{
            items:1,
            margin:0
          },
          768:{
            items:3,
            margin:0
          },
          1200:{
            items:3,
            margin:10
          }
        }
      });
    }
  });
});

//var function show password text
$(function () {
  $(document).ready(function(){
    if($('.js-show-password').length > 0){
      $('.js-show-password').click(function() {
        var parent = $(this).parent();
        var input = $('input',parent);
        if (input.attr("type") == "password") {
          input.attr("type", "text");
          $(this).addClass('active');
        } else {
          input.attr("type", "password");
          $(this).removeClass('active');
        }
      });
    }
  });
});

//var function pin code
$(function () {
  $(document).ready(function(){
    if($('.c-otp-number').length > 0){
      $(".c-otp-number .form-control").jqueryPincodeAutotab();
    }
  });
});