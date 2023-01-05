let rows = 16;
let cols = 16;
let width = 256;
let height = 256;

let cellWidth = (width / rows);
let cellHeight = (height / rows);

function paintCell() {
    this.classList.add('painted');
}

function createCanvas() {
    const canvas = document.createElement('div');
    canvas.setAttribute('id', 'canvas');
    canvas.setAttribute('style', `width: ${width}px; height: ${height}px;`);
    document.body.appendChild(canvas);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('style', `width: ${cellWidth}px; height: ${cellHeight}px;`);
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
    let size = prompt("Please enter a grid size", "16");
    size = size.toString();
    if (size < 100) {
        rows = size;
        cols = size;
        cellWidth = (width / rows);
        cellHeight = (height / rows);
    }
    deleteCanvas();
    createCanvas();
}

const btn = document.querySelector('button');
btn.addEventListener('click', defineGridSize);

createCanvas();