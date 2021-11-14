const menuBtn = document.querySelector('.navbar__mobile-btn');
const menu = document.querySelector('.navbar__mobile');
const menuClose = document.querySelector('.navbar__close');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('openMobile');
})
menuClose.addEventListener('click', () => {
  menu.classList.toggle('openMobile');
})

$('.banner__outside-slider').slick(
  {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  }
);
$('.banner__list').slick(
    {
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                arrows: false,
              }
            },
          ]
    }
);
$('.product__slider').slick(
  {
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
  }
);
$('.tabs__slider').slick(
  {
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
  }
);
$('.brands__slider').slick(
  {
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
      ]
  }
);
$('.app__slider').slick(
  {
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    slidesToShow: 1,
    slidesToScroll: 1,
  }
);
