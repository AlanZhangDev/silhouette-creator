let rows = 16
let cols = 16
let cellSize = 10
let width = rows * cellSize
let height = cols * cellSize

const canvas = document.createElement('div');
canvas.setAttribute('id', 'canvas');
canvas.setAttribute('style', `width: ${width}px; height: ${height}px;`)

function paintCell() {
    this.classList.add('painted');
}

function createCanvas() {
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


document.body.appendChild(canvas);
createCanvas()