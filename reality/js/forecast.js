//객체 선언

function Forecast() {
    this.url = "https://api.openweathermap.org/data/2.5/weather";
    this.url += "?units=" + "metric";
    this.url += "&lang=" + "kr";
    this.url += "&APPID=" + "41ceba83535a58d7d0d6f8ede7924a5c"; //내 api 키
    this.url += "&q=";
}


Forecast.prototype.getCurrentWeather = function(city) {
    var dataObj;
    var openWeatherAPI = this.url; //q가 계속 붙으므로 url 초기화를 위해 반드시 넣어줌

    $.ajax({
        type:"GET",
        url: openWeatherAPI += city,
        dataType:"json",
        async: false, //동기형식으로 지정 (data값을 return 해주기 위해)
        success:function(data) {
            dataObj = data;

        },
        error:function(request, status, error){
            console.log("code: " + request.status);
            console.log("message: " + request.responseText);
            console.log("error: " + error);
        }
    });
    return dataObj;
}


// 현재 날씨 온도 얻어오기

Forecast.prototype.getCurrentTemp = function(city) {
    var temp;
    var openWeatherAPI = this.url;

    $.ajax({
        type:"GET",
        url: openWeatherAPI += city,
        dataType:"json",
        async: false, //return해주기 위해
        success:function(data) {
            temp = Math.floor(data.main.temp);//소수점 버림

        },
        error:function(request, status, error){
            console.log("code: " + request.status);
            console.log("message: " + request.responseText);
            console.log("error: " + error);
        },
        complete:function(data,textStatus) {
            //작업 완료 후 처리
        }
    });

    return temp;
}