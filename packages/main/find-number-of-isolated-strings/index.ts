const findNumberOfIsolatedStrings = (str: string): number => {
  let counter = 0;
  const set = new Set<string>();
  if (str) {
    for (let i = 0; i < str.length; i++) {
      if (set.has(str[i])) {
        counter++;
        set.clear();
      }
      set.add(str[i]);
    }
    counter++;
  }
  return counter;
}



console.log('Program has completed');

