type SquaresType =
  'top-right'
  | 'top'
  | 'top-left'
  | 'right'
  | 'center'
  | 'left'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left';
type IconsType = 'circle' | 'close';
type TripleSquareType = [SquaresType, SquaresType, SquaresType];

interface Square {
  wins: number[],
  element: HTMLElement,
  visited: boolean;
  value?: IconsType;
}

const squaresWinMap: TripleSquareType[] = [
  ['top-left', 'top', 'top-right'],
  ['left', 'center', 'right'],
  ['bottom-left', 'bottom', 'bottom-right'],
  ['top-left', 'left', 'bottom-left'],
  ['top', 'center', 'bottom'],
  ['top-right', 'right', 'bottom-right'],
  ['top-left', 'center', 'bottom-right'],
  ['top-right', 'center', 'bottom-left']
];

const squaresMap: Record<SquaresType, Square> = {
  'top-left': {
    wins: [0, 3, 6],
    element: document.createElement('div'),
    visited: false,
  },
  'top': {
    wins: [0, 4],
    element: document.createElement('div'),
    visited: false

  },
  'top-right': {
    wins: [0, 5, 7],
    element: document.createElement('div'),
    visited: false
  },
  'left': {
    wins: [1, 3],
    element: document.createElement('div'),
    visited: false
  },
  'center': {
    wins: [1, 4, 6, 7],
    element: document.createElement('div'),
    visited: false
  },
  'right': {
    wins: [1, 5],
    element: document.createElement('div'),
    visited: false
  },
  'bottom-left': {
    wins: [2, 3, 7],
    element: document.createElement('div'),
    visited: false
  },
  'bottom': {
    wins: [2, 4],
    element: document.createElement('div'),
    visited: false
  },
  'bottom-right': {
    wins: [2, 5, 6],
    element: document.createElement('div'),
    visited: false
  },
}

let currentIcon: IconsType = 'circle';

const toggleCurrentIcon = () => {
  if (currentIcon === 'circle') {
    currentIcon = 'close';
  } else if (currentIcon === 'close') {
    currentIcon = 'circle';
  }
}

const selectSquare = (square: SquaresType) => {
  const visited = squaresMap[square].visited;
  if (!visited) {
    squaresMap[square].visited = true;
    toggleCurrentIcon();
    const img = document.createElement('img');
    img.src = `${currentIcon}.svg`;
    squaresMap[square].element.querySelector('.square-button')?.append(img);
    squaresMap[square].value = currentIcon;

    console.log({square});
    const wins = squaresMap[square].wins;

    for (let i = 0; i < wins.length; i++) {
      const win = squaresWinMap[wins[i]];
      if (squaresMap[win[0]].value === squaresMap[win[1]].value &&
        squaresMap[win[0]].value === squaresMap[win[2]].value &&
        squaresMap[win[1]].value === squaresMap[win[2]].value
      ) {

        console.log('won');
        console.log(squaresMap[win[0]].value);
        console.log(squaresMap[win[1]].value);
        console.log(squaresMap[win[2]].value);

        squaresMap[win[0]].element.classList.add('square-won');
        squaresMap[win[1]].element.classList.add('square-won');
        squaresMap[win[2]].element.classList.add('square-won');
      }
    }

  }
}

const buildBox = (): Element => {
  const mainSection = document.createElement('section');
  mainSection.classList.add('main');

  mainSection.append(createInternalSquare('top-left'));
  mainSection.append(createInternalSquare('top'));
  mainSection.append(createInternalSquare('top-right'));
  mainSection.append(createInternalSquare('left'));
  mainSection.append(createInternalSquare('center'));
  mainSection.append(createInternalSquare('right'));
  mainSection.append(createInternalSquare('bottom-left'));
  mainSection.append(createInternalSquare('bottom'));
  mainSection.append(createInternalSquare('bottom-right'));

  return mainSection;
}

const createInternalSquare = (square: SquaresType): Element => {
  const squareDiv = squaresMap[square].element;
  squareDiv.classList.add('square');
  const squareButton = document.createElement('button');
  squareButton.classList.add('square-button');
  squareButton.addEventListener('click', () => selectSquare(square));
  squareDiv.append(squareButton);

  return squareDiv;
}

(() => {
  const mainElement = buildBox();
  document.body.append(mainElement);
})()
