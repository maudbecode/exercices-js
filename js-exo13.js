let distance = [1, 2, 3, 4, 5, 6, 7, 8, 9];


total= 0;
for (i=0; i<9; i++) {
total= total + distance[i]++;
console.log(total);
}