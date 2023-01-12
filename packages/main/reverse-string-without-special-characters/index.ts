const runRSWSC = (word: string): string => {


  if (!word || word.length === 1) {
    return word;
  }

  const wordArray = word.split('');


  let start = 0;
  let end = wordArray.length - 1;

  while (start < end) {

    while (!isCharInRange(wordArray[start]) && start < wordArray.length) {
      start++;
    }

    while (!isCharInRange(wordArray[end]) && end >= 0) {
      end--;
    }

    if (start < end) {
      const temp = wordArray[start];
      wordArray[start] = wordArray[end];
      wordArray[end] = temp;
      start++;
      end--;
    }

  }

  return wordArray.join('');

}

const isCharInRange = (char: string): boolean => {
  return ('A' <= char && char <= 'Z') || ('a' <= char && char <= 'z');
}

console.log(runRSWSC('a*b'));
console.log(runRSWSC('a*b*x'));
console.log(runRSWSC('aAABC*b*x'));



