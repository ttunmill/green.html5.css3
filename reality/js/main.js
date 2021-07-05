// 지도 호출
var map = new Map();
map.getkakaoMap();

// 날씨 호출
var forecast = new Forecast();
var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

//한번씩 호출보다 한꺼번에 정보를 호출하는게 좋다
//백엔드 서버 접속을 최대한 자주 안할수록 좋음

$(function() {
    $(".temp").each(function(i) {
        $(this).text(forecast.getCurrentTemp(cityList[i]) + "℃");
    });

$(".location").on({
    "click":function() {
        var q = $(this).children(".q").attr("id");
        var redirectURL = "pages/weather_location.html?q=" + q;
        location.href = redirectURL;
        }
    });
});