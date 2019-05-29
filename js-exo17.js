let min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
console.log(min);
let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log(max);
let add = min + max
console.log(add);

let floatBateau = 10.4;
let couleBateau = Math.ceil(10.4);
let voleBateau = Math.floor(10.4);

console.log(couleBateau);
console.log(voleBateau);


function random (min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
random(min, max);
console.log(random(50,100));

function randomizer (min, max) {
    return Math.floor(Math.random()* (max-min)) + min;
}
randomizer (min, max);
console.log(randomizer(0,10));

console.log(Math.floor((Math.random() * 1) + 1));

function getRandom() {
    return Math.round(Math.random())
  }
console.log(getRandom());

let perso = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
let randomItem = perso[Math.floor(Math.random()*perso.length)];
console.log(randomItem);
