function updateVariables() {
    const suffix = this.dataset.sizing || "";
    var root = document.querySelector(':root');
    root.style.setProperty(`--${this.name}`, this.value + suffix);
}

const inputs = document.querySelectorAll("input");
inputs.forEach(input => input.addEventListener("change", updateVariables));
inputs.forEach(input => input.addEventListener("mousemove", updateVariables));