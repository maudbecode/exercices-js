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

let vites = function (distance, temps) {
    return (distance /temps);
}
 
let result = vites (100, 2); 
alert(result + "km/h");
