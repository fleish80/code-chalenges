function* generatorFunction() {
  yield 'Hello';
  yield 'World';
}

const objGenerator = generatorFunction();

for (const value of objGenerator) {
  console.log(value);
}
