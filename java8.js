let arr = [1,2,3,4 ];

arr.forEach( (el) => {
    console.log(el);
})

let student = [
    {
        name : "Rahul Joshi",
        marks : 98,
    },
    {
        name : "low Joshi",
        marks : 98.5,
    },
    {
        name : "rohan Joshi",
        marks : 98.7,
    }];

student.forEach((el)=>{
    console.log(el.marks);
});

let newarr = arr.map((el)=>{
    return el*2;
})

console.log(newarr);
let gpa = student.map((el)=>{
    return el.marks/10;
})
console.log(gpa);

let even = arr.filter((el) =>{
    return el%2==0;
})
console.log(even);

console.log(arr.every(el => el < 5));

console.log(arr.reduce((res,el) => res+el  ))

let final = arr.reduce((max,el) => {
    if(el>max){
        return el;
    }else{
        return max;
    }
})

console.log(final);

let number = [10,2,30,40,100];
let sum = number.every(el => el%10==0);
console.log(sum);


function getmin(number){
let min = number.reduce((res,el)=>{
    if(el<res){
        return el;
    }else{
        return res;
    }
});
return min;
}
console.log(getmin(number));

function sumo(a,b=3){
    return a+b;
}
console.log(sumo(2));

console.log(Math.min(...number));

let names = "Rahul Joshi";
console.log(...names);

let omfo = [...number,6];
console.log(omfo);

const data = {
    gamil : "Rahul",
    age : 25, 
};

const datacpy = {...data,id : 420,country : "india"};
console.log(datacpy);

function hehe(a,b,c,d){
    console.log(arguments);
}
hehe(1,2,3,4,5,6,7 ); 

function hero(...args){
    console.log(args.reduce((add,el) => add+el));
}
hero(10,20,30,40); 

function minim(...mini){
    return mini.reduce((min,el) => {
        if(min>el){
            return el;
        }else{
            return min;
        }
    })
}
console.log(minim(1,2,3,4,5,6,));

let nam = ["Rahul","Gaurav","Aman","Priyanshu"];
let [winner,loser,...others] = nam;
console.log(winner);
console.log(loser); 
console.log(others);   

const studen  ={
    name : "Rahul Joshi",
    age : 14,
    class : 5,
    subject : ["hindi","english","math"],
    username : "rahul!123",
    pass : "abcd",
};

let {username, pass ,city = "mumbai" } = studen;
console.log(username);
console.log(pass);
console.log(city);
 


