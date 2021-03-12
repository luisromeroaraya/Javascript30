const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;
    const item = {text: text, done: false};
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    // var node = document.createElement("LI");
    // var input = document.createElement("INPUT");
    // var label = document.createElement("LABEL");
    // input.type = "checkbox";
    // if (plates.done) {
    //     input.checked = "true";
    // }
    // label.for = "";
    // label.textContent = plates.text;
    // node.appendChild(input);
    // node.appendChild(label);
    // platesList.appendChild(node);

    html = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    });
    platesList.innerHTML = html.join("");
}

function toggleDone(e) {
    if (!e.target.matches("input")) return;
    items[e.target.dataset.index].done = !items[e.target.dataset.index].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);