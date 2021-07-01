$(function() {
    var gnbFlag = false;
    var gnbIndex;

    $(".nav li").on({
        "mouseenter": function() {
            // lnb show
            if(gnbIndex != undefined) {
                $(".lnb").eq(gnbIndex).css("display","none");
            }

            gnbIndex = $(this).index();
            gnbFlag - true;
        }
    });


});