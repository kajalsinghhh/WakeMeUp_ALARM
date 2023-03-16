var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var setTime = () =>{
    var d = new Date();
    h = (d.getHours()%12)*30;
    m = d.getMinutes()*6;
    s = d.getSeconds()*6;
 
    hour.style.transform = `rotate(${h+Math.floor(m/72)*6}deg)`;
    minute.style.transform = `rotate(${m}deg)`;
    second.style.transform = `rotate(${s}deg)`;
}
setTime();
setInterval(() => {
    setTime();
}, 1000);
