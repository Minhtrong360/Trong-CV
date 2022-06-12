const x = 5;
const y = 5;
const z = 5;
let t = String(`${x}-${y}-${z}`);
console.log(t);
let a = [
  [0, 1, 2],
  [5, 10],
  [2, 4, 6]
];

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < a[i].length; j++) {
    console.log(a[i][j]);
  }
}
