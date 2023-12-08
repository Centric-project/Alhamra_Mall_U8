
    //$('#nxt_btn').hide();
        //$("#nxt_btn").click(function () {
        $('.required').keyup(function () {
            var empty_flds = 0;
            $(".required").each(function () {
                if (!$.trim($(this).val())) {
                    empty_flds++;
                }
            });
            if (empty_flds) {/* $('#nxt_btn').hide(); $("#feed_form").hide();*/
                //validate form 1

            }
            else {/* $('#nxt_btn').show(); */ }

        })

        //});
        //$(document).ready(function () {

        //    $('#nxt_btn').on('click', function () {
        //        $("#leas_form1").valid();
        //    });
        //    debugger;
        //});
        $("#nxt_btn").click(function () {

            $("#feed_form").show();
            $('html, body').animate({
                scrollTop: $("#feed_form").offset().top
            }, 400);
        });

        $("#btncontact").click(function (e) {
            var obj = {
        Fullname : $("#1").val(),
                 Nationality : $("#2").val(),
                 Email : $("#3").val(),
                 Contact : $("#4").val(),
                 Address : $("#5").val(),
                 Remark : $("#area").val(),

                 Remark1 : $("#r1").val(),
                 Remark2 : $("#r2").val(),
                 Remark3 : $("#r3").val(),
                 Remark4 : $("#r4").val(),
                 Remark5 : $("#r5").val(),
                 Remark6 : $("#r6").val(),
                 Remark7 : $("#r7").val(),
                 Remark8 : $("#r8").val(),
                 Remark9 : $("#r9").val(),
                 Remark10 : $("#r10").val(),
                 Remark11 : $("#r11").val(),
                 Remark12 : $("#r12").val(),
                 Remark13 : $("#r13").val(),
                 Remark14 : $("#r14").val(),
                 Remark15 : $("#r15").val(),
                 Remark16 : $("#r16").val(),
                 Remark17 : $("#r17").val(),
                 Remark18 : $("#r18").val(),
                 Remark19 : $("#r19").val(),
                 Remark20 : $("#r20").val(),
                 Remark21 : $("#r21").val(),
                 Remark22 : $("#r22").val(),
                 Remark23 : $("#r23").val(),
                 Remark24 : $("#r24").val(),
            };
            //var data = Fullname + "~" + Nationality + "~" + Email + "~" + Contact + "~" + Address + "~" + r1 + "~" + r2 + "~" + r3 + "~" + r4 + "~" + r5 + "~" + r6 + "~" + r7 + "~" + r8 + "~" + r9 + "~" + r10 + "~" + r11 + "~" + r12 + "~" + r13 + "~" + r14 + "~" + r15 + "~" + r16 + "~" + r17 + "~" + r18 + "~" + r19 + "~" + r20 + "~" + r21 + "~" + r22 + "~" + r23 + "~" + r24 + "~" + remark;

            if ($("#1").val() != "" || $("#2").val() != "" || $("#3").val() != "" || $("#4").val() != "" || $("#5").val() != "") {
                var Email = $("#3").val();
                var Contact = $("#4").val();
                var reg = /^\d+$/;
                var emailReg = /^([\w-\.]+@@([\w-]+\.)+[\w-]{2, 4})?$/;
                if (emailReg.test(Email) && reg.test(Contact)) {
        alert('Form Has Been Submitted...!');
                    $.ajax({
        //url: "/Model/ContactSurface/SubmitForm",
        url: '@Url.Action("SubmitForm", "ContactSurface")',
                        type: 'POST',
                        //data: {"send": + data + "" },
                        dataType: 'json',
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(obj),
                        success: function (obj) {
        alert(obj);
                            $("#1").val("");
                            $("#2").val("");
                            $("#3").val("");
                            $("#4").val("");
                            $("#5").val("");
                        },
                    });
                    debugger;
                }
            }
        });