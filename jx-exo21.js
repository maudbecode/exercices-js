let ask = prompt('quel est le prix?');
let count= "";
let min = 20;
let max = 80;

function random() {
let aleatoire = Math.floor(Math.random() * (max-min) + min);

}

while (ask != 45) {
    if (ask < 45) {
    alert("c'est plus");
    } else if (ask > 45) {
    alert("c'est moins");
    } else {
    console.log("c'est juste");
    }
}