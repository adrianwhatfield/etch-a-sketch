let gridSize = 16;

let squareSize = 500 / gridSize;
let squareSizeString = squareSize.toString() + "px";

let containerSize = 500 + (gridSize * 2);
let containerSizeString = containerSize.toString() + "px";

const container = document.getElementById("container");

let auto = "auto ".repeat(gridSize);

container.style.gridTemplateColumns = auto;
container.style.gridTemplateRows = auto;
container.style.width = containerSizeString;
container.style.height = containerSizeString;

function setGrid(gridArea) {
    gridArea = gridSize * gridSize;

    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement("div");
        square.setAttribute("id", i);
        square.classList.toggle("squareItem");

        square.style.width = squareSizeString;
        square.style.height = squareSizeString;
        square.style.backgroundColor = "white";

        container.appendChild(square);

        document.getElementById(i).addEventListener("mouseenter", paint = () => {
            document.getElementById(i).style.backgroundColor = "black";
        });
    };
};

setGrid();

// Need to get all squares, listen for hover (mouseover/out), 
// then toggle blackBg for that one square