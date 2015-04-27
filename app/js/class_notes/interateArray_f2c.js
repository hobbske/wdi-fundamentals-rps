var tempsInF = [100, 72, 88, 15, 25, 32];
var tempsInC = [];

function farhToCelcius(degrees) {
    return ((degrees - 32) * (5/9));

}

for (var i = 0; i < tempsInF.length; i += 1) {
    tempsInC.push(farhToCelcius(tempsInF[i]));
}



tempsInC;
