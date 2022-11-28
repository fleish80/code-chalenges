const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board') as HTMLElement;
const winningMessage = document.querySelector('.winning-message') as HTMLElement;
const winningMessageText = document.querySelector('[data-winning-message-text]') as HTMLElement;
const restartButton = document.getElementById('restart-button');

const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
let circleTurn: boolean;

const WINING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

restartButton?.addEventListener('click', startGame);

startGame();

function startGame() {
  circleTurn = false;
  cellElements.forEach(cell => {
    cell.classList.remove(CIRCLE_CLASS);
    cell.classList.remove(X_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, {once: true})
  });
  setBoardHoverClass();
  winningMessage.classList.remove('show');
}

function placeMark(cell: HTMLElement, currentClass: string) {
  cell.classList.add(currentClass);
}


function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  board.classList.add(circleTurn ? CIRCLE_CLASS : X_CLASS);
}

function checkWin(currentClass: string) {
  return WINING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    })
  })
}

function endGame(draw: boolean) {
  if (draw) {
    winningMessageText.innerHTML = 'Draw';
  } else {
    winningMessageText.innerHTML = circleTurn ? 'O\'s Win' : 'X\'s Win';
  }
  winningMessage.classList.add('show');
}

function isDraw() {
  return Array.from(cellElements).every(cell =>
    cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  );
}

function handleClick(e: any) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if(isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}
