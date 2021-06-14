var date = ["21-03-22", "21-03-23","21-03-24","21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];


// forecast.unit(arr); / this.unit(arr); 단위 함수 호출


var forecast = new Object();

forecast.show = function(arr) {
    var str = "";
    for(var i = 0; i < arr.length; i++) {    
    str += arr[i];
    str += this.unit(arr) + "  ";
    }
    return str;
};

forecast.avgShow = function(arr) {
    var num = 0;
    for(var i = 0; i < arr.length; i++) {
        num += arr[i];
    }
    var avg = num / arr.length;
    
    return avg + this.unit(arr);
};


//단위 붙여주는 것
forecast.unit = function(arr) {
    switch(arr) {
        case temp: return "°C";
        break;
        case rain: return "mm";
        break;
        case dust: return "㎍/㎥";
        break;
    }
};


//함수 호출 후 태그에 넣어줌
document.getElementById("show_temp").innerHTML = forecast.show(temp);
document.getElementById("show_rain").innerHTML = forecast.show(rain);
document.getElementById("show_dust").innerHTML = forecast.show(dust);

document.getElementById("show_temp_avg").innerHTML = forecast.avgShow(temp);
document.getElementById("show_rain_avg").innerHTML = forecast.avgShow(rain);
document.getElementById("show_dust_avg").innerHTML = forecast.avgShow(dust);
