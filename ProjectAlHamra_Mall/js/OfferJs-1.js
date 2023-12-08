$(function () {
    $("#category").change(function () {
        $("#category").empty();
        var selectedtext = $(this).find("option:selected").text();
        var selectedvalue = $(this).val();

        //$("#1").hide();
        //$("#1").hide();
        //$("#1").hide();
        //$("#1").hide();
        //$("#1").hide();
        //$("#1").hide();
        //$("#1").hide();
        //$("#1").hide();
        //$("#1").hide();
        $(".mix_1").hide();
    });
});
