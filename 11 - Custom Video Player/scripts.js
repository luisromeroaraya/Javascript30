const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.innerHTML = "❚❚";
    }
    else {
        video.pause();
        toggle.innerHTML = "►";
    };
}

function updateProgress() {
    percent = video.currentTime * 100 / video.duration;
    progressBar.style.flexBasis = `${percent}%`;
}

toggle.addEventListener("click", togglePlay);
video.addEventListener('timeupdate', updateProgress);

updateProgress();