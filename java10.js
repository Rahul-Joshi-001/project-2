let btn = document.querySelector("#btn1");
console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
// };

function say (){
    console.log("hello");
}
btn.onclick = say;

btn.onmouseenter = function(){
    console.log("you hover a button");
};


function say2 (){
    console.log("you are using event listner in this code !");

    
}

let btn2 = document.querySelector("#btn2");

// btn2.addEventListener("click",say);
// btn2.addEventListener("click",say2);
btn2.addEventListener("dblclick",function(){
    console.log("you double clicked the button.!");
});

let para = document.querySelector("p");

para.addEventListener("click",function(){
    console.log("para was clicked.!");
})