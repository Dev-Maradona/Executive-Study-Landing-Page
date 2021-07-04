$(document).ready(function(){
    
    // Active Links in navBar

    $('.links li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Active Card
    $('.theCard').on('click', function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    // Code To Trigger Bx Slider
    $('.slider').bxSlider();
});

