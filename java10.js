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
    console.log(this);
});

let btn3 = document.querySelector("#btn3");


btn3.addEventListener("click", function(){
    console.log(this);
});

function changecolor(){
    this.style.backgroundColor = "green";
    console.log(this);
}
btn1.addEventListener("click",changecolor);
btn2.addEventListener("click",changecolor);
btn3.addEventListener("click",changecolor);


let input = document.querySelector("input");

input.addEventListener("keydown",function(){
    console.log("key was pressed");
});

input.addEventListener("keyup",function(){
    
    console.log("key was released !");
})

let inp = document.querySelector("#inp");

inp.addEventListener("keydown",function(event){
    console.log("code = ",event.code);
    if(event.code == "ArrowUp"){
        console.log("character moves upward");
    }
    else if(event.code == "ArrowDown"){
        console.log("character moves Down");
    }
    else if(event.code == "ArrowLeft"){
        console.log("character moves left");
    }
    else if(event.code == "ArrowRight"){
        console.log("character moves Right");
    }

    //can be done for keys but have to do keyU keyL etc...in == 
})


let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let inpf = document.querySelector("#inpf");
    console.log("username : ",inpf.value);
    let inpp = document.querySelector("#inpp");
    console.log("password : ",inpp.value);

    alert(`hi ${inpf.value} your password is set to ${inpp.value} .`)
})


let text = document.querySelector("#text");
let paraa = document.querySelector("#para");


text.addEventListener("input",function(){
console.log(text.value);
paraa.innerText = text.value;
} );

