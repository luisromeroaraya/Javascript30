const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const max = 50;


function shadow(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    shadowX = parseInt(max * x / window.innerWidth) - (max / 2);
    shadowY = parseInt(max * y / window.innerHeight) - (max / 2);
    text.style.textShadow = `
                            ${shadowX}px ${shadowY}px 2px rgba(0,0,0,0.5),
                            ${shadowX * -1}px ${shadowY}px 2px rgba(255,0,0,0.5),
                            ${shadowX}px ${shadowY * -1}px 2px rgba(0,255,0,0.5),
                            ${shadowX * -1}px ${shadowY * -1}px 2px rgba(0,0,255,0.5)`;
}

hero.addEventListener("mousemove", shadow);
