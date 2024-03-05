

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
        $(document).click(function () { $('.searchresults2').hide(); });
            $('#txtsearch').keyup(function () {
                var searchField = $('#txtsearch').val();
                var myExp = new RegExp(searchField, "i");
                $.getJSON('/data.json', function (data) {
                    var output = '
                        < ul class="searchresults" >
            ';
                    $.each(data, function (key, val) {
                        if (val.name.search(myExp) != -1) {
                            output += '
                                < li >
                                ';
                            output += '<a href="' + val.reknown + '">
                                < span > ' + val.bio + '</span > ';
                            output += ' <i> -(' + val.shortname + ')</i>';
                            output += '
                        </a >
                    </li > ';
                        }
                    });
                    output += '
                </ul > ';
if (searchField != '') { $('#result2').html(output); }
else {
    $('#result2').html('
        < span style = "color:#fbfbfb; margin-top:50px;" > No result found</span > '); }
                });
            });
$('.searchresults2').hide();

$('#txtsearch2').keyup(function () {

    var searchField = $('#txtsearch2').val();

    var myExp = new RegExp(searchField, "i");

    $.getJSON('/data.json', function (data) {
        var output = '
            < ul class="searchresults2" >
                ';
        $.each(data, function (key, val) {
            if (val.name.search(myExp) != -1) {
                console.log(val.bio);
                output += '
                    < li >
                    ';
                output += '<a href="' + val.reknown + '">
                    < span > ' + val.bio + '</span > ';
                output += ' <i> -(' + val.pagename + ')</i>';
                output += '
                        </a >
                    </li > ';
            }
        });
        output += '
                </ul > ';
        if (searchField != '') {

            $('#result3').html(output);
            $('.searchresults2').show();
        }
        else {
            $('#result3').html(); $('.searchresults2').hide();
        }

    });
});


$('#search3').keyup(function () {
    var searchField = $('#search3').val();

    var myExp = new RegExp(searchField, "i");

    $.getJSON('/data.json', function (data) {
        var output = '
            < ul class="searchresults2" >
                ';
        $.each(data, function (key, val) {
            if (val.name.search(myExp) != -1) {
                output += '
                    < li >
                    ';
                output += '<a href="' + val.reknown + '">
                    < span > ' + val.bio + '</span > ';
                output += ' <i> -(' + val.shortname + ')</i>';
                output += '
                        </a >
                    </li > ';
            }
        });
        output += '
                </ul > ';
        if (searchField != '') {
            $('.searchresults2').show();
            $('#result4').html(output);

        }
        else { $('#result4').html(); $('.searchresults2').hide(); }

    });
});

$(document).ready(function () {
    $('#search').keyup(function () {

        // Search text
        var text = $(this).val();

        // Hide all content class element
        $('.content').hide();

        // Search and show
        $('.content:contains("' + text + '")').show();

    });
});

    $(document).ready(function () {

                                                    // Gets the video src from the data-src on each button

                                                    var $videoSrc;
                                                    $('.video-btn').click(function () {

                                                        $videoSrc = $(this).data("src");

                                                    });
                                                    console.log($videoSrc);



                                                    // when the modal is opened autoplay it
                                                    $('#myModal').on('shown.bs.modal', function (e) {

                                                        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
                                                        /* $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); */
                                                        $("#video").attr('src', $videoSrc + "?autoplay=1&rel=0&modestbranding=0&autohide=1&showinfo=0&controls=0");
                                                    })



                                                    // stop playing the youtube video when I close the modal
                                                    $('#myModal').on('hide.bs.modal', function (e) {
                                                        // a poor man's stop video
                                                        $("#video").attr('src', $videoSrc);
                                                    })






                                                    // document ready
                                                });
        $("#like").click(function (e) {
                                                $(this).addClass('likedbtn');
                                                });

                                                /*$("#like").click(function (e) {
                                                $("#like").addClass('likedbtn');
                                                @*alert("Thank For Like this movie...!");*@

                                                {
                                                $.ajax({
                                                url: '@Url.Action("MovieLikes", "ContactSurface")',
                                                type: 'POST',
                                                //data: { "send": + data + "" },
                                                dataType: 'json',
                                                contentType: "application/json; charset=utf-8",
                                                //data: JSON.stringify(obj),
                                                success: function () {
                                                alert(data);
                                                $("#txtnewsletter").val("");
                                                }
                                                });
                                                }
                                                debugger;
                                                });*/

var facebookShare = document.querySelector('[data-js="facebook-share"]');
var url = "http://code.valuepage.in/";
var image = "http://code.valuepage.in/@firstimage.Image.Url";
var title = "";
var site_name = "";
var description = "";
facebookShare.onclick = function (e) {
    e.preventDefault();
    var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) { facebookWindow.focus(); }
    return false;
}