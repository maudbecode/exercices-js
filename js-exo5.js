let Score= prompt('Quel est votre score?');
let result = ""
if (Score >= 90)  {
   result = "rang A"
}
else if (Score < 90 & Score > 50 ) {
    result = "rang B"
}
else if (Score <= 50) {
    result = "rang C"
}

alert(result);


