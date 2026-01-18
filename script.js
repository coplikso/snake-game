// html element? uhh maybe, i dunno
const board = document.getElementById('game-board')

// define game variabel
let snake = [{ x: 10, y: 10}];

// draw game board,snek, and food of course
function draw() {
    board.innerHTML = '';
    drawSnake();
}

// draw tha snke!!!!
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = creatGameElement('div',
            'snake')
    })
}

// creat da snake and da food cube
function creatGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className
}