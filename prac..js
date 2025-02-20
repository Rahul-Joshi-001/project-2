let student = {
  name :"rahul",
  course : "btch",
};
let student2 = {
  roll : 23,
  age : 17,
  name : "rohan",
};

const margeobject = (student,student2) => {
  return{...student,...student2};
};

console.log(margeobject(student,student2));