const stu = {
  name: "Rahul",
  age: 23,
  eng: 98,
  math: 93,
  phy: 34,

  getavg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(avg);
    console.log(`rahul got ${this.eng} marks in english`);
  },
};

stu.getavg();

let a = 5;
try {
  console.log(a);
} catch {
  console.log("a is not defined.!");
  console.log(err);
}

const fun = (a, b) => {
  console.log(a + b);
};

fun(5, 9);

const sum = (a, b) => a * b;
console.log(sum(5, 8));

console.log("Hi there!");

setTimeout(() => {
  console.log("apna collage");
}, 1000);

console.log("welcome to ");

setInterval(() => {
  console.log("hello dear");
}, 2000);

const student = {
  name: "Rahul ",
  class: 12,
  prop: this,

  getname: function () {
    console.log(this);
    return this.name;
  },
  getmark: () => {
    console.log(this);
    return this.marks;
  },
};

console.log(student.getname());
console.log(student.getmark());

const sq = (n) => n * n;
console.log(sq(2));


let id = setInterval(()=>{
  console.log("hello World");
},2000);

setTimeout(() => {
  clearInterval(id);
  console.log("clear interval run : ");
}, 10000);