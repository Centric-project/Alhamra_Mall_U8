
    $(document).ready(function () {

        $(".category_select").change(function () {

            $(this).find("option:selected").each(function () {
                var optionValue = $(this).attr("value");
                if (optionValue) {
                    $(".evt_grid").not("." + optionValue).hide();
                    $("." + optionValue).fadeIn(600);
                    $("." + optionValue).show();

                } else {
                    $(".evt_grid").fadeOut(600);
                    $(".evt_grid").hide();
                }
            });
        }).change();
        });