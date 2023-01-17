//
const canvas = document.getElementById("canvas");

function createGrid(axisLength) {
    for (var i = 0; i < axisLength**2; i++) {

        //Create a child div for each loop pass
        let cell = document.createElement("div");

        // Define the properties of the child div
        cell.className = "cell";
        cell.style.border = "2px black solid";


        //Append
        canvas.appendChild(cell);
    }
    canvas.style.setProperty("grid-template-columns", `repeat(${axisLength}, 1fr)`);
    canvas.style.setProperty("grid-template-rows", `repeat(${axisLength}, 1fr)`);
}

/* by creating rows, then creating columns within each row

// parent div
const canvas = document.getElementById("canvas");

// Add child divs within parent div
for (var i = 0; i < 6; i++) {

    //Create a child div for each loop pass
    let row = document.createElement("div");

    // Define the properties of the child div
    row.innerHTML = (i);
    row.id = i;
    row.style.border = "2px black solid";
    row.style.padding = "20px";
    row.style.margin = "-2px";
    row.style.minHeight = "6px";

    //Append
    canvas.appendChild(row);
}

*/