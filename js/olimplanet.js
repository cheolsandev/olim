'use strict';

var Olim = {};


Olim.headerFunc = function(){
  var $header = $('header'),
  $gnb = $header.find('.gnb');

  $('.header-btn-nav').on('click', function(){
    $header.toggleClass('header-nav-on');
    $gnb.find('.sub').removeClass('on');
  });

  $gnb.find('> li > a').on('click', function(event){
    if ($header.hasClass('header-nav-on')) {
      var $sub = $(this).parent('li').find('.sub');
      if ($sub.length > 0) {
       event.preventDefault();
       $gnb.find('> li').removeClass('on');
       $sub.closest('li').addClass('on');
      }
    }
  });
};

Olim.floatView = function(){
  var targets = $('.appear-cont');

  var checkScroll = function(target){
    var s = $(window).scrollTop(),
    t = target.offset().top - $(window).height();
    if (s > t) {
      target.addClass('appeared');
    }
  };

  $(window).on('scroll', function(){
    targets.each(function(){
      checkScroll($(this));
    });
  });
};

Olim.init = function(){
  // common
  Olim.headerFunc();
  Olim.floatView();
};

Olim.init();