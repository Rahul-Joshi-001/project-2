
let button = document.querySelector("button");
let para = document.querySelector("#para");

let btn2 = document.querySelector("#btn2");
let image = document.querySelector("#image1");

button.addEventListener("click",async()=>{
        let fact = await facts();
        para.innerText = fact;
})

btn2.addEventListener("click",async()=>{
    let img = await getimage();
    image.setAttribute("src",img);
})

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random"

async function facts() {
    try {
        let res = await axios.get(url);
        // console.log(res.data.fact);
        return res.data.fact;
    } catch (e) {
        console.log("Error is:", e);
        return "no fact found!"
    }
}

async function getimage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        return "/"
    }
}


//Sending Headers....

let url3 = "https://icanhazdadjoke.com/"

async function jokes(){
    try{
        const any_name = {headers: {Accept :"application/json" }};
        let res = await axios.get(url3,any_name);
        console.log(res);
    }
    catch(e){
        console.log("error is :- ",e);
    }
}

//updating query string 

let url4 = "http://universities.hipolabs.com/search?name="

let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
      let collages =await getcollage(country);
      show(collages);
    });

function show(collages){
let result = document.querySelector("#result");
result.innerText = "";

    for(col of collages){

        let li = document.createElement("li");
        li.innerText = col.name;
        result.appendChild(li);
    }
}
async function getcollage(country){
    try{
        let res = await axios.get(url4+country);
        return res.data;
    }
    catch(error){
        console.log("error is :- ",error)
        return [];
    }
}

