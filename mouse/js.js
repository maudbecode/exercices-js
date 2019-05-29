let hoverMe = document.getElementsByClassName("hoverMe");
let i = 0;
for (let i=0; i<hoverMe.length; i++) {
hoverMe[i].addEventListener('mouseover', function (){
    hoverMe[i].style.visibility="hidden";
});
}
let result = document.getElementById("reset");
result.addEventListener('click', function() {
    for (let i=0; i<hoverMe.length; i++) {
    hoverMe[i].style.visibility="visible";
    }
});

let x = document.getElementById("axe-x");
let y = document.getElementById("axe-y");
let move = document.getElementsByTagName("body");
move[0].addEventListener('mousemove', function(event) {
    x.innerHTML = "position 2";
    y.innerHTML = "position 3";
    x.innerHTML = event.x;
    y.innerHTML = event.y;
});


