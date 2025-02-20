for(let i=1;i<=5;i++){
    console.log("Hello World...!",i);
}
console.log("odd");
for(let i=1;i<=10;i+=2){
    console.log(i);
}
console.log("even");
for(let i=2;i<=10;i+=2){
    console.log(i);
}

console.log("table");
for(let i=1;i<=10;i++){
    console.log(5*i);
}
for(let i=1;i<=2;i++){
    for(let j=1;j<=2;j++){
        console.log(i,j);
    }
}

let n=1;
while(n<3){
    console.log("hello",n);
    n++;
}

// let fav = "avatar";
// let guess = prompt("guess fav movie");

// while((guess != fav) && (guess != "quit")){
//     console.log("wrong");
//     guess = prompt("wrong movie try again");
// }
// if(guess == fav){
//     console.log("congrats");
// }
// else{
//     console.log("You quit");
// }

let no = [[1,2,3,4,5,6],[12,13,14,15,16,17]];

console.log(no.length);
for(i=0;i<no.length;i++){
    console.log(i,no[i],no[i].length);
    for(let j=0;j<no[i].length;j++){
        console.log(`j= ${j}, ${no[i][j]}`);
}
}

console.log("for of loop : ");

let numbers = [12,13,14,15];

for(numbers of numbers){
    console.log(numbers);
}

let char = "Rahul";
for(char of char/*"apnacollage"*/ ){
    console.log(char);
}

console.log("nested for-of loop : ");
let num = [[1,2,3,4],[7,8,9,10]];
for(list of num){
    for(no of list){
        console.log(no);
    }
}















