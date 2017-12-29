$(document).ready(function(){
    var altura = $('.menu').offset().top;

    $(window).on('scroll',function(){
        if ($(window).scrollTop()>altura){
            $('.menu').addClass('barra-superior');
        }else {
            $('.menu').removeClass('barra-superior');
        }
    })
});