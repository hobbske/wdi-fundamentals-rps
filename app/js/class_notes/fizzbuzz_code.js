var x = 22;
var result;
/* YOUR CODE HERE */
if(x % 3 === 0 && x % 5 === 0) {
    result = 'fizzbuzz';
}
else if(x % 5 === 0) {
    result = 'buzz';
}
else if(x % 3 === 0) {
    result = 'fizz';
}
else {
    result = x
}

/* This code worked, but I'm not sure if it is the most efficient way to type it */
