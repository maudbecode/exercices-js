for (i =0; i<=100; i++) {
    console.log(i);  
function Score(i) {
if (i >90) {
    return "est le grade A";
}
else if (i >80) {
    return "est le grade B";
}
else if(i >70) {
    return "est le grade C";
}
else if (i >65) {
    return "est le grade D";
}
else {
    return "est le grade F";
}
}
console.log(Score(i));
}

Score(i);
