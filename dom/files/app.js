let test = document.body;
test.classList.remove("bg-aqua");
test.classList.add("bg-olive");

let para = document.getElementById("first-paragraph");
para.classList.remove("bg-lime");
para.classList.remove("gray");
para.classList.add("aqua");

let change = document.querySelectorAll(".bg-silver"); 
for (let i = 0; i < change.length; i++) {
    change[i].classList.remove("bg-silver");
    change[i].classList.add("bg-teal");
}

let modif = document.querySelectorAll("blockquote"); 
for (let i = 0; i < modif.length; i++) {
    modif[i].classList.add("bg-white");
}

let tab = document.querySelector("table"); 
    tab.classList.add("bg-purple");

let select = document.querySelectorAll(".container"); 
for (let i = 0; i < change.length; i++) {
    select[i].classList.add("shadow");
}

let propri = document.querySelectorAll("pre"); 
for (let i = 0; i < propri.length; i++) {
   propri[i].style.color= "green";
   propri[i].style.backgroundColor= "grey";
   propri[i].style.borderTop= "3px solid red";
   propri[i].style.borderBottom= "3px solid red";
}

let titre = document.querySelector("h3").innerHTML = "<em>Itelic title ! yeah !</em>";

let hh = document.querySelector("h2").innerHTML = "<strong>HTML doens't work !</strong>";

let uu = document.querySelector("ul").innerHTML += "<li>Mon meilleur ami est <a href='http://www.google.com'>Google</a></li>";
let ll = document.querySelector("ul li a");
ll.style.color= "red";
