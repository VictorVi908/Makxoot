$(function(){

    $('.sliders__wrapper').slick({
        infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
    });

});

$(function(){

  $('.rewiews__items').slick({
      infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  dots: false,
  responsive: [
      {
        breakpoint: 1106,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      },
  ]
  });

$('.btn__menu').on('click' ,function(){
  $('.menu__list').slideToggle();
});


});