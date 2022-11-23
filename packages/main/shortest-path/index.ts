type GraphType = { [key: string]: string[] };

const graph: GraphType = {
  w: ['x', 'v'],
  x: ['w', 'y'],
  y: ['x', 'z'],
  z: ['y', 'v'],
  v: ['w', 'z'],
  a: ['b'],
  b: ['a']
}

const runMySolution = (graph: GraphType, source: string, target: string, visited: Set<string>): number => {

  if (source === target) {
    return 0;
  }
  visited.add(source);

  let size = 1 + Math.min( ...graph[source]
    .filter((neighbour: string) => !visited.has(neighbour))
    .map((neighbour: string) => runMySolution(graph, neighbour, target, visited)) );
  return size;

}

const runCorrectSolution = (graph: GraphType, source: string, target: string): number => {
  const queue: [string, number][] = [[source, 0]];
  const visited = new Set<string>();
  while (queue.length > 0) {
    const [value, distance] = queue.shift() as [string, number];
    if (!visited.has(value)) {
      visited.add(value);
      if (value === target) {
        return distance;
      }
      graph[value].forEach(neighbour => queue.push([neighbour, distance + 1]));
    }
  }
  return Infinity;

}

console.log(runMySolution(graph, 'w', 'a', new Set<string>()));
console.log(runCorrectSolution(graph, 'w', 'z'));
