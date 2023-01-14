let gridSize = 16;
let isRgb = false;

const container = document.getElementById("container");
const changeSizeButton = document.getElementById("changeSize");
const rgbMode = document.getElementById("rgbMode");

changeSizeButton.addEventListener("click", changeSize);
rgbMode.addEventListener("click", rgb);

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

function rgb() {
    isRgb = true;
    let color0 = Math.floor(Math.random() * (256 - 1) + 1);
    let color1 = Math.floor(Math.random() * (256 - 1) + 1);
    let color2 = Math.floor(Math.random() * (256 - 1) + 1);
    let newColor = `rgb(${color0}, ${color1}, ${color2})`;
    return newColor;
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
};

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
            if (isRgb == false) {
                document.getElementById(i).style.backgroundColor = "black";
            } else if (isRgb == true) {
                document.getElementById(i).style.backgroundColor = rgb();
            }
            
        });
    };

    containerSize = 700;
    containerSizeString = containerSize.toString() + "px";

    auto = "auto ".repeat(gridSize);

    container.style.gridTemplateColumns = auto;
    container.style.gridTemplateRows = auto;
    container.style.width = containerSizeString;
    container.style.height = containerSizeString;
};