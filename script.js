// Create an arbitrarily large grid as the display canvas
const canvas = document.getElementById("canvas");
function createGrid(axisLength) {
    for (var i = 0; i < axisLength**2; i++) {

        //Create a child div for each loop pass
        let cell = document.createElement("div");

        // Define the properties of the child div
        cell.className = "cell";
        cell.style.border = "0.01px grey dotted";


        //Append
        canvas.appendChild(cell);
    }
    canvas.style.setProperty("grid-template-columns", `repeat(${axisLength}, 1fr)`);
    canvas.style.setProperty("grid-template-rows", `repeat(${axisLength}, 1fr)`);
}


// Let users dictate the size of the canvas
let inputField = document.getElementById("input-length");
inputField.addEventListener("keydown", (event) => createGrid(event.key));