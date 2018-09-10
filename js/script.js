var franCalc = $('.franchise-calc__list li');
franCalc.on('click',function(){
  $(this).addClass('active');
 franCalc.not($(this)).removeClass('active');
 // franCalc.attr('data')
});

$('.franchise-tabs__btn span').on('click',function(){
  $(this).addClass('active');
 $('.franchise-tabs__btn span').not($(this)).removeClass('active');
});



var modal = $('#myModal');
var img = $('.myImg');
var modalImg = $("#img01");
    img.on('click', function(){
        modal.css("display","block");
        modalImg.attr('src', $(this).attr('src'));
        $('main').css("overflow","hidden");
    });


var span = $(".close");

span.on('click',function(){
    modal.css("display","none");
    $('main').css("overflow","visible");
});