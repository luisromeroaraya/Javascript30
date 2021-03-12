items = document.querySelectorAll("[data-time]");
times = [];
totalSeconds = 0;
finalMinutes = 0;
finalSeconds = 0;

items.forEach(item => times.push(item.dataset.time));
console.table(times);
times.map(function(time) {
    const [minutes, seconds] = time.split(":");
    totalSeconds = totalSeconds + (parseInt(minutes)*60) + parseInt(seconds);
})

finalMinutes = Math.floor(totalSeconds / 60);
finalSeconds = Math.floor(totalSeconds % 60);
console.log(`Total time = ${finalMinutes}:${finalSeconds}`);