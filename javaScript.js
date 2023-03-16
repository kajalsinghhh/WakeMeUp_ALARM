var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var setTime = () =>{
    var d = new Date();
    h = d.getHours()%12;
    m = d.getMinutes()*6;
    s = d.getSeconds()*6;
 
    hour.style.transform = `rotate(${(h*30)+(m%72)}deg)`;
    minute.style.transform = `rotate(${m}deg)`;
    second.style.transform = `rotate(${s}deg)`;
}
setInterval(() => {
    setTime();
}, 1000);
