let sequence = [];
let code = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","a","b","a","b"];

function check(e) {
    if (sequence.length >= code.length) {
        sequence.shift();
    }
    sequence.push(e.key);
    console.log(sequence);
    console.log(code);
    if ( sequence.join("").includes(code.join(""))) {
        console.log("SUCCESS");
        cornify_add();
    }
    else {
        console.log("KEEP TRYING");
    }
}

window.addEventListener("keyup", check);