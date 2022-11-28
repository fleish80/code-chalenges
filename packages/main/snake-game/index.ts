import {drawSnake, SNAKE_SPEED, updateSnake} from './snake.js';
import {drawFood, updateFood} from './food.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime: number) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
    return;
  }
  console.log('Render');
  lastRenderTime = currentTime;

  updateSnake();
  updateFood();

  gameBoard!.innerHTML = '';
  drawSnake(gameBoard!);
  drawFood(gameBoard!)
}

window.requestAnimationFrame(main);





