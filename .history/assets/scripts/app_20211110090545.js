$('.banner__primary').slick(
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
$('.product__list').slick(
  {
      // autoplay: true,
      // autoplaySpeed: 2000,
      prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
  }
);