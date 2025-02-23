let a = document.querySelector("#btn1");
// a.addEventListener("mouseout",function(){
//   console.log("mouseout function is triggered!");
// })

b = document.querySelector("#inp1");

b.addEventListener("keypress",function(){
  console.log("keypress function is triggered!");
})

let div = document.querySelector("#scrollDiv");

div.addEventListener("scroll", function() {
  console.log("Div is being scrolled!");
});

window.addEventListener("load", function() {
  console.log("Page has fully loaded!");
});


let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",function(){
  btn2.style.backgroundColor = "green";
});


let para5 = document.querySelector("#para5");
let parat = document.querySelector("#parat")

parat.addEventListener("input",function(){
  let filteredText = parat.value.replace(/[^A-Za-z\s]/g, "");
  parat.value = filteredText;
  para5.innerText = filteredText;
})