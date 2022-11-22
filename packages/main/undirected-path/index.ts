const edges: [string, string][] = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

const buildGraph = (edges: [string, string][]): { [key: string]: string[] } => {
  // const graph: { [key: string]: string[] } = {};

  const graph: { [key: string]: string[] } =
    edges.reduce((acc: { [key: string]: string[] }, curr: [string, string]) => {
      if (!acc[curr[0]]) {
        acc[curr[0]] = [];
      }
      if (!acc[curr[1]]) {
        acc[curr[1]] = [];
      }
      acc[curr[0]].push(curr[1]);
      acc[curr[1]].push(curr[0]);
      return acc;
    }, {});
  return graph;
}

console.log(buildGraph(edges));
