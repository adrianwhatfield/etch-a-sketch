let gridSize = 16;
let isRgb = false;

const container = document.getElementById("container");
const changeSizeButton = document.getElementById("changeSize");
const rgbMode = document.getElementById("rgbMode");

// Event listeners for colour and size options
changeSizeButton.addEventListener("click", changeSize);
rgbMode.addEventListener("click", rgb);

// Function to clear the grid, ask the user for a new size, and set it
function changeSize() {
    clearGrid();
    gridSize = prompt("Grid size?", "16");
    setGrid();
}

// Generates a random RGB colour and returns it
function rgb() {
    isRgb = true;
    let color0 = Math.floor(Math.random() * (256 - 1) + 1);
    let color1 = Math.floor(Math.random() * (256 - 1) + 1);
    let color2 = Math.floor(Math.random() * (256 - 1) + 1);
    return `rgb(${color0}, ${color1}, ${color2})`;
}

// Remove all children of the container
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
};

// Create the grid
function setGrid() {
    gridSize = parseInt(gridSize); // convert prompt() to int

    // Set size of grid to the right size
    if (gridSize > 100) {
        gridSize = 100;
    } else if (gridSize == 0) {
        gridSize = 16;
    };

    let gridArea = gridSize * gridSize; // amount of squares needed

    // Create size of the squares
    squareSize = 700 / gridSize;
    squareSizeString = squareSize.toString() + "px";

    // Loop through all the squares and append them
    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement("div");
        square.setAttribute("id", i);

        square.style.width = squareSizeString;
        square.style.height = squareSizeString;
        square.style.backgroundColor = "white";

        container.appendChild(square);

        // Check rgb and change colours if true
        document.getElementById(i).addEventListener("mouseenter", paint = () => {
            if (isRgb == false) {
                document.getElementById(i).style.backgroundColor = "black";
            } else if (isRgb == true) {
                document.getElementById(i).style.backgroundColor = rgb();
            }
            
        });
    };

    //Setting the size of the container
    containerSize = 700;
    containerSizeString = containerSize.toString() + "px";

    auto = "auto ".repeat(gridSize); // setting the amount of rows and columns needed

    container.style.gridTemplateColumns = auto;
    container.style.gridTemplateRows = auto;
    container.style.width = containerSizeString;
    container.style.height = containerSizeString;
};

setGrid();