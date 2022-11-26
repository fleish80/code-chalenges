const deepEquality = (valueOne: any, valueTwo: any): boolean => {
  console.log({valueOne});
  console.log({valueTwo});
  console.log();
  if (typeof valueOne === 'object' && typeof valueTwo === 'object') {

    if (!Array.isArray(valueOne) && !Array.isArray(valueTwo)) {

      //For null checking
      if (valueOne === valueTwo) {
        return true;
      }

      if (Object.keys(valueOne).length !== Object.keys(valueTwo).length) {
        return false;
      }
      for (let key in valueOne) {
        if (!valueTwo.hasOwnProperty(key)) {
          return false;
        }
        if (!deepEquality(valueOne[key], valueTwo[key])) {
          return false;
        }
      }
    } else if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
      if (valueOne.length !== valueTwo.length) {
        return false;
      }
      for (let i = 0; i < valueOne.length; i++) {
        if (!deepEquality(valueOne[i], valueTwo[i])) {
          return false;
        }
      }
    }
  } else {
    if ((isNaN(valueOne) && typeof(valueOne) === 'number') && (isNaN(valueTwo) && typeof(valueTwo) === 'number')) {
      return true;
    }
    return valueOne === valueTwo;
  }
  return true;
}


const valueOne = {
  x: undefined,
  y: 2,
  z: [1, 2, 3],
  w: null
}

const valueTwo = {
  x: NaN,
  y: undefined,
  z: [1, 2, 3],
  w: null
}

console.log(deepEquality(valueOne, valueTwo));

