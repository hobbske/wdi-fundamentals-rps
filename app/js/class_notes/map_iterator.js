function square(x) {
  console.log(x * x);
  return x * x;
}

function cube(x) {
  console.log(x * x * x);
  return x * x * x;
}

var oneToTen = [1,2,3,4,5,6,7,8,9,10];

console.log("This is the array squared");

var resultingArraySquare = oneToTen.map(square);

console.log("This is the array cubed");

var resultingArrayCube = oneToTen.map(cube);
