/* increase x by 10 once for every element in the array. */

var x = 5;
function tenTimes(x) {
    return x * 10;
}

var oneToTen = [1,2,3,4,5,6,7,8,9,10];

for (i = 0; i < oneToTen.length; i += 1) {
    var newArray = oneToTen.map(tenTimes);
}

/* Create an array of masses in kilograms, and use it to produce an array of those same masses in pounds (hint: it's roughly 2.2 pounds to the kilogram). */

var kiloMassArray = [100,200,300,400,500];
var lbMassArray = [];

function lbConvert(i) {
    return i * 2.20462;
}
    lbMassArray.push(kiloMassArray.map(lbConvert));

/* create an array of strings, and use an iterator to produce an array containing the length of each string. */

var santaDeer = ["Dasher","Dancer","Prancer","Vixen","Comet","Cupid","Donner","Blitzen","Rudolph"];
var stringCntArray = [];

for (i = 0; i < santaDeer.length; i += 1) {
    stringCntArray.push(santaDeer[i].length);
}

/*  */