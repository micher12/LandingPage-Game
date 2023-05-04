$(function(){

    //slider
    navegation($('nav a'),0)
    function navegation(el,res){
        el.click(function(event){
            var ancora = $(this);
            var calculo = $(ancora.attr('href')).offset().top;

            if(res){
                animacao = calculo - res;
            }else{
                animacao = calculo;
            }

            $('html,body').stop().animate({
                scrollTop: animacao,
            },1000);

            event.preventDefault()
        });
    };

});