let gridSize = 16;

const container = document.getElementById("container");
const changeSizeButton = document.getElementById("changeSize");

changeSizeButton.addEventListener("click", changeSize);

container.style.gridTemplateColumns = auto;
container.style.gridTemplateRows = auto;
container.style.width = containerSizeString;
container.style.height = containerSizeString;

setGrid();

function changeSize() {
    clearGrid();
    gridSize = prompt("Grid size?", "16");
    setGrid();
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function setGrid(gridArea) {
    gridSize = parseInt(gridSize);
    gridArea = gridSize * gridSize;

    if (gridSize > 100) {
        gridSize = 100;
    };

    squareSize = 700 / gridSize;
    squareSizeString = squareSize.toString() + "px";

    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement("div");
        square.setAttribute("id", i);

        square.style.width = squareSizeString;
        square.style.height = squareSizeString;
        square.style.backgroundColor = "white";

        container.appendChild(square);

        document.getElementById(i).addEventListener("mouseenter", paint = () => {
            document.getElementById(i).style.backgroundColor = "black";
        });
    };

    containerSize = 700 + (gridSize * 2);
    containerSizeString = containerSize.toString() + "px";

    auto = "auto ".repeat(gridSize);

    container.style.gridTemplateColumns = auto;
    container.style.gridTemplateRows = auto;
    container.style.width = containerSizeString;
    container.style.height = containerSizeString;
};