const menuColor = document.querySelector('.header__nav');
window.onscroll = () => {
  if (window.scrollY > 50) {
    menuColor.classList.add('color');
  } else if (window.scrollY === 0) {
    menuColor.classList.remove('color');
  }
}


$(function () {

  $(".menu a, .footer__logo, .header__bottom-link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.burger, .menu__link').on('click', function (event) {
    $('.burger').toggleClass('burger--active');
    $('.header__nav').toggleClass('active');
  });

  $('.logo').on('click', function(event) {
    $('.burger').removeClass('burger--active');
    $('.header__nav').removeClass('active');
  });

  $("a.works__link").fancybox({
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'speedIn': 600,
    'speedOut': 200,
    'overlayShow': false
  });


  var mixer = mixitup('.works');
});
