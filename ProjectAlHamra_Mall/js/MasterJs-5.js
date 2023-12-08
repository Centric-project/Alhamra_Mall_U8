
    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab

        function showTab(n) {
            // This function will display the specified tab of the form ...
            var x = document.getElementsByClassName("tab");
            x[n].style.display = "block";
            // ... and fix the Previous/Next buttons:
            if (n == 0) {
        document.getElementById("prevBtn").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" width="25" ><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0l-54 53.9c-1.6 1.6-1.6 4.2 0 5.8l54 53.9z" fill="#464646"/></svg>';

            } else {
        document.getElementById("prevBtn").style.display = "inline";
            }
            if (n == (x.length - 1)) {
        //document.getElementById("nextBtn").innerHTML = "Submit";

    } else {
        document.getElementById("nextBtn").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" width="25"><path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z" fill="#464646"/></svg>';
            }
            // ... and run a function that displays the correct step indicator:
            fixStepIndicator(n)
        };

        function nextPrev(n) {
            // This function will figure out which tab to display
            var x = document.getElementsByClassName("tab");
            // Exit the function if any field in the current tab is invalid:
            if (n == 1 && !validateForm()) return false;
            // Hide the current tab:
            x[currentTab].style.display = "none";
            // Increase or decrease the current tab by 1:
            currentTab = currentTab + n;
            // if you have reached the end of the form... :
            if (currentTab < x.length) { var mtb = currentTab + 1; }

            document.getElementById("curr_tb").innerHTML = mtb;


            if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
                return false;
            }
            // Otherwise, display the correct tab:
            showTab(currentTab);
        };

        function validateForm() {
            // This function deals with validation of the form fields
            var x, y, i, valid = true;
            x = document.getElementsByClassName("tab");
            y = x[currentTab].getElementsByTagName("input");
            // A loop that checks every input field in the current tab:
            for (i = 0; i < y.length; {
                // If a field is empty...
                if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
                    // and set the current valid status to false:
                    valid = false;
                }
            }
            // If the valid status is true, mark the step as finished and valid:
            if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
            }
            return valid; // return the valid status
        };

        /*hide and show*/


/*hide and show*/
    $('.sp_interior_slider').owlCarousel({
        loop: true,
            margin: 0,
            nav: true,
            autoHeight: true,
            items: 1,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.494 31.494" width="19" ><path d="M10.273 5.009a1.112 1.112 0 0 1 1.587 0 1.12 1.12 0 0 1 0 1.571l-8.047 8.047h26.554c.619 0 1.127.492 1.127 1.111s-.508 1.127-1.127 1.127H3.813l8.047 8.032c.429.444.429 1.159 0 1.587a1.112 1.112 0 0 1-1.587 0L.321 16.532a1.12 1.12 0 0 1 0-1.571l9.952-9.952z" fill="#FFF" /></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49" width="19" ><path d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z" fill="#FFF" /></svg>']
        });



        $(function () {
            var owl = $('.sp_custm_slider');
            owl.owlCarousel({
        autoplay: 2000,
                items: 1,
                loop: true,
                onInitialized: counter,
                onTranslated: counter
            });

            function counter(event) {
                var element = event.target;
                var slds = event.item.count;
                var sld = event.item.index;
                if (sld > slds) {
        sld = sld - slds
    }

                if (sld < slds) {
        sld1 = sld + 1;

                }
                else {sld1 = slds - 1; }


                if (sld < 9) {
        sld = '0' + sld;
                }
                if (slds < 9) {slds = '0' + slds; }

                if (sld1 < 9) {sld1 = '0' + sld1; }

                $('#counter2').html("<span class='cntr_no animated   slideInDown   '>" + sld + "" + "</span> <hr> <span class='cntr_no animated   slideInUp '>" + sld1 + "</span>")
            }


        });
/*slider counter*/
    $slideshow = $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.slider-nav, .slider-for'
        });
        $('.nt_btn').click(function () {
            $slideshow.slick('slickNext');
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
        function myMap() {
            var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
                zoom: 5,
                disableDefaultUI: true
            };
            var map = new google.maps.Map(document.getElementById("cp"), mapProp);
            var mapProp2 = {
            center: new google.maps.LatLng(51.508742, -0.120850),
                zoom: 5,
                disableDefaultUI: true
            };
            var map = new google.maps.Map(document.getElementById("bp"), mapProp2);
            var mapProp3 = {
            center: new google.maps.LatLng(51.508742, -0.120850),
                zoom: 5,
                disableDefaultUI: true
            };
            var map = new google.maps.Map(document.getElementById("sp"), mapProp3);
            var marker = new google.maps.Marker({
            position: map.getCenter(),
                icon: 'img/location.png',
                map: map
            });
        }