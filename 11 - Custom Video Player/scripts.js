const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const sliders = player.querySelectorAll('.player__slider');
const fullScreenButton = player.querySelector('.fullscreen__button');

function togglePlay() {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}

function togglePlayButton() {
    if (video.paused) {
        toggle.innerHTML = "►";
    }
    else {
        toggle.innerHTML = "❚❚";
    }
}

function updateProgress() {
    percent = video.currentTime * 100 / video.duration;
    progressBar.style.flexBasis = `${percent}%`;
}

function updateSlider() {
    if (this.name == "volume") {
        video.volume = this.value;
    }
    else {
        video.playbackRate = this.value;
    }
}

function skip() {
        video.currentTime = video.currentTime + parseFloat(this.dataset.skip);    
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function fullScreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
      video.msRequestFullscreen();
    }
  }

let mousedown = false;

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", togglePlayButton);
video.addEventListener("pause", togglePlayButton);
video.addEventListener("timeupdate", updateProgress);
sliders.forEach(slider => slider.addEventListener("change", updateSlider));
skipButtons.forEach(skipButton => skipButton.addEventListener("click", skip));
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
fullScreenButton.addEventListener("click", fullScreen);

percent = 0;
updateProgress();