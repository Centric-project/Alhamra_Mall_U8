<script>


    $(document).ready(function () {
        console.log("ready!");
         $(".event_search_filter").keyup(function () {

            // Retrieve the input field text and reset the count to zero
            var filter = $(this).val(),
                count = 0;

            // Loop through the comment list
            $('#timeline').find('.eventname').each(function () {


                // If the list item does not contain the text phrase fade it out
                if ($(this).text().search(new RegExp(filter, "i")) < 0) {
        //$(this).hide();
        $(this).closest('.evt_grid').fadeOut();

                    // Show the list item if the phrase matches and increase the count by 1
                } else {
        //$(this).show();
        $(this).closest('.evt_grid').fadeIn();
                    count++;
                }
            });

        });
        $(".ddlevent").change(function () {
            //alert($('option:selected', this).text());
            var val = $(this).val();
            // alert(val);
            if (val == 'all') {
        $('#timeline').find('.box').fadeIn(450);
            } else {
                var $el = $('.' + val).fadeIn(450);
                $('#timeline').find('.box').not($el).hide();

                $.ajax({
        url: "@Url.Action("Filterdata", "EntertainPageContent")",
                    type: "POST",
                    data: {"send": "" + val + "" },
                    dataType: "json",
                    success: function (data) {
    },
                });


            }
            // $btns.removeClass('active');
            //  $(this).addClass('active');

        })
    });

</script>