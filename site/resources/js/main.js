/*
    Script: Effect Scroll JQuery
    Author: José Roberto
    Version: 1.0
*/

function goTo(element, speed) {

    var href = element.attr('href');
    var top = $(href).offset().top;

    $("html,body").animate({scrollTop: top}, speed);

}

$(function(){
    $("#top a").click(function(e){
        // Tira a ação default do link
        e.preventDefault();

        goTo($(this), 500);
    });
});


