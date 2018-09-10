var franCalc = $('.franchise-calc__list li');
franCalc.on('click',function(){
  $(this).addClass('active');
 franCalc.not($(this)).removeClass('active');
 franCalc.attr('data')
});

$('.franchise-tabs__btn span').on('click',function(){
  $(this).addClass('active');
 $('.franchise-tabs__btn span').not($(this)).removeClass('active');
});

//Get the modal
var modal = $('#myModal');
var img = $('.myImg');
var modalImg = $("#img01");
    img.on('click', function(){
        modal.css("display","block");
        modalImg.attr('src', $(this).attr('src'));
        $('body,html').css("overflow","hidden";"position","fixed";);
    });
//modal close
var span = $(".close");

span.on('click',function(){
    modal.css("display","none");
    $('body,html').css("overflow","visible";"position","relative";);
});
