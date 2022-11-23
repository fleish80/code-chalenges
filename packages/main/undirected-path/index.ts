const edges: [string, string][] = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

const buildGraph = (edges: [string, string][]): { [key: string]: string[] } => {
  const graph: { [key: string]: string[] } =
    edges.reduce((acc: { [key: string]: string[] }, [nodeA, nodeB]: [string, string]) => {
      if (!(nodeA in acc)) {
        acc[nodeA] = [];
      }
      if (!(nodeB in acc)) {
        acc[nodeB] = [];
      }
      acc[nodeA].push(nodeB);
      acc[nodeB].push(nodeA);
      return acc;
    }, {});
  return graph;
}

const runIterative = (graph: { [key: string]: string[] }, source: string, target: string) => {
  const visited = new Set<string>();
  const stack: string[] = [source];
  while (stack.length > 0) {
    const value = stack.pop() as string;
    visited.add(value);
    if (value === target) {
      return true;
    }
    graph[value].forEach((val: string) => {
      if (!visited.has(val)) {
        stack.push(val);
      }
    })
  }
  return false;


}

const graph = buildGraph(edges);


console.log(runIterative(graph,'i', 'm'));
console.log(runIterative(graph,'i', 'n'));
console.log(runIterative(graph,'o', 'n'));
console.log(runIterative(graph,'n', 'k'));
