var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var setTime = () =>{
    var d = new Date();
    h = d.getHours()%12;
    m = d.getMinutes();
    s = d.getSeconds();

    hour.style.transform = `rotate(${(h*5*6)+(m%12)*6}deg)`;
    minute.style.transform = `rotate(${m*6}deg)`;
    second.style.transform = `rotate(${s*6}deg)`;
}
setTime();
