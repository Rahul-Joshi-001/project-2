console.log("helo rahul nice to meet you");
console.log("this is java file ");
let a= 10;
let b=20;
console.log("sum is :",a+b);

//template literals. 
console.log(`the bill is : ${a+b} rupees`);

let age = 18;
console.log(age>=18);

if(a>5){
    console.log(a*5)
}

//question.

let size =  "M";

if(size == "XL"){
    console.log("price is 250");
}
else if(size == "L"){
    console.log("price is 200");
}
else if(size == "M"){
    console.log("price is 150");
}
else{
    console.log("price is 100");
}

//question

let marks= 23;

if(marks >33){
    if(marks >80){
        console.log ("you are outstanding ");
    }
    else{
        console.log("you are avg");
    }
}
else{
    console.log("you are fail");
}

//question
let str = "apple";

if(str[0] === "a" && str.length > 3){
    console.log("good string ");
}
else{
    console.log("not a good string");
}

//question

let day = 5;
switch(day){
    case 1 : console.log("monday");
    break;
    case 2 : console.log("tuesday");
    break;
    case 3 : console.log("wed");
    break;
    case 4 : console.log("thu");
    break;
    case 5 : console.log("Fri");
    break;
    case 6 : console.log("sat");
    break;
    case 7 : console.log("sun");
    break;
    default :console.log("entered wrong no");
}

// alert("SOMETHING IS WRONG!");
// console.error("this ms is error");
// console.warn("this is a warn");

// let name1 = prompt("Enter your name : ");
// let age1 = prompt("enter your age : ");
// let msg = name1 + " is "+age1 + " years old";
// alert(msg);

// console.log(`${name1} is ${age} years old`);

let no1 = 32;
 no1 = no1%10;
let no2 = 47852;
no2 = no2%10;

if(no1 === no2){
    console.log("it is right no ");
}




