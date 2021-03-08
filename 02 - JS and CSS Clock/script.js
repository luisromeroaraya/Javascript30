updateClock = () => {
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    if (seconds == 1) {
        document.getElementsByClassName("second-hand")[0].style.transition = "all 0.5s";
    }
    if (minutes == 1) {
        document.getElementsByClassName("min-hand")[0].style.transition = "all 0.5s";
    }
    if (hours == 1) {
        document.getElementsByClassName("hour-hand")[0].style.transition = "all 0.5s";
    }
    var degSeconds = 90 + seconds * 360 / 60;
    var degMinutes = 90 + minutes * 360 / 60;
    var degHours = 90 + hours * 360 / 12;
    document.getElementsByClassName("second-hand")[0].style.transform = `rotate(${degSeconds}deg`;
    document.getElementsByClassName("min-hand")[0].style.transform = `rotate(${degMinutes}deg`;
    document.getElementsByClassName("hour-hand")[0].style.transform = `rotate(${degHours}deg`;
    if (seconds == 59) {
        document.getElementsByClassName("second-hand")[0].style.transition = "none";
    }
    if (minutes == 59) {
        document.getElementsByClassName("min-hand")[0].style.transition = "none";
    }
    if (hours == 59) {
        document.getElementsByClassName("hour-hand")[0].style.transition = "none";
    }
}
updateClock();
setInterval(updateClock, 1000);

