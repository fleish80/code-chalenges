class nodeNON {
  n: number;
  char: string;
  children: nodeNON[];

  constructor(n: number, char: string) {
    this.n = n;
    this.char = char;
    this.children = [];
  }

}

const convertToTree = (edges: number[][], labels: string): nodeNON | null => {
  const nodesArray: nodeNON[] = [];
  for (let edge of edges) {
    let nodeSource = nodesArray[edge[0]];
    let nodeDist = nodesArray[edge[1]];
    if (!nodeDist) {
      nodeDist = new nodeNON(edge[1], labels.at(edge[1]) as string);
      nodesArray[edge[1]] = nodeDist;
    }
    if (!nodeSource) {
      nodeSource = new nodeNON(edge[0], labels.at(edge[0]) as string);
      nodesArray[edge[0]] = nodeSource;
    }
    nodeSource.children.push(nodeDist);
  }
  return nodesArray[0];
}

const runNON = (root: nodeNON | null, output: number[]): number => {
  if (root === null) {
    return 0;
  }
  let counter = 1;
  for (const node of root.children) {
    if (root.char === node.char) {
      counter = counter + runNON(node, output);
    } else {
      runNON(node, output);
    }
  }
  output[root.n] = counter;
  return counter;
}



{
  const n = 7, edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], labels = "abaedcd";
  const root = convertToTree(edges, labels);
  const output: number[] = [];
  runNON(root, output);
  console.log(output);
}

{
  const n = 4, edges = [[0,1],[1,2],[0,3]], labels = "bbbb";
  const root = convertToTree(edges, labels);
  const output: number[] = [];
  runNON(root, output);
  console.log(output);
}

{
  const n = 5, edges = [[0,1],[0,2],[1,3],[0,4]], labels = "aabab";
  const root = convertToTree(edges, labels);
  const output: number[] = [];
  runNON(root, output);
  console.log(output);
}

