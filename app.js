var min = 0;
var sec = 0;
var mSec = 0;
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var mSecHeading = document.getElementById('mSec');
var interval;
function timer(){
        mSec++;
        mSecHeading.innerHTML = mSec
        if(mSec>=100){
                sec++
                secHeading.innerHTML = sec
                mSec = 0
        }
        else if(sec >=60){
                min++
                minHeading.innerHTML = min
                sec = 0
        }
}
function start(){
        interval = setInterval(timer,10)
        document.getElementById("start").disabled = true;
}
function stop(){
        clearInterval(interval)
        document.getElementById("start").disabled = false;
}
function reset(){
        min = 0
        sec = 0
        mSec = 0
        minHeading.innerHTML = min
        secHeading.innerHTML = sec
        mSecHeading.innerHTML = mSec
        stop()
        document.getElementById("laps").innerHTML = "";
}
var setLaps = function() {
    var p = document.createElement("p") ;
    var Timer = document.getElementById("min").innerText + " : " + document.getElementById("sec").innerText + " : " + document.getElementById("mSec").innerText ;
    var ptext = document.createTextNode(Timer);
    p.appendChild(ptext);
    var laps = document.getElementById("laps");
    laps.appendChild(p);
}