
    $slideshow = $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            draggable: false,
            swipeToSlide: false,
            touchMove: false,
            asNavFor: '.slider-nav, .slider-for'
        });
        $('.nt_btn').click(function () {
            $slideshow.slick('slickNext');
        });
        $('.pr_btn').click(function () {
            $slideshow.slick('slickPrev');
        });

        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            autoplay: false,
            arrows: false,

        });

        $('.zoom_btn').click(function (e) {
            $('#myDiv').toggleClass('fullscreen');
            $('.parking_info').toggleClass('manage_info');
        });