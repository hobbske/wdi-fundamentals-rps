function fizzbuzz(max) {

var x = 0;
while (x < max) {
    x += 1;
console.log(reaction(x));
}

function reaction(x) { 
    if (x % 3 === 0 && x % 5 === 0) {
        return "fizzbuzz";
    } else if (x % 3 === 0) {
        return "fizz";
    } else if (x % 5 === 0) {
        return "buzz";
    } else {
        return x;  
}
}
}
fizzbuzz(15);