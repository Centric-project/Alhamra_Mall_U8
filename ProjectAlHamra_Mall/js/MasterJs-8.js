
    window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-91120721-2');
   
        $(document).click(function () { $('.searchresults2').hide(); });
        $('#txtsearch').keyup(function () {
            var searchField = $('#txtsearch').val();
            var myExp = new RegExp(searchField, "i");
            $.getJSON('/data.json', function (data) {
                var output = '<ul class="searchresults">';
                $.each(data, function (key, val) {
                    if (val.name.search(myExp) != -1) {
                        output += '<li>';
                        output += '<a href="' + val.reknown + '"><span>' + val.bio + '</span>';
                        output += ' <i> -(' + val.shortname + ')</i>';
                        output += '</a></li>';
                    }
                });
                output += '</ul>';
if (searchField != '') { $('#result2').html(output); }
else { $('#result2').html('<span style="color:#fbfbfb; margin-top:50px;">No result found</span>'); }
            }); debugger;
        });
$('.searchresults2').hide();

$('#txtsearch2').keyup(function () {

    var searchField = $('#txtsearch2').val();

    var myExp = new RegExp(searchField, "i");

    $.getJSON('/data.json', function (data) {
        var output = '<ul class="searchresults2">';
        $.each(data, function (key, val) {
            if (val.name.search(myExp) != -1) {
                console.log(val.bio);
                output += '<li>';
                output += '<a href="' + val.reknown + '"><span>' + val.bio + '</span>';
                output += ' <i> -(' + val.shortname + ')</i>';
                output += '</a></li>';
            }
        });
        output += '</ul>';
        if (searchField != '') {

            $('#result3').html(output);
            $('.searchresults2').show();
        }

        else {
            $('#result3').html(); $('.searchresults2').hide();
        }

    }); debugger;
});

$('#txtsearch4').keyup(function () {

    var searchField = $('#txtsearch4').val();

    var myExp = new RegExp(searchField, "i");

    $.getJSON('/data.json', function (data) {
        var output = '<ul class="searchresults2">';
        $.each(data, function (key, val) {
            if (val.name.search(myExp) != -1) {
                console.log(val.bio);
                output += '<li>';
                output += '<a href="' + val.reknown + '"><span>' + val.bio + '</span>';
                output += ' <i> -(' + val.shortname + ')</i>';
                output += '</a></li>';
            }
        });
        output += '</ul>';
        if (searchField != '') {

            $('#result5').html(output);
            $('.searchresults2').show();
        }

        else {
            $('#result5').html(); $('.searchresults2').hide();
        }

    }); debugger;
});

$('#search3').keyup(function () {
    var searchField = $('#search3').val();

    var myExp = new RegExp(searchField, "i");

    $.getJSON('/data.json', function (data) {
        var output = '<ul class="searchresults2">';
        $.each(data, function (key, val) {
            if (val.name.search(myExp) != -1) {
                output += '<li>';
                output += '<a href="' + val.reknown + '"><span>' + val.bio + '</span>';
                output += ' <i> -(' + val.shortname + ')</i>';
                output += '</a></li>';
            }
        });
        output += '</ul>';
        if (searchField != '') {
            $('.searchresults2').show();
            $('#result4').html(output);

        }
        else { $('#result4').html(); $('.searchresults2').hide(); }

    });
});
  
        function activaTab(tabID) {

            $('.links_tabs a[href="#' + tabID + '"]').tab('show');
        };
        activaTab('tab2');

        $(".tb_link").click(function () {
            var value = 'url("' +
                $(this).data("value") + '")'; $("#div_img_cont").css("background-image", value);
        });
        $(document).ready(function () {
            $(document).ready(function () {
                var ur_id = window.location.hash;
                activaTab(ur_id.substring(1, ur_id.length));
            });

            function activaTab(tab) {
                $('.links_tabs a[href="#' + tab + '"]').tab('show');
            };
        });

        $("#dine1").click(function () {

            $("#shop_logo").show();
            $('html, body').animate({
                scrollTop: $("#shop_main_logo").offset().top
            }, 400);
        });
        $("#dine2").click(function () {

            $("#shop_logo").show();
            $('html, body').animate({
                scrollTop: $("#shop_main_logo").offset().top
            }, 400);
        });
        $("#dine3").click(function () {

            $("#shop_logo").show();
            $('html, body').animate({
                scrollTop: $("#shop_main_logo").offset().top
            }, 400);
        });
        $("#dine4").click(function () {

            $("#shop_logo").show();
            $('html, body').animate({
                scrollTop: $("#shop_main_logo").offset().top
            }, 400);
        });
        $("#dine5").click(function () {

            $("#shop_logo").show();
            $('html, body').animate({
                scrollTop: $("#shop_main_logo").offset().top
            }, 400);
        });

