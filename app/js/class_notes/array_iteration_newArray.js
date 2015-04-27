/* Each value in newArray is the value of its corresponding element in oldArray, plus 5? ([1, 2, 3] becomes [6, 7, 8]) */

var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];

for (i = 0; i < oldArray.length; i += 1) {
    newArray.push(oldArray[i] + 5);
}

/*  Each value in newArray is the square of the value of its corresponding element in oldArray? ([1, 2, 3] becomes [1, 4, 9])  */

var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];

for (i = 0; i < oldArray.length; i += 1) {
    newArray.push(oldArray[i] * oldArray[i]);
}

/*  Every odd-indexed value in newArray is double its corresponding element in oldArray, while every even-indexed value is unchanged? ([3, 4, 5, 2, 6] becomes [3, 8, 5, 4, 6])   */

var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];

for (i = 0; i < oldArray.length; i += 1) {
        if(i % 2) {
        newArray.push(oldArray[i] * 2);
    
    }else {
        newArray.push(oldArray[i]);
    }
}

/*  newArray is the exact mirror image of oldArray? ([1, 2, 3] becomes [3, 2, 1])  */

var oldArray = [12, 45, 6, 23, 19, 20, 20, 15, 30, 42];
var newArray = [];

for (i = 1; i <= oldArray.length; i += 1) {
        var mirror = (oldArray.length - i);
        newArray.push(oldArray[mirror]);
    }
