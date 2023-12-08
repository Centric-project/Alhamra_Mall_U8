
    ; (function ($) {
            $(document).ready(function () {
                var $img = $("#image1").imgViewer2(
                    {
                        zoomMax: 10,
                        onReady: function () {
                            this.setZoom(4).panTo(0.6, 0.5);
                        }
                    }
                );
            });
        })(jQuery);
        $('.mob_btn_disp1').click(function () {
            if (!$('.strl_left').hasClass('done')) {
                $('.strl_left').addClass('done');
                $('.strl_left').stop().animate({
                    marginLeft: '-270px'
                }, 500);
            } else {
                $('.strl_left').removeClass('done');
                $('.strl_left').stop().animate({
                    marginLeft: '0px'
                }, 500);
            }

        });
    document.getElementById("box").oninput = function () {
            var matcher = new RegExp(document.getElementById("box").value, "gi");
            for (var i = 0; i < document.getElementsByClassName({
                if (matcher.test(document.getElementsByClassName("name")[i].innerHTML) || matcher.test(document.getElementsByClassName("category")[i].innerHTML)) {
        document.getElementsByClassName("connect-cat")[i].style.display = "inline-block";
                } else {
        document.getElementsByClassName("connect-cat")[i].style.display = "none";
                }

            }
        }
    $("#btnleasingsubmit").click(function (e) {
            var obj = {
                Name : $("#1").val(),
                Mobile : $("#2").val(),
                Email : $("#3").val(),
                Company : $("#4").val()
            };
            if ($("#1").val() != "" || $("#2").val() != "" || $("#3").val() != "" || $("#4").val() != "") {

                //var data = Name + "~" + Mobile + "~" + Email + "~" + Company;
                var emailReg = /^([\w-\.]+@@([\w-]+\.)+[\w-]{2,4})?$/;
                var reg = /^\d+$/;
                alert('Form Has Been Submitted...!');

                    $.ajax({
                        //url: "/manarmall_admin/Surface/LeasingPageContent/SubmitData",
                        //type: "POST",
                        //data: { "send": "" + data + "" },
                        //dataType: "json",
                        url: '@Url.Action("SubmitForm1", "ContactSurface")',
                        type: 'POST',
                        //data: { "send": + data + "" },
                        dataType: 'json',
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(obj),
                        success: function (data) {
                            alert(data);

                            $("#1").val("");
                            $("#2").val("");
                            $("#3").val("");
                            $("#4").val("");
                        }
                    });

                debugger;
            }
        });

         $("#btnnewsletter").click(function (e) {
        alert("Thank You...!");
             var obj = { NewsSettlerEmail: $("#txtnewsletter").val() };
             //$("#txtnewsletter").val("")
            var Email = $("#txtnewsletter").val();
            var emailReg = /^([\w-\.]+@@([\w-]+\.)+[\w-]{2,4})?$/;

            if ($("#txtnewsletter").val() != "") {
                $.ajax({
                    url: '@Url.Action("NewsSettler","NewsSettlerSurface")',
                        type: 'POST',
                        //data: { "send": + data + "" },
                        dataType: 'json',
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(obj),
                        success: function (data) {
                        alert(data);
                        $("#txtnewsletter").val("");
                    }
                       });
             }
             debugger;
        });

		$("#btnsubmit").click(function () {

                    var data = $("#txtEmail").val();
                    $.ajax({
                    url: '@Url.Action("NewsSettler","NewsSettlerSurface")',
                        type: 'POST',
                        //data: { "send": + data + "" },
                        dataType: 'json',
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(obj),
                        success: function (data) {
                        alert(data);
                        $("#txtnewsletter").val("");
                    }
                       });
                });



        var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        x2 = 0,
        y2 = 0,
        friction = 1 / 30;
        friction2 = 0.020;

        function moveBackground() {
            x += (lFollowX - x) * friction;
            y += (lFollowY - y) * friction;

            x2 += (lFollowX - x2) * friction2;
            y2 += (lFollowY - y2) * friction2;

            translate = 'translate(' + x + 'px, ' + y + 'px)';
            translate2 = 'translate(' + x + 'px, ' + y + 'px)';
            translate5 = 'translate(' + x + 'px, ' + y + 'px)';
            translate6 = 'translate(' + x + 'px, ' + y + 'px)';
            translate3 = 'translate(' + (x + 10) + 'px, ' + (y + 10) + 'px)';
            translate7 = 'translate(' + (x2 + 5) + 'px, ' + (y2 + 5) + 'px)';
            translate4 = 'translate(' + (x2 + 5) + 'px, ' + (y2 + 5) + 'px)';


            $('.first_top_star').css({
                '-webit-transform': translate,
                '-moz-transform': translate,
                'transform': translate
            });
            $('.second_top_star').css({
                '-webit-transform': translate2,
                '-moz-transform': translate2,
                'transform': translate2
            });
            /* $('.bg_leady').css({
               '-webit-transform': translate3,
               '-moz-transform': translate3,
               'transform': translate3
             });*/

            $('.bg_name_txt').css({
                '-webit-transform': translate4,
                '-moz-transform': translate4,
                'transform': translate4
            });

            $('.internal_first_star').css({
                '-webit-transform': translate5,
                '-moz-transform': translate5,
                'transform': translate5
            });
            $('.internal_second_star').css({
                '-webit-transform': translate6,
                '-moz-transform': translate6,
                'transform': translate6
            });
            /*$('.inner_banner_item').css({
              '-webit-transform': translate7,
              '-moz-transform': translate7,
              'transform': translate7
            });*/


            window.requestAnimationFrame(moveBackground);
        }

        $('.main-banner').on('mousemove', function (e) {

            var lMouseX = Math.max(-100, Math.min(100, $('.main-banner').width() / 2 - e.clientX));
            var lMouseY = Math.max(-100, Math.min(100, $('.main-banner').height() / 2 - e.clientY));
            lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
            lFollowY = (10 * lMouseY) / 100;

        });

        $('.main-banner').on('mousedown', function (e) {
            e.preventDefault();
        });

        moveBackground();

        window.fbAsyncInit = function () {
            FB.init({
                appId: '196586578204561',
                cookie: true,
                xfbml: true,
                version: 'v5.0'
            });

            FB.AppEvents.logPageView();

        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        function submitAndShare(title, description, image) {
            // var image = 'https://www.svenskttenn.se/filtered/5043/rszww1600h1000-83/svenskt_tennkategoribild_tapeter-1699026363-rszww1600h1000-83.jpg';
            shareOverrideOGMeta(window.location.href,
                title,
                description,
                image);

            return false;
        }

        function shareOverrideOGMeta(overrideLink, overrideTitle, overrideDescription, overrideImage) {
            FB.ui({
                method: 'share_open_graph',
                action_type: 'og.likes',
                action_properties: JSON.stringify({
                    object: {
                        'og:url': overrideLink,
                        'og:title': overrideTitle,
                        'og:description': overrideDescription,
                        'og:image': overrideImage
                    }
                })
            },
                function (response) {
                    // Action after response
                });
        }

        function shareOriginal() {
            FB.ui({
                method: 'share',
                href: window.location.href
            },
                function (response) {
                    // Action after response
                });

            return false;
        }