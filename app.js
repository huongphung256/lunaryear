var day = document.querySelector(".time-day");
var hours = document.querySelector(".time-hours");
var minutes = document.querySelector(".time-minutes");
var seconds = document.querySelector(".time-seconds");
var time = new Date("Jan 25 2020").getTime();
function setupTime() {
    var today = new Date().getTime();
    var result = Math.abs(time - today);
    var d = result/(1000*60*60*24);
    var h = (result%(1000*60*60*24))/(60*1000*60);
    var m = (result%(1000*60*60))/(60*1000);
    var s = (result%(1000*60))/1000;
    day.innerHTML = Math.floor(d);
    hours.innerHTML = Math.floor(h);
    minutes.innerHTML = Math.floor(m);
    seconds.innerHTML = Math.floor(s);
}
var hpy2020 = setInterval(setupTime, 1000);
