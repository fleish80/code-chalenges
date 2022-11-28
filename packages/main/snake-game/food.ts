import {expandSnake, onSnake} from './snake.js';

let food = {x: 1, y: 1};
const EXPANSION_RATE = 1;

export function updateFood() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = {x: 20, y: 10};
  }
}

export function drawFood(gameBoard: HTMLElement) {
  const foodElement = document.createElement('div');
  foodElement.classList.add('food');
  foodElement.style.gridRowStart = food.y.toString();
  foodElement.style.gridColumnStart = food.x.toString();
  gameBoard.appendChild(foodElement)
}
