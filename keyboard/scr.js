let keyb = document.getElementById("character");
let fup = document.getElementById("up");
let fdown = document.getElementById("down");
let fleft = document.getElementById("left");
let fright = document.getElementById("right");
keyb.addEventListener("keydown", function(event) {
    console.log(event.key);
    switch (event.key) {
        case "0":
        keyb.style.backgroundColor="red";
        break;
        case "1":
        keyb.style.backgroundColor="blue";
        break;
        case "2":
        keyb.style.backgroundColor="yellow";
        break;
        case "3":
        keyb.style.backgroundColor="purple";
        break;
        case "4":
        keyb.style.backgroundColor="orange";
        break;
        case "5":
        keyb.style.backgroundColor="green";
        break;
        case "6":
        keyb.style.backgroundColor="grey";
        break;
        case "7":
        keyb.style.backgroundColor="brown";
        break;
        case "8":
        keyb.style.backgroundColor="black";
        break;
        case "9":
        keyb.style.backgroundColor="pink";
        break;
    }
   switch (event.key) {
        case "ArrowUp":
        up.style.add="hightlight";
        break;
        case "ArrowDown":
        fdown.style.add="hightlight";
        break;
        case "ArrowLeft":
        fleft.style.add="hightlight";
        break;
        case "ArrowRight":
        fright.style.add="hightlight";
        break;
   }
    });
