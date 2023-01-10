let gridSize = 16;
//let gridArea = gridSize * gridSize;
let squareSize = 500 / gridSize;
let squareSizeString = squareSize.toString() + "px"

//console.log(gridArea);

const container = document.getElementById("container");

let auto = "auto ".repeat(gridSize)

container.style.gridTemplateColumns = auto;
container.style.gridTemplateRows = auto;

//const square = document.createElement("div")

//square.style.width = squareSizeString;
//square.style.height = squareSizeString;
//square.style.backgroundColor = "white";

//container.appendChild(square);

function setGrid(gridArea) {
    gridArea = gridSize * gridSize;
    //console.log(gridArea);

    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement("div")

        square.style.width = squareSizeString;
        square.style.height = squareSizeString;
        square.style.backgroundColor = "white";

        container.appendChild(square);
        //console.log("square made")
    };
    //console.log("function")
}

setGrid();