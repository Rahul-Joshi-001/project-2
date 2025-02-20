let max = prompt("enter the max no you want : ");
const num = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the no : ");
count =1;
while(true){
    if(guess=="quit"){
        console.log("quit");
        break;
    }
    if(guess==num){
        console.log("you are right congrats.Random no was : ",num);
        console.log("you have taken ",count," attempts.");
        break;
    }else if(guess < num){
        guess = prompt("it is too small..Try again .enter the no again : ");

    }else{
        guess = prompt("your no is too big .enter the no again : ");
    }
    count++;
}


