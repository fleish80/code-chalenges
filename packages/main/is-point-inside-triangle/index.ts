interface Point {
  x: number,
  y: number
}

export const isPointInsideTriangle = (p1: Point, p2: Point, p3: Point, p: Point): boolean => {
  const area = getArea(p1, p2, p3);
  const area1 = getArea(p2, p3, p);
  const area2 = getArea(p1, p3, p);
  const area3 = getArea(p1, p2, p);
  return  area1 + area2 + area3 === area;
}

const getArea = (p1: Point, p2: Point, p3: Point): number => {
  return Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
}

console.log(isPointInsideTriangle({x:0, y:0}, {x: 20, y:0}, {x: 10, y:30}, {x:10, y:15}));
