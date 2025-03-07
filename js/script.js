// Etch-A-Sketch JavaScript functionality

// DOM Elements
const gridContainer = document.getElementById('grid-container');
const clearButton = document.getElementById('clear-btn');
const gridSizeSlider = document.getElementById('size-slider');
const gridSizeValue = document.getElementById('size-value');

// Default grid size
let currentGridSize = 16;

// Initialize the application
function init() {
    createGrid(currentGridSize);
    updateGridSizeDisplay(currentGridSize);
    
    // Event listeners
    clearButton.addEventListener('click', clearGrid);
    gridSizeSlider.addEventListener('input', updateGridSize);
}

// Create the grid with specified size
function createGrid(size) {
    // Clear existing grid
    gridContainer.innerHTML = '';
    
    // Create etch-a-sketch container
    const etchASketch = document.createElement('div');
    etchASketch.classList.add('etch-a-sketch');
    
    // Create grid div
    const grid = document.createElement('div');
    grid.classList.add('grid');
    
    // Set CSS grid properties
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    // Create grid cells
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        
        // Add hover effect for drawing
        cell.addEventListener('mouseover', function() {
            this.style.backgroundColor = getRandomColor();
        });
        
        grid.appendChild(cell);
    }
    
    // Append grid to etch-a-sketch container, then to grid container
    etchASketch.appendChild(grid);
    gridContainer.appendChild(etchASketch);
}

// Update grid size based on slider value
function updateGridSize() {
    currentGridSize = parseInt(gridSizeSlider.value);
    updateGridSizeDisplay(currentGridSize);
    createGrid(currentGridSize);
}

// Update grid size display
function updateGridSizeDisplay(size) {
    gridSizeValue.textContent = `${size} x ${size}`;
}

// Clear the grid - reset all cells to white
function clearGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '';
    });
}

// Generate a random color for drawing
function getRandomColor() {
    // Option 1: Full random colors
    // return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    
    // Option 2: Random shade of black (creates a grayscale sketching effect)
    const shade = Math.floor(Math.random() * 256);
    return `rgb(${shade}, ${shade}, ${shade})`;
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

