$(function() {
    $(document).ready(function() {
        setHeight();
});

$(window).resize(function() {
    setHeight();
});

function setHeight() {
    var height = $(window).height();
    $("#main_aside").height(height - 56);  //#main_header 높이 빼줌
}
});

