

/*           Unit 4 - Looping Exercise            */

var result = 1;
var max = 3;

while (result <= max) {
   
   if(result % 3 === 0 && result % 5 === 0)
       console.log('fizzbuzz');
    else if(result % 3 === 0) 
       console.log('fizz');
    else if(result % 5 === 0) {
       console.log('buzz');
    }else console.log(result);
result += 1;
}