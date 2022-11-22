const graph: { [k: string]: string[] } = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  f: [],
  e: []
}

const runIterative = (graph: { [k: string]: string[] }, source: string) => {
  const stack: string[] = [source];
  while (stack.length > 0) {
    const val = stack.pop() as string;
    console.log(val);
    stack.push(...graph[val]);
  }
}

const runRecursive = (graph: { [k: string]: string[] }, source: string) => {
  console.log(source);
  graph[source].forEach(s => runRecursive(graph, s));
}

runIterative(graph, 'a');
console.log('separator');
runRecursive(graph, 'a');

