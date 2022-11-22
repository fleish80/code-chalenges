const graph: { [key: string]: string[] } = {
  f: ['g', 'h'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

const run = (graph: { [k: string]: string[] }, source: string, target: string) => {
  const stack: string[] = [source];
  while (stack.length > 0) {
    const val = stack.pop() as string;
    if (val === target) {
      return true;
    }
    stack.push(...graph[val]);
  }
  return false;
}

console.log(run(graph, 'j', 'k'));
console.log(run(graph, 'f', 'i'));
console.log(run(graph, 'j', 'h'));
console.log(run(graph, 'h', 'h'));




