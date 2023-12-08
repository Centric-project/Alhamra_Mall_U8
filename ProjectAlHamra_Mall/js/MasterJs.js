
    $(document).ready(function () {
        $('#slick-images').on('init', function (e, slick) {
            var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
            $('#slick-images').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('div.img_contr_parnt[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);
            });
            $('#slick-images').slick({
        dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                draggable: false,
                autoplaySpeed: 8000,
                speed: 600,
                pauseOnHover: false,
                vertical: true,
            }); 8
            function doAnimations(elements) {
                var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function () {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                    });
                    $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
                    });
                });
            }
        });


        $('.main-banner').slick({

        draggable: true,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: true,
            fade: true,
            speed: 1000,
            infinite: true,
            cssEase: 'ease-in-out',
            touchThreshold: 100

        });

