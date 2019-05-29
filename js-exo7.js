let sous = function (a, b) {
    return a - b;
}
let div = function (a, b) {
    return a / b;
}
let mult = function (a, b) {
    return a * b;
}

let pourc = function (valeur, pourcentage) {
    return (pourcentage /100) * valeur;
}
    
let result = pourc (10, 50); 
alert(result);
