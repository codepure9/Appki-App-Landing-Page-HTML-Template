/*********************************************
Theme Name : AppKi - App Panding Page HTML Template
Author     : Code Pure
File       : Js Bass
Support    : codepure9@gmail.com
Description: App Panding Page HTML Template
Version    : 1.0
/*********************************************
================== JS INDEX ==================
**********************************************
01. preloader js
02. data backround js
03. mobile menu js
04. wow js 
05. aos js
06. nice select js
07. screenshot js
08. video js
09. counterUp js
10. One Page Nav js
11. accordion js
12. active class add js
13. mailchimp js
14. screenshot js
15. brand js
16. sticky top menu js
17. scoll to top js
*********************************************/

(function ($) {
    "use strict";
    var wind = $(window);
    /*>>>>>>>>>> 01. preloader js active >>>>>>>>>>*/
    wind.on('load', function () {
        $('#loading').delay(1000).fadeOut(1000);
    });
    /*>>>>>>>>>> 02. data backround js  active <<<<<<<<<<<*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    /*.>>>>>>>>>> 03. mobile menu js active <<<<<<<<<<*/
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        onePage: true
    });
    /*>>>>>>>>>> 04. wow js active <<<<<<<<<<*/
    new WOW().init();
    /*>>>>>>>>>> 05. aos js active <<<<<<<<<<*/
    AOS.init();
    /*>>>>>>>>>> 06. nice select js active <<<<<<<<<<*/
     $('select').niceSelect();
    /*>>>>>>>>>> 07. screenshot js active <<<<<<<<<<*/
    $('.screenshot-box').venobox({
        spinner:'rotating-plane',
    });
    /*>>>>>>>>> 08. video js active <<<<<<<<<<*/
    $('.video-active').venobox({
        spinner:'rotating-plane',
    });
    /*>>>>>>>>>> 09. counterUp js active <<<<<<<<<<*/
   $('.counter').counterUp({
       delay: 10,
       time: 5000,
   });
    /*>>>>>>>>>> 10. One Page Nav js active <<<<<<<<<<*/
    var top_offset = $('.header-area').height() - -20;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    /*>>>>>>>>>>> 11. accordion js active <<<<<<<<<<*/
    $(".accordion-trigger").QuickAccord();
    /*>>>>>>>>>> 12. active class add js active <<<<<<<<<<*/
    $('.faq ul li').on('click', function () {
        $('.ul li').removeClass("active");
        $(this).addClass("active");
    });
    /*>>>>>>>>>> 13. mailchimp js active <<<<<<<<<<*/
    if ($('.mailchimp').length > 0) {
        $('.mailchimp').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "https://ourteambd.us1.list-manage.com/subscribe/post?u=6cb397a651527b215cc6f1a79&amp;id=c838a2de54" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscription-success').html('<i class="fa fa-check"></i><br/>' + resp.msg).fadeIn(1000);
            $('.subscription-error').fadeOut(500);

        } else if (resp.result === 'error') {
            $('.subscription-error').html('<i class="fa fa-times"></i><br/>' + resp.msg).fadeIn(1000);
        }
    }
   $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter a value',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };
    /*>>>>>>>>>> 14. screenshot js active <<<<<<<<<*/
    $('.screenshot-active').slick({
    centerMode: true,
    centerPadding: '100px',
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    dots: false,
    prevArrow:'<button type="button" class="screenshot-slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:'<button type="button" class="screenshot-slick-next"><i class="fas fa-chevron-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
        }
        }
    ]
    });
    /*>>>>>>>>>> 15. brand js active <<<<<<<<<<*/
    $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    /*>>>>>>>>>> 16. sticky top menu js active <<<<<<<<<<*/
    $('.navigation').scrollMenu(function (){});
    wind.on('scroll', function () {
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-top');
        if (scrolling >= 5) {
            sticky.addClass('menu-bg');
        } else {
            sticky.removeClass('menu-bg');
        }
    });
    /*>>>>>>>>>> 17. scoll to top js active <<<<<<<<<<*/
    wind.on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.scorlltop').fadeIn();
        } else {
            $('.scorlltop').fadeOut();
        }
    });

    $('.scorlltop').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });




})(jQuery);
