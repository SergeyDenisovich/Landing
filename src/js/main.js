$(function () {
  console.log('work');

  // ====================== slider
  $('.slider-section').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    mobileFirst: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  });

  $('.header__location').fancybox({
    buttons: ['fullScreen', 'close'],
  });

  $('.slider-section__item > a').fancybox({
    arrows: false,
    infobar: false,
    buttons: ['zoom', 'fullScreen', 'close'],
  });

  // ====================== Добавление и удаление класса у навигации
  $('.header__burger').click(function () {
    $('.nav').addClass('nav--active');
  });

  $('.nav__close-btn').click(function () {
    $('.nav').removeClass('nav--active');
  });
  // =======================
});
