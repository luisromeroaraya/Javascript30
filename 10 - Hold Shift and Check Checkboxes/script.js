checkboxes = document.querySelectorAll("input");
checkboxes.forEach(checkbox => checkbox.addEventListener("click", checkShift));
let last;


function checkShift(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === last) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    last = this;
}
