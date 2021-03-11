function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
var context = this, args = arguments;
var later = function() {
  timeout = null;
  if (!immediate) func.apply(context, args);
};
var callNow = immediate && !timeout;
clearTimeout(timeout);
timeout = setTimeout(later, wait);
if (callNow) func.apply(context, args);
  };
}
/////////////////////////////////

function check(e) {
    images.forEach(image => {
        const slideInAt = (window.scrollY + window.innerHeight) - (image.height / 2);
        const imageBottom = image.offsetTop + image.height;
        const isHalf = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalf && isNotScrolledPast) {
            image.classList.add("active");
        }
        else {
            image.classList.remove("active");
        }
    });
}

const images = document.querySelectorAll(".slide-in");

window.addEventListener("scroll", debounce(check));