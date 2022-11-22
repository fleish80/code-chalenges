const graph: { [k: string]: string[] } = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  f: [],
  e: []
}

const run = (graph: { [k: string]: string[] }, firstNode: string) => {
  const queue: string[] = [firstNode];
  while (queue.length > 0) {
    const val = queue.shift() as string;
    console.log(val);
    queue.push(...graph[val]);
  }
}

run(graph, 'a');
