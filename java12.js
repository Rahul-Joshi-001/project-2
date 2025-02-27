//async function 
async function greet(){
    // throw("weak connection!")
    return "hello!";
}

greet().then((data)=>{
    console.log("promise was resoved ");
    console.log(data);
})
.catch((err)=>{
    console.log("promise was rejected");
    console.log("error was : ",err);
})

let demo = async ()=>{return "omfo"};
console.log(demo());


//await function 

function getno(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let no = Math.floor(Math.random()*10) +1;
            console.log(no);
            resolve(no);
        },1000)
    });
}

// async function demoo(){
//    await getno();
//    await getno();
//    await getno();
//    await getno();
//    await getno();
//    getno();
// }
// demoo();


// awit function and promise rejection !

let h1 = document.querySelector("h1");

function change(color, delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*5) +1;
            if(num>3){
                reject("denied");
            }
            h1.style.color = color;
            console.log(`current colour is ${color}.`)
            resolve("color changed");
          }, delay);
    });
}

//await function 

// async function changecolor(){
//     await change("red",1000);
//     await change("green",1000);
//     await change("blue",1000);
//     await change("pink",1000);
//     await change("cyan",1000);
//     await change("brown",1000);

//     let a = 5;
//     console.log(a)
//     console.log(`the new no is : ${a+5}`);
// }
// changecolor();

// error handling in it 

async function changecolor(){
    try{
    await change("red",1000);
    await change("green",1000);
    await change("blue",1000);
    await change("pink",1000);
    await change("cyan",1000);
    await change("brown",1000);
}catch(err){
    console.log("error found ! so stops at here");
    console.log(err);
}
    let a = 5;
    console.log(a)
    console.log(`the new no is : ${a+5}`);
}
changecolor();

// api = application progarmming interface.

let jsondata= '{"fact":"Unlike other cats, lions have a tuft of hair at the end of their tails.","length":71}'

console.log(jsondata);

let newdata = JSON.parse(jsondata);
console.log(newdata);
console.log(newdata.fact);

//AJAX  - asynchronous javascript and XML.

//first req

let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((Response)=>{
//     console.log(Response);
//     return Response.json();
// })
// .then((data)=>{
//     console.log("data one is : ",data);
//     return fetch(url); // using again ftech to again get the new data 
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data 2 is : ",data2.fact)
// })
// .catch((err)=>{
//     console.log("error is -  ",err)
// })

async function getfacts(){
    try{
        let res =await fetch(url);
        let data = await res.json();
        console.log("your data through async is : ",data.fact);

        //chaining through it 
        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("your data through async is : ",data2.fact);

    }
    catch(err){
        console.log(err)
    }
    console.log("end of the topic here");
}
getfacts();