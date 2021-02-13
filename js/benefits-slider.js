var breakpoint = window.matchMedia('(min-width: 1200px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.benefits__slider', {
    pagination: {
      el: '.benefits__pagination',
      clickable: true,
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
  })
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
