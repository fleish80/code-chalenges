import {getInputDirection} from './input.js';

export const SNAKE_SPEED = 5;
const snakeBody = [{x: 11, y: 11}];
let newSegments = 0;


export function updateSnake() {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = {...snakeBody[i]};
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function drawSnake(gameBoard: HTMLElement) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.classList.add('snake');
    snakeElement.style.gridRowStart = segment.y.toString();
    snakeElement.style.gridColumnStart = segment.x.toString();
    gameBoard.appendChild(snakeElement)
  });
}

export function expandSnake(amount: number) {
  newSegments += amount;
}

export function onSnake(position: { x: number, y: number }) {
  return snakeBody.some(segment => {
    return equalPositions(segment, position)
  });
}

function equalPositions(pos1: { x: number, y: number }, pos2: { x: number, y: number }) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i=0; i < newSegments; i++) {
    snakeBody.push({...snakeBody[snakeBody.length - 1]});
  }
}


