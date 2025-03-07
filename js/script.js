// Etch-A-Sketch JavaScript functionality

function createGrid() {
  const container = document.querySelector(".container");
  const totalSquares = 16 * 16; // 256 squares for 16x16 grid

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    container.appendChild(square);
  }
}

// Create the grid when the page loads
createGrid();
