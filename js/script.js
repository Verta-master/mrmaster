//Header scroll
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $('.header').addClass('header--scroll');
  } else {
    $('.header').removeClass('header--scroll');
  };
});

//Footer
if (window.innerWidth < 1024) {
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  })
}
