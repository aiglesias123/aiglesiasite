
let squares = [];

function roundStart(x, y) {
    let container = document.createElement("div");
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            let box = createElement("button");
            box.id = String(i) + String(j);
            // button styling
            container.appendChild(box);
        }
    }
    // trigger box assignment & the rest
    $("#container").add(container);
}

function gameStart() {
    // stuff
}

$(gameStart());
