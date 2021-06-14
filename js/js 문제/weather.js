var date = ["21-03-22", "21-03-23","21-03-24","21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];

// for문 - 배열
function showTemp() {
    document.write("온도: ");


    for(var i = 0; i < temp.length; i++) {
        document.write(temp[i] + ", ");
    }
} 

function showRain() {
    document.write("<br />", "강수량: ");


    for(var i = 0; i < rain.length; i++) {
        document.write(rain[i] + ", ");
    }
}

function showDust() {
    document.write("<br />", "미세먼지: ");

    for(var i = 0; i < dust.length; i++) {
        document.write(dust[i] + ", ");
    }
}

function showAvgTemp() {
    document.write("<br />", "평균온도: ");
    
    var sum = 0;
    for(var i = 0; i < temp.length; i++) {
        sum += temp[i]; 
    }

    var avg = sum/temp.length;
    document.write(avg);

}

function showAvgRain() {
    document.write("<br />", "평균 강수량: ");
    
    var sum = 0;
    for(var i = 0; i < rain.length; i++) {
        sum += rain[i]; 
    }

    var avg = sum/rain.length;
    document.write(avg);

}

function showAvgDust() {
    document.write("<br />", "평균 미세먼지: ");
    
    var sum = 0;
    for(var i = 0; i < dust.length; i++) {
        sum += dust[i]; 
    }

    var avg = sum/dust.length;
    document.write(avg);

}
