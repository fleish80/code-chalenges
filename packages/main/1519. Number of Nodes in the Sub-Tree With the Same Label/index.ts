// My solution - wrong
{
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
    const n = 4, edges = [[0, 1], [1, 2], [0, 3]], labels = "bbbb";
    const root = convertToTree(edges, labels);
    const output: number[] = [];
    runNON(root, output);
    console.log(output);
  }

  {
    const n = 5, edges = [[0, 1], [0, 2], [1, 3], [0, 4]], labels = "aabab";
    const root = convertToTree(edges, labels);
    const output: number[] = [];
    runNON(root, output);
    console.log(output);
  }
}

// Correct Solution - not mine
{
  const runNONS = (n: number, edges: number[][], labels: string): number[] => {
    const ans: number[] = new Array(n);
    const graph: number[][] = [];

    for (let i = 0; i < n; i++) {
      graph[i] = [];
    }

    // Create one direction graph
    for (let edge of edges) {
      const source = edge[0];
      const dist = edge[1];
      graph[source].push(dist);
    }
    dfsNONS(graph, 0, -1, labels, ans);

    return ans;
  }

  const dfsNONS = (graph: number[][], child: number, parent: number, labels: string, ans: number[]): number[] => {
    // Size of 26 as english albeit size
    const count = Array(26).fill(0);
    for (let v of graph[child]) {
      const childCount = dfsNONS(graph, v, child, labels, ans);
      for (let i = 0; i < 26; i++) {
        count[i] += childCount[i];
      }
    }
    // Increase 1 to the current letter size
    count[labels[child].charCodeAt(0) - 97] = count[labels[child].charCodeAt(0) - 97] + 1;
    ans[child] = count[labels[child].charCodeAt(0) - 97];
    return count;
  }

  {
    const n = 7, edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], labels = "abaedcd";
    console.log('correct solution')
    console.log(runNONS(n, edges, labels));
  }

  {
    const n = 4, edges = [[0, 1], [1, 2], [0, 3]], labels = "bbbb";
    console.log('correct solution')
    console.log(runNONS(n, edges, labels));
  }

  {
    const n = 5, edges = [[0, 1], [0, 2], [1, 3], [0, 4]], labels = "aabab";
    console.log('correct solution')
    console.log(runNONS(n, edges, labels));
  }

  {
    const n = 7, edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], labels = "abaedca";
    console.log('correct solution')
    console.log(runNONS(n, edges, labels));
  }


}

