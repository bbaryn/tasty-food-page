$(document).ready(function () {

    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    // Animation
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });

    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    });

    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });

    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%;'
    });

    // Mobile navigation
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }
    })

});