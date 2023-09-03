const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
    const miliSec = String(date.getMilliseconds()).padStart(3,"0");
    clock.innerText = `${hour}:${minute}:${sec}:${miliSec}`;
}

getClock();
setInterval(getClock,10);