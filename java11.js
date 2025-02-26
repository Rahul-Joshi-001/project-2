function one() {
  return 1;
}
function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}
three();

let h1 = document.querySelector("h1");

// function change(color, delay, nextcolor) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextcolor) nextcolor();
//   }, delay);
// }

// change("red", 1000, () => {
//   change("orange", 1000, () => {
//     change("cyan", 1000, () => {
//       change("brown", 1000, () => {
//         change("green", 1000, () => {
//           change("pink", 1000);
//         });
//       });
//     });
//   });
// });

// function savedata(data, succes, failure) {
//   let internet_speed = Math.floor(Math.random() * 10) + 1;
//   if (internet_speed > 4) {
//     succes();
//   } else {
//     failure();
//   }
// }

// savedata(
//     "rahul",
//   () => {
//     console.log("success : your data is saved successfully ");
//     savedata("hello world",
//         ()=>{console.log("success 2 : ")},
//         ()=>{console.log("failure")})
//   },
//   () => {
//     console.log("failure : your data is not saved!");
//   }
// );

// console.log("promise");


// using promise funciton - 
function savedata(data) {
  return new Promise((resolve, reject) => {
    let internet_speed = Math.floor(Math.random() * 10) + 1;
    if (internet_speed > 4) {
      resolve("data was saved");
    } else {
      reject(" weak connection!");
    }
  });
}

// console.log(savedata("apna collgage"));

savedata("rahul")
  .then((result) => {
    console.log("data 1 is saved");
    console.log("result of promise -", result);
    return savedata("aman");
  })
  .then((result) => {
    console.log("data 2 is also saved ");
    console.log("result of promise -", result);

    return savedata("meean");
  })
  .then((result) => {
    console.log("data 3 was also saved");
    console.log("result of promise -", result);
  })
  .catch((error) => {
    console.log("your call is rejected");
    console.log("result of error is : ", error);
  });

//color change function using promisies 

  function change(color, delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
          }, delay);
    });
}

change("blue",1000)
.then(()=>{
    console.log("blue is the color chnaged");
    return change("red",1000);
})
.then(()=>{
    console.log("red is the color chnaged");
    return change("orange",1000);
})
.then(()=>{
    console.log("orange is the color chnaged");
    return change("green",1000)
})
.then(()=>{
    console.log("green is the color chnaged");
    return change("cyan",1000);
})
.then(()=>{
    console.log("cyan was the last color changed");
})