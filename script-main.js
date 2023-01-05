let rows = 16
let cols = 16
let cellSize = 10
let width = rows * cellSize
let height = cols * cellSize

function paintCell() {
    this.classList.add('painted');
}

function createCanvas() {
    const canvas = document.createElement('div');
    canvas.setAttribute('id', 'canvas');
    canvas.setAttribute('style', `width: ${width}px; height: ${height}px;`)
    document.body.appendChild(canvas);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('style', `width: ${cellSize}px; height: ${cellSize}px;`)
            square.addEventListener('mouseover', paintCell);
            canvas.appendChild(square);
        }
    }
}

function deleteCanvas() {
    if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
    }
}

function defineGridSize() {
    let size = prompt("Please enter a grid size", "16")
    size = size.toString();
    if (size < 100) {
        rows = size;
        cols = size;
        width = rows * cellSize;
        height = cols * cellSize;
    }
    deleteCanvas();
    createCanvas();
}

const btn = document.querySelector('button');
btn.addEventListener('click', defineGridSize)

createCanvas();