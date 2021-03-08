updateClock = () => {
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var degSeconds = 90 + seconds * 360 / 60;
    var degMinutes = 90 + minutes * 360 / 60;
    var degHours = 90 + hours * 360 / 12;
    document.getElementsByClassName("second-hand")[0].style.transform = `rotate(${degSeconds}deg`;
    document.getElementsByClassName("min-hand")[0].style.transform = `rotate(${degMinutes}deg`;
    document.getElementsByClassName("hour-hand")[0].style.transform = `rotate(${degHours}deg`;
}
updateClock();
setInterval(updateClock, 1000);

