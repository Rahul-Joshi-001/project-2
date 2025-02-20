console.dir(document.all);

document.all[8].innerText  = "Peter Parker";

let img = document.getElementById("mainImg");
console.log(img);

// img.src = "creation_3.jpeg"

console.dir(document.getElementById("description"));


let old = document.getElementsByClassName("oldImg");

for(let i = 0;i<old.length;i++){
    console.dir(old[i]);
}
for(let i = 0;i<old.length;i++){
    // old[i].src = "spiderman_img.png";
    console.log(`value of img no ${i} is changed`);
}

console.dir(document.getElementsByTagName("P"));

console.dir(document.querySelector('h1'));
console.dir(document.querySelector('#description'));
console.dir(document.querySelector('.oldImg'));

console.dir(document.querySelector('div a'));
console.dir(document.querySelectorAll('a'));

let para = document.querySelector("p");
console.dir(para);

console.dir(para.innerText);
console.dir(para.textContent);
console.dir(para.innerHTML);

// para.innerText = "rahul joshi";
// para.innerHTML = "Rahul <b> Joshi </b>"

let heading = document.querySelector("h1");

heading.innerHTML = `<u>${heading.innerText}</u>` 


let image = document.querySelector("img");
console.dir(image.getAttribute('id'))
image.setAttribute("id","spidermanimg");
console.dir(image.getAttribute('id'))

console.dir(image.style);

heading.style.color = "green";
heading.style.backgroundColor = "yellow";

let links = document.querySelectorAll(".box a");

// for(let i = 0;i<links.length;i++){
// links[i].style.color = "cyan";
// }

for(el of links){
    el.style.color = "cyan";
}


console.dir(heading.classList);

heading.classList.add("abc");
console.dir(heading.classList);

heading.classList.remove("jai");
console.dir(heading.classList);

console.dir(heading.classList.contains("jai")) ;

heading.classList.toggle("jai");
console.dir(heading.classList);
heading.classList.toggle("jai");
console.dir(heading.classList);

let h4 = document.querySelector("h4");
console.log(h4.parentElement);

let boxi = document.querySelector(".box");
console.log(boxi.children);
console.log(boxi.childElementCount); 

console.log(boxi.children[1].previousElementSibling);
console.log(boxi.children[0].nextElementSibling);


let newpara = document.createElement("p");  
newpara.innerText = "hello i am new at coding";
let body = document.querySelector("body");

body.appendChild(newpara);

let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "green";
boxi.appendChild(btn);


newpara.append(" haha lets see what u can do : ");
// newpara.append(btn);

boxi.prepend(newpara);


let btn2 = document.createElement("button");
btn2.innerText = "i am here...........";

let p = document.querySelector("p");

p.insertAdjacentElement("beforebegin",btn2);


//question.

