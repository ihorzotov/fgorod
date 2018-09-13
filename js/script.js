// calc tabs

$('.franchise-tabs__btn span').on('click',function(){
  $(this).addClass('active');
 $('.franchise-tabs__btn span').not($(this)).removeClass('active');
});
//

// img modal
var modal = $('#myModal');
var img = $('.myImg');
var modalImg = $("#img01");
    img.on('click', function(){
        modal.css({"display":"block", "z-index": "99"});
        modalImg.attr('src', $(this).attr('src'));
        $('main').css("overflow","hidden");
        $('body').addClass('overflow');
    });
//

//img moda close
var span = $(".close");

span.on('click',function(){
    $('#myModal,#franchise-modal').css("display","none");
    $('main').css("overflow","visible");
    $('body').removeClass('overflow');
});

//calc block attr calculation
function dataHolder(item){

    var x = $(item).attr('data-name');

    var price = $('.franchise-calc__list .active').attr('data-'+x+'_price');
    var investition = $('.franchise-calc__list .active').attr('data-'+x+'_invest');
    var royalty = $('.franchise-calc__list .active').attr('data-'+x+'_royalty');
    var moneyBack = $('.franchise-calc__list .active').attr('data-'+x+'_date');
    
    $('.data-price').html(price);
    $('.data-invest').html(investition);
    $('.data-royalty').html(royalty);
    $('.data-date').html(moneyBack);
}
//
//add attr when click calc block button
var tabsAttr = $('.franchise-tabs__btn span');
  tabsAttr.on('click',function(){

    dataHolder(this);
    
  });
// 
// calc block left button circle and calc attr
var franCalc = $('.franchise-calc__list li');
franCalc.on('click',function(){
  $(this).addClass('active');
   franCalc.not($(this)).removeClass('active');

    dataHolder($('.franchise-tabs__btn span.active'));
});
//
// add attr to calculation block when document is ready
$( document ).ready(function() {

    dataHolder('.franchise-tabs__btn span.active');
});
//

//buy modal and taking attr from package name and list name
$('.franchise-calc__modal span').click(function(){
  $('#franchise-modal').css({"display":"block", "z-index": "99"});
  $('body').addClass('overflow');

  var franchiseAttr = $('.franchise-tabs__btn span.active').attr('data-name');
  $('.modal-package span').html(franchiseAttr);

  var franchiseQuantity = $('.franchise-calc__list li.active').text();
  $('.modal-quantity span').text(franchiseQuantity);
});
//
// if packege li > 4 adding class to parent
  $('.card-wrapper__list').each(function(key,item){
    var liCounter = $(item).find('li').length;
    if (liCounter > 4) {
      $(this).parents('.card-wrapper').addClass('overflow');
    }
  });
//

// slick
$('.person-slider').slick({
    dots: true,
    arrows:true,
    prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><i class="fas fa-caret-left"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><i class="fas fa-caret-right"></i></button>',
});
//
// review spoiler
$('.spoiler-title').click(function(){
  $(this).toggleClass('active');
});
//
// show more spoilers
$('.main-spoilers__btn .gorod-btn').click(function(){
  $(this).parents('.main-spoilers').toggleClass('active');
});
//
//lazy img
$(function() {
  $('.myImg, .gorod-example').lazy();
});
//
//closing mobile dropdown menu when click on items 
$(".header-content__item a").click(function(){
  $('body').removeClass('overflow');
  $('.header-content,.hamburger').removeClass('active');
});
// 
// smooth scroll
$(document).on("click",".btn-holder a , .header-content__item a , .header-content__img a ,.card-wrapper a" , function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
        top = $(id).offset().top-90;
        $('body,html').animate({scrollTop: top}, 500);
});
//
//sticky header
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();

    if(winTop >= 104){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
  });
});
//
//hamburger click
$('.hamburger').click(function(){
  $(this).toggleClass('active');
  $(this).parents('.header-content').toggleClass('active');
  $('body').toggleClass('overflow');
});
//

//another slick
$('.franchise-block__content').slick({
  centerMode: true,
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  variableWidth: true,
  dots: false,
  arrows:false,
  focusOnSelect: false,
  swipe: false,
  centerPadding: '10%',
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 1,
        focusOnSelect: true,
        draggable: true,
        swipe: true,
      }
    }
  ]
});
//

//jumping lable
$(document).ready(function($) {
var holder = $(".input-holder input,textarea")
 holder.focus(function(){
   $(this).parent().addClass("active");

  }).blur(function(){
       $(this).parent().removeClass("active");
  })

  $(document).on('keyup', '.personal-info__form .form-text', function(){
   var length = $(this).val().length;
   
   if(length > 0)
    $(this).prev().addClass('hold');
   else
    $(this).prev().removeClass('hold');
  });
});    
//

$('.card-wrapper .gorod-btn').click(function(){
  var cardAttr = $(this).attr('data-target');
  var activeGorod = $('.franchise-tabs__btn span[data-name="'+cardAttr+'"]');

   activeGorod.addClass("active");
  $('.franchise-tabs__btn span').not('[data-name="'+cardAttr+'"]').removeClass("active");
  var franchiseAttr = $('.franchise-tabs__btn span.active').attr('data-name');
  $('.modal-package span').html(franchiseAttr);
  console.log(activeGorod)
});


//floating arrow
$('.franchise-calc__slider').on('mousemove',function(event){

    var y = event.pageY;

      $('.franchise-calc__arrow').offset({top:y});
});

$('.franchise-calc__slider').on('mouseenter',function(){

    var y = event.offsetY;
  
      $('.franchise-calc__arrow').animate({top:y}, 200);
});
$('.franchise-calc__slider').on('mouseout',function(){
   var y = event.offsetY;
  
   var li_Y = $('.franchise-calc__list .active').offset();

     //$('.franchise-calc__arrow').offset({top:li_Y});
    
     //$('.franchise-calc__arrow').animate({top:y}, 300);
    //console.log(li_Y);
});
//