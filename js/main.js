$(document).ready(function(){
    
    // Active Links in navBar

    $('.main-nav .links li').on('click', function() {
        // if ($('.main-nav .links li').is(':last-child')) {
        //     $(this).addClass('').siblings().removeClass('active');
        // }
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Active Card
    $('.theCard').on('click', function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    $('#open-collapse').on('click', function() {

        $(this).hide(1000)
        $('.sm-nav').show(1000)
    });

    $('#close-collapse').on('click', function() {
        $('#open-collapse').show(1000)
        $('.sm-nav').hide(1000)
    });

    var btnToUp = $('.to-up')

    $(window).on('scroll', function() {
        if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
            btnToUp.show()
        } else {
            btnToUp.hide()
        }
    });

    btnToUp.on('click', function() {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    })

    // Code To Trigger Bx Slider
    $('.slider').bxSlider();
});