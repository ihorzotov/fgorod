$('.franchise-tabs__btn span').on('click',function(){
  $(this).addClass('active');
 $('.franchise-tabs__btn span').not($(this)).removeClass('active');
});



var modal = $('#myModal');
var img = $('.myImg');
var modalImg = $("#img01");
    img.on('click', function(){
        modal.css({"display":"block", "z-index": "99"});
        modalImg.attr('src', $(this).attr('src'));
        $('main').css("overflow","hidden");
        $('body').addClass('overflow');
    });


var span = $(".close");

span.on('click',function(){
    modal.css("display","none");
    $('main').css("overflow","visible");
    $('body').removeClass('overflow');
});

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

var tabsAttr = $('.franchise-tabs__btn span');
  tabsAttr.on('click',function(){

    dataHolder(this);
    
  });

var franCalc = $('.franchise-calc__list li');
franCalc.on('click',function(){
  $(this).addClass('active');
   franCalc.not($(this)).removeClass('active');

    dataHolder($('.franchise-tabs__btn span.active'));
});


$( document ).ready(function() {

    dataHolder('.franchise-tabs__btn span.active');
});


$('.person-slider').slick({
    dots: true,
    arrows:true,
    prevArrow: '<button class="slick-prev slick-arrow" type="button" style=""><i class="fas fa-caret-left"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" type="button" style=""><i class="fas fa-caret-right"></i></button>',
});

$('.spoiler-title').click(function(){
  $(this).toggleClass('active');
});

$('.main-spoilers__btn .gorod-btn').click(function(){
  $(this).parents('.main-spoilers').toggleClass('active');
});

$(function() {
  $('.myImg, .gorod-example').lazy();
});
        
$(document).on("click",".btn-holder a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
           top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
});

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

$('.hamburger').click(function(){
  $(this).toggleClass('active');
  $(this).parents('.header-content').toggleClass('active');
  $('body').toggleClass('overflow');
});


$('.franchise-block__content').slick({
  centerMode: true,
  slidesToShow: 1,
  infinite: false,
  slidesToScroll: 1,
  variableWidth: true,
  dots: false,
  arrows:false,
  focusOnSelect: true,
  draggable: false,
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

