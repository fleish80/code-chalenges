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

const deepGraph = (graph: GraphType, source: number): number[] => {
  const arr: number[] = [];
  const visited = new Set();
  const stack: number[] = [source];
  while (stack.length > 0) {
    const value = stack.pop() as number;
    if (!visited.has(value)) {
      arr.push(value);
      stack.push(...graph[value]);
      visited.add(value);
    }
  }
  return arr;
}

const runMySolution = (graph: GraphType): number => {
  const clonedGraph = {...graph};
  let counter = 0;
  while (Object.keys(clonedGraph).length > 0) {
    const nodes = deepGraph(clonedGraph, parseInt(Object.keys(clonedGraph)[0]));
    nodes.forEach(node => delete clonedGraph[node]);
    counter++;
  }
  return counter;
}

const explore = (graph: GraphType, current: number, visited: Set<number>) => {
  if (visited.has(current)) {
    return false;
  }

  visited.add(current);

  for (let neighbour of graph[current]) {
    explore(graph, neighbour, visited);
  }

  return true;
}

const runCorrectSolution = (graph: GraphType): number => {
  const visited = new Set<number>();
  let counter = 0;

  for (let node in graph) {
    if (explore(graph, parseInt(node), visited)) {
      counter++;
    }
  }

  return counter;

}


console.log(runMySolution(graph));

console.log(runCorrectSolution(graph));

