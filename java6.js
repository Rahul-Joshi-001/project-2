function hello(){
    console.log("hello world");
}
hello();

function dice(){
    let num = Math.floor(Math.random() * 6 + 1);
    console.log(num);
}

dice();

function namee(name){
    console.log(name);
}

namee("rahul");
namee("aman ");

function avg(a,b,c){
    console.log((a+b+c)/3);
}
avg(2,6,4);

function table(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}

table(5);

function sum(n){
    let sumo= 0;
    for(let i=1;i<=n;i++){
        sumo = sumo + i;
    }
    return sumo;
}

console.log(sum(5));
console.log(sum(10 ));

let str = ["hee","hello","hemlo","yoyo"];

function con(str){
    let all = ""
    for(let i=0;i<str.length;i++){
        all += str[i];
    }
    return all;
}
console.log(con(str));

let esum  = function(){
    console.log("hello");
};

esum();

function multi(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multi(greet,5);





function func(req){
    if(req == "odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(req == "even"){
        let even = function(n){
            console.log((n%2==0));
        }
        return even;
    }else{
        console.log("wrong req.!");
    }
}

let re = "odd"
let fu = func(re);
fu(3);


const cal = {
    sum: function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    },
};

console.log(cal.sum(3,5));
console.log(cal.sub(3,5));
console.log(cal.mul(3,5));

