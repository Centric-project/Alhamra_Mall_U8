var app = {};
app.searchDropDown = function () {
    $('.searchbox').on('click', function (event) {
        $(this).toggleClass('open');
    });
};


app.readyFuntions = function () {
    $(document).ready(function () {
        $("#signup").click(function () {
            $(".newsletter-choices").show();
        });
        $(".mob-options .search").click(function () {
            $(".searchbox").toggleClass("open");
        });
        //For Pagination Next/Previous Arrows Button
        $('.paging .sort-alpha-numb ul').each(function () {
            var current = $(this).find('li.active');
            if (current.index() !== 0) {
                $(this).prepend('<li class="btn-arrow btn-prev gtm-track-paging-event" name="Previous-Paging"><a href="' + current.prev().find('a').attr('href') + '" class="link"><i class="fa fa-angle-left"></i></a></li>');
            }
            if (current.index() !== $(this).find('li').length - 1) {
                $(this).append('<li class="btn-arrow btn-next gtm-track-paging-event" name="Next-Paging"><a href="' + current.next().find('a').attr('href') + '" class="link"><i class="fa fa-angle-right"></i></a></li>');
            }
        });
        $(".gtm-track-paging-event").click(function (e) {
            gtmTrackEvent_PagingClick($(this));
        });

        //When Click on Search Icon Redirect to Main Search Page of Website
        $('.search-field i.fa-search').click(function () {
            var dsValue = $("#topSearchMain").val().trim();
            if (dsValue != '') {
                gtmTrackEvent_HeaderDeskSearchClick($(this));
                GoToMainSearchPage(dsValue);
            }
        });
        //For Top Search Box on Desktop
        $("#topSearchMain").autocomplete({
            minLength: 3,
            source: function (request, response) {
                var term = request.term.toLowerCase();
                var searchDSLst = topSearchListData;
                //restructure
                //var protocol = location.protocol;
                //var slashes = protocol.concat("//");
                //var host = slashes.concat(window.location.hostname);

                $('#SearchMainDiv').show();
                $('#topSearchMainUL').empty();
                var totalLi = 0;
                for (var i = 0; i < searchDSLst.length; i++) {
                    var matchTerm = searchDSLst[i].name.toLowerCase();
                    var url = searchDSLst[i].url; //host + searchDSLst[i].url;

                    if (matchTerm.match(term)) {
                         $("#topSearchMainUL").append('<li><a href="' + url + '?Id='+ searchDSLst[i].id +'" onclick="gtmTrackEvent_HeaderDeskSearchClick($(this));" name="' + searchDSLst[i].name + '">' + searchDSLst[i].name + '</a></li><br>');
                         totalLi++;
                    } else {
                        if (searchDSLst[i].tags != null) {
                            for (var newI = 0; newI < searchDSLst[i].tags.length; newI++) {
                                if (searchDSLst[i].tags[newI].toLowerCase().match(term)) {
                                    $("#topSearchMainUL").append('<li><a href="' + url + '" onclick="gtmTrackEvent_HeaderDeskSearchClick($(this));" name="' + searchDSLst[i].name + '">' + searchDSLst[i].name + '</a></li>');
                                    totalLi++;
                                    break;
                                }
                            }
                        }
                    }
                    if (totalLi > 17)
                        break;
                }
                if (totalLi === 0) {
                    $("#topSearchMainUL").append('<li><a>No results</a></li>');
                }
            }
        }).keyup(function () {
            if ($(this).val() == '') {
                $('#SearchMainDiv').hide();
                $('#topSearchMainUL').empty();
            }
        }).blur(function () {
            setTimeout(function () {
                $('#SearchMainDiv').hide();
            }, 2000);
        }).keypress(function (e) {
            if (e.which == 13) {
                var dsValue = $("#topSearchMain").val().trim();
                if (dsValue != '') {
                    gtmTrackEvent_HeaderDeskSearchClick($(this));
                    GoToMainSearchPage($("#topSearchMain").val().trim());
                }
            }
        });
        //For Top Search Box on Mobile
        $("#topSearchMainMob").autocomplete({
            minLength: 3,
            source: function (request, response) {
                var term = request.term.toLowerCase();
                var searchDSLst = topSearchListData;

                $('#SearchMainMobDiv').show();
                $('#topSearchMainMobUL').empty();
                var totalLi = 0;
                for (var i = 0; i < searchDSLst.length; i++) {
                    var matchTerm = searchDSLst[i].name.toLowerCase();
                    var url = searchDSLst[i].url;

                    if (matchTerm.match(term)) {
                        $("#topSearchMainMobUL").append('<li><a href="' + url + '?Id='+ searchDSLst[i].id + '" onclick="gtmTrackEvent_HeaderMobSearchClick($(this));" name="' + searchDSLst[i].name + '">' + searchDSLst[i].name + '</a></li>');
                        totalLi++;
                    } else {
                        if (searchDSLst[i].tags != null) {
                            for (var newI = 0; newI < searchDSLst[i].tags.length; newI++) {
                                if (searchDSLst[i].tags[newI].toLowerCase().match(term)) {
                                    $("#topSearchMainMobUL").append('<li><a href="' + url + '" onclick="gtmTrackEvent_HeaderMobSearchClick($(this));" name="' + searchDSLst[i].name + '">' + searchDSLst[i].name + '</a></li>');
                                    totalLi++;
                                    break;
                                }
                            }
                        }
                    }
                    if (totalLi > 17)
                        break;
                }
                if (totalLi === 0) {
                    $("#topSearchMainMobUL").append('<li><a>No results</a></li>');
                }
            }
        }).keyup(function () {
            if ($(this).val() == '') {
                $('#SearchMainMobDiv').hide();
                $('#topSearchMainMobUL').empty();
            }
        }).blur(function () {
            setTimeout(function () {
                $('#SearchMainMobDiv').hide();
            }, 2000);
        }).keypress(function (e) {
            if (e.which == 13) {
                var dsValue = $("#topSearchMainMob").val().trim();
                if (dsValue != '') {
                    gtmTrackEvent_HeaderMobSearchClick($(this));
                    GoToMainSearchPage($("#topSearchMainMob").val().trim());
                }
            }
        });

        //For Search Box on Shop / Dine Landing Pages
    //   if ($('#txtSearchData').length) {
    //         $("#txtSearchData").autocomplete({
    //             minLength: 3,
    //             source: function (request, response) {
    //                 var term = request.term.toLowerCase();
    //                 var list = innerPgSearchData;

    //                 $("#search-div").show();
    //                 $('#search-div-ul').empty();
    //                 for (var i = 0; i < list.length; i++) {
    //                     var matchTerm = list[i].Value.toLowerCase();
    //                     var url = list[i].Key.includes("/shops/rolex/") ? list[i].Key.replace("/shops/rolex/", "/rolex/") : list[i].Key; //host + list[i].Key;
    //                     var url = list[i].Key.includes("/shops/manchester-city-challenge/") ? list[i].Key.replace("/shops/manchester-city-challenge/", "/manchester-city-challenge/") : list[i].Key; 
    //                     var url = list[i].Key.includes("/shops/pandora/") ? list[i].Key.replace("/shops/pandora/", "/pandora/") : list[i].Key; //host + list[i].Key;
    //                     if (matchTerm.match(term)) {
    //                         $("#search-div-ul").append('<li><a href="' + url + '" onclick="gtmTrackEvent_SearchBrandClick($(this));" name="' + list[i].Value + '">' + list[i].Value + '</a></li>');
    //                     }
    //                 }
    //             }
    //         }).keyup(function () {
    //             if ($(this).val() == '') {
    //                 $('#search-div').hide();
    //                 $('#search-div-ul').empty();
    //             }
    //         });
    //     }

        // OnClick Social Widget (Share Post on FB, Insta etc)
        $('.product-box .share-box li a').click(function () {
            var type = $(this).data('type');
            var url = window.location.href;
            var text = encodeURIComponent($(this).data('text') + ' | Yas Mall');
            var sharer = '', width, height;

            switch (type) {
                case 'twitter': sharer = 'https://twitter.com/intent/tweet?original_referer=' + encodeURIComponent(url) + '&text=' + text;
                    width = 500;
                    height = 310;
                    break;
                case 'facebook': sharer = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
                    width = 570;
                    height = 368;
                    break;
                case 'linked': sharer = 'https://www.linkedin.com/shareArticle?summary=&title=' + text + '&mini=true&url=' + url + '&source=';
                    width = 570;
                    height = 400;
                    break;
            }
            window.open(sharer, 'share', 'width= ' + width + ',height=' + height);

            console.log("[GTM-DL]", "Track event Store Social Share Click", type);
            var data = gtmGetDlBase();
            data.p_event = 'e_socialclicks';
            data.p_buttonname = type;
            data.p_outboundurl = sharer;
            window.dataLayer.push(data);
            debugger;

            return false;
        });
    });
};

app.init = function () {
    app.readyFuntions();
    app.searchDropDown();

};
document.addEventListener("DOMContentLoaded", function () {
    app.init();
});

//Redirect to Main Search Page of Website
function GoToMainSearchPage(val) {
    if (val !== '') {
        location.href = searchGoHref + '?q=' + encodeURIComponent(val);
    }
}