let para = document.createElement("p");
para.innerText = "hey i am red..";
para.classList.add("red");

let body = document.querySelector("body");
body.append(para);

let h3 = document.createElement("h3");
h3.innerText = "hey i am blue ";
h3.classList.add("blue");

document.querySelector("body").append(h3);

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "i am in a div";
para2.innerText = "MEE TOO !";


div.append(h1);
div.append(para2)

div.classList.add("box");

document.querySelector("body").prepend(div); // add it in first 

let input = document.createElement("input");
input.placeholder = "give me some value ";
let button = document.createElement("button");
button.innerText = "click me !"
document.querySelector("body").append(input);
document.querySelector("body").append(button);

input.placeholder = "username";
button.setAttribute("id","btn");

let btn2 = document.querySelector("#btn");
btn2.classList.add("hehe");

let h11 = document.createElement("h1");
h11.innerText = "DOM Practice";
h11.style.textDecoration = "underline";
h11.style.color = "purple";

document.querySelector("body").append(h11);

let pa = document.createElement("p");
pa.innerHTML = "Apna college <b> Delta </b> practice";
document.querySelector("body").append(pa);
