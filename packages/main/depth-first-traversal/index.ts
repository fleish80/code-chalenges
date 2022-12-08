const graphDFT: { [k: string]: string[] } = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  f: [],
  e: []
}

const runIterativeDFT = (graph: { [k: string]: string[] }, source: string) => {
  const stack: string[] = [source];
  while (stack.length > 0) {
    const val = stack.pop() as string;
    console.log(val);
    stack.push(...graph[val]);
  }
}

const runRecursiveDFT = (graph: { [k: string]: string[] }, source: string) => {
  console.log(source);
  graph[source].forEach(s => runRecursiveDFT(graph, s));
}

runIterativeDFT(graphDFT, 'a');
console.log('separator');
runRecursiveDFT(graphDFT, 'a');

