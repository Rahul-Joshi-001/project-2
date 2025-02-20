let student = {
    name : "Rahul",
    age : 23,
    roll_no : 34,
    marks : 89.4,
};
console.log(student); 

const post = {
    username : "@rahuljoshi",
    content : "This is my #first post",
    likes : 150,
    reposts : 5,
    tags : ["@apnacollage","delta"],
};

console.log(student["name"]);
console.log(student.age);

post.likes = 170;
student.gender = "Male";

const classinfo = {
    aman : {
        grade : "A",
        city:  "delhi",
    },
    Rahul : {
        grade : "B",
        city : "null",
    },
    rohit : {
        grade : "C",
        city : "UK",
    },
};

console.log(classinfo);
console.log(classinfo.aman.city);

const studentinfo = [
    {
        name : "rahul",
        grade : "A",
    },
    {
        name : "rahul",
        grade : "A",
    },
    {
        name : "rahul",
        grade : "A",
    },
];

console.log(studentinfo);

console.log(2*Math.PI);

console.log(Math.abs(-12.5));
console.log(Math.abs(2.5));


console.log(Math.pow(2,3));


console.log(Math.floor(2.5));

console.log(Math.ceil(2.5));

console.log(Math.random());


let num = Math.random();
num = num*5;
num= Math.floor(num);
num = num+1;

console.log(num);