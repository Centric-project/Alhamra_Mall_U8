
    var vid = document.getElementById("myVideo");

    var ctn = 1;
        $(window).on('scroll', function () {
            if (checkVisible($('.info_div'))) {
                if (ctn == 1) {
                    vid.play();

                    vid.loop = false;
                    // $(window).off('scroll');
                }
                ctn = ctn + 1;

            }


        });
        function checkVisible(elm, eval) {
            eval = eval || "object visible";
            var viewportHeight = $(window).height(), // Viewport Height
                scrolltop = $(window).scrollTop(), // Scroll Top
                y = $(elm).offset().top,
                elementHeight = $(elm).height();

            if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
            if (eval == "above") return ((y < (viewportHeight + scrolltop)));
        }


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
                autoplaySpeed: 10000,
                speed: 600,
                vertical: true,
            });
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
    </script>

    $(document).ready(function () {
            // Declare Carousel jquery object
            var owl = $('.movie_carasual');
            // Carousel initialization
            owl.owlCarousel({
                loop: true,
                margin: 0,
                navSpeed: 0,
                nav: false,
                autoplay: true,
                rewind: true,
                singleItem: true,
                items: 1,
                rtl: false,
                dots: true,
                mouseDrag: false,
                touchDrag: false,
                navigation: false,
                animateIn: 'slideInUp',
                animateOut: 'slideOutUp',
            });
            // add animate.css class(es) to the elements to be animated
            function setAnimation(_elem, _InOut) {

                var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                _elem.each(function () {
                    var $elem = $(this);
                    var $animationType = 'animated ' + $elem.data('animation-' + _InOut);
                    $elem.addClass($animationType).one(animationEndEvent, function () {
                        $elem.removeClass($animationType);
                    });
                });
            }
            owl.on('change.owl.carousel', function (event) {
                var $currentItem = $('.owl-item', owl).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-out]");
                setAnimation($elemsToanim, 'slideOutUp');
            });

            var round = 0;
            owl.on('changed.owl.carousel', function (event) {
                var $currentItem = $('.owl-item', owl).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-in]");
                setAnimation($elemsToanim, 'slideInUp');
            })
            owl.on('translated.owl.carousel', function (event) {
                console.log(event.item.index, event.page.count);
                if (event.item.index == (event.page.count - 1)) {
                    if (round < 1) {
                        round++
                        console.log(round);
                    } else {
                        owl.trigger('stop.owl.autoplay');
                        var owlData = owl.data('owl.carousel');
                        owlData.settings.autoplay = false;
                        owlData.options.autoplay = false;
                        owl.trigger('refresh.owl.carousel');
                    }
                }
            });
        });
        //owl2row plugin
        ; (function ($, window, document, undefined) {
            Owl2row = function (scope) {
                this.owl = scope;
                this.owl.options = $.extend({}, Owl2row.Defaults, this.owl.options);
                //link callback events with owl carousel here
                this.handlers = {
                    'initialize.owl.carousel': $.proxy(function (e) {
                        if (this.owl.settings.owl2row) {
                            this.build2row(this);
                        }
                    }, this)
                };
                this.owl.$element.on(this.handlers);
            };
            Owl2row.Defaults = {
                owl2row: false,
                owl2rowTarget: 'item',
                owl2rowContainer: 'owl2row-item',
                owl2rowDirection: 'utd' // ltr
            };
            //mehtods:
            Owl2row.prototype.build2row = function (thisScope) {
                var carousel = $(thisScope.owl.$element);
                var carouselItems = carousel.find('.' + thisScope.owl.options.owl2rowTarget);
                var aEvenElements = [];
                var aOddElements = [];
                $.each(carouselItems, function (index, item) {
                    if (index % 2 === 0) {
                        aEvenElements.push(item);
                    } else {
                        aOddElements.push(item);
                    }
                });
                carousel.empty();
                switch (thisScope.owl.options.owl2rowDirection) {
                    case 'ltr':
                        thisScope.leftToright(thisScope, carousel, carouselItems);
                        break;
                    default:
                        thisScope.upTodown(thisScope, aEvenElements, aOddElements, carousel);
                }
            };
            Owl2row.prototype.leftToright = function (thisScope, carousel, carouselItems) {
                var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
                var owlMargin = thisScope.owl.options.margin;
                var carouselItemsLength = carouselItems.length;
                var firsArr = [];
                var secondArr = [];
                //console.log(carouselItemsLength);
                if (carouselItemsLength % 2 === 1) {
                    carouselItemsLength = ((carouselItemsLength - 1) / 2) + 1;
                } else {
                    carouselItemsLength = carouselItemsLength / 2;
                }
                //console.log(carouselItemsLength);
                $.each(carouselItems, function (index, item) {
                    if (index < carouselItemsLength) {
                        firsArr.push(item);
                    } else {
                        secondArr.push(item);
                    }
                });
                $.each(firsArr, function (index, item) {
                    var rowContainer = $('<div class="' + o2wContainerClass + '"/>');
                    var firstRowElement = firsArr[index];
                    firstRowElement.style.marginBottom = owlMargin + 'px';
                    rowContainer
                        .append(firstRowElement)
                        .append(secondArr[index]);
                    carousel.append(rowContainer);
                });
            };
            Owl2row.prototype.upTodown = function (thisScope, aEvenElements, aOddElements, carousel) {
                var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
                var owlMargin = thisScope.owl.options.margin;
                $.each(aEvenElements, function (index, item) {
                    var rowContainer = $('<div class="' + o2wContainerClass + '"/>');
                    var evenElement = aEvenElements[index];
                    evenElement.style.marginBottom = owlMargin + 'px';
                    rowContainer
                        .append(evenElement)
                        .append(aOddElements[index]);
                    carousel.append(rowContainer);
                });
            };
           
            Owl2row.prototype.destroy = function () {
                var handler, property;
                for (handler in this.handlers) {
                    this.owl.dom.$el.off(handler, this.handlers[handler]);
                }
                for (property in Object.getOwnPropertyNames(this)) {
                    typeof this[property] !== 'function' && (this[property] = null);
                }
            };
            $.fn.owlCarousel.Constructor.Plugins['owl2row'] = Owl2row;
        })(window.Zepto || window.jQuery, window, document);
      
        $(".movie_list").owlCarousel({
            loop: true,
            autoplay: true,
            owl2row: true,
            nav: true,
            items: 4,
            margin: 30,
            navText: ["&#x3c; Prev", "Next &#x3e;"],
            responsiveClass: true,
            responsive: {

                0: {
                    items: 2
                },
                480: {
                    items: 3
                },

                560: {
                    items: 3
                },


                768: {
                    items: 4
                }


            }
        });
        $(".disable-owl-swipe").on("drop mousedown", function (e) {
            // Prevent carousel swipe
            e.preventDefault();
        })