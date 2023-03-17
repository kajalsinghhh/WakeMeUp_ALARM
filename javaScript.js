var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var time = document.getElementById("time");
var setTime = () => {

    var d = new Date();

    am_pm = d.getHours() > 12 ? "PM" : "AM";
    h = (d.getHours() == 12) ? 12 : (d.getHours()%12);
    m = d.getMinutes();
    s = d.getSeconds();

    time.innerHTML = ` ${h} : ${m} : ${s} ${am_pm}`
    hour.style.transform = `rotate(${h * 30 + Math.floor(m / 16) * 6}deg)`;
    minute.style.transform = `rotate(${m * 6}deg)`;
    second.style.transform = `rotate(${s * 6}deg)`;

}
setTime();
setInterval(() => {
    setTime();
}, 1000);


