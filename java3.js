//string properties.....
let msg = "         hello             ";
console.log(msg);
console.log(msg.trim());

let str = "Hello Rahul Joshi";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
 
console.log(str.indexOf("Rahul"));
console.log(str.indexOf("Joshi"));

console.log(msg.toUpperCase().trim());

console.log(str.slice(1,4))

console.log(str.replace("l","o"));
console.log(str.replace("Hello","hii")); 

console.log(str.repeat(3));


//aray

let students = ["Aman" , "Rahul" , "Priyanka"];
console.log(students);
console.log(students[1]);


console.log(students.push("toyota"));
console.log(students);

console.log(students.unshift("maruti"));
console.log(students);

console.log(students.pop());
console.log(students);

console.log(students.shift());
console.log(students);

let color = ["blue","green","yellow"];


console.log(color.concat(students));
console.log(color.reverse());

console.log(color.slice(-2));

let colors = ["blue","green","yellow","orange","yellow","black"];


console.log(colors.splice(1,0,"golden"));
console.log(colors);


let ar = [1,45,32,12,78,90,76,45];
console.log(ar.sort());

let arr3 = [[1,2],[3,4],[5,6]];
console.log(arr3);

let tic=[["X",null, 0],[null ,"X",null ],[0,null ,"X"]];
console.log(tic);