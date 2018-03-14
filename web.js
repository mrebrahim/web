/*global , $, console , alert*/
/*global , $, console , alret*/
$(function (){
  "use strict";
  //adjust header دى اداه تظبط الصورة فى الصفحة
var myheader = $('.header');

  myheader.height($(window).height());

  $(window).resize(function () {
    myheader.height($(window).height());
  });



});

$(document).ready(function(){
  $('.slider').bxSlider({
  pager:true
  });

  //smoth scroll دى اداه تودينى على الحاجه اللى انا عايزها
  $('.ser').click(function () {
    $('html , body').animate({
      scrollTop: $('#services').offset().top
    } , 1000);
  });

  $('.test').click(function () {
    $('html , body').animate({
      scrollTop: $('#testmonalns').offset().top
    } , 1000);
  });

  $('.port').click(function () {
    $('html , body').animate({
      scrollTop: $('#our-project').offset().top
    } , 1000);
  });
//سليدر جديدبالجكويرى
(function autoslider (){
$('.slide .active').each(function (){

  if(!$(this).is(':last-child')){
$(this).delay(3000).fadeOut(1000, function (){
$(this).removeClass('active').next().addClass('active').fadeIn();

autoslider ();
});

}else {
$(this).delay(3000).fadeOut(1000, function () {
  $(this).removeClass('active');
  $('.slide div').eq(0).addClass('active').fadeIn();//fadeIn يعنى اظهره fadeOutاخفيه
  autoslider ();
});

}
});

}());
//mixitup
$('#contanier').mixItUp();

//nicescroll
$('#html').nicescroll();
});
