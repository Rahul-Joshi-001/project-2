let todo = [];

let req = prompt("please enter your request");
console.log(req);

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("______________")
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("______________")

    }
    else if(req == "add"){
        let task = prompt("please enter your task : ");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let index = prompt("please enter the index you want to delete ")
        todo.splice(index,1);
        console.log("task deleted.!");
    }
    else{
        console.log("wrong req entered : ");
    }
    req = prompt("please enter your request");

}