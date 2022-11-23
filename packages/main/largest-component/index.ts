type GraphType = { [key: number]: number[] };

const graph: GraphType = {
  1: [2],
  2: [1],
  3: [],
  4: [6],
  5: [6],
  6: [4, 5, 7, 8],
  7: [6],
  8: [6]
}


const explore = (graph: GraphType, node: number, visited: Set<number>): number => {
  if (visited.has(node)) {
    return 0;
  }
  visited.add(node);
  let counter = 1;
  graph[node].forEach((neighbour: number) => {
    counter =  counter + explore(graph, neighbour, visited);
  });
  return counter;
}

const runMySolution = (graph: GraphType): number => {
  const visited = new Set<number>();
  let counter = 0;
  Object.keys(graph).forEach((node: string) => {
    counter = Math.max(counter, explore(graph, parseInt(node), visited));
  });
  return counter;
}

console.log(runMySolution(graph));
