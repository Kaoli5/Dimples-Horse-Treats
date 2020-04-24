$(document).ready(() => {

  $(window).on('scroll', () => {
    $('.box').animate({top: '-65px'}, 500);
  });



  $('.1').on('click', () => {
    $('body').scrollTo('#top-page', 1000);
  });

  $('.2').on('click', () => {
    $('body').scrollTo('#about', 1000);
  });

  $('.3').on('click', () => {
    $('body').scrollTo('#tutorial', 1000);
  });


  $('.4').on('click', () => {
    $('body').scrollTo('.saying', 1000);
  });

  $('.5').on('click', () => {
    $('body').scrollTo('.buy-2', 1000);
  });

  $('.6').on('click', () => {
    $('body').scrollTo('.contact1', 1000);
  });

  $('.7').on('click', () => {
    $('body').scrollTo('.contact1', 1000);
  });


});
