let list = [];
let task = parseInt(prompt("Enter the task number that you want to perform "));

/* parseInt() convert string into integer as when we give input to prompt it's get cnverted into string */
console.log(task);
while (true) {
    console.log(task);
  if (task == 4) {
      console.log(" You exited the app ");
      break;
   }
    if (task == 1) {
        if (list.length == 0) {
            console.log("You need to enter some task the list is empty ");

        }
        else {
            console.log("=====================");
            for (let i = 0; i < list.length; i++)
                console.log(list[i]);
            console.log("======================");
        }
    }
    else if (task == 2) {
        let input = prompt("Enter the name of the task that you want to add");
        list.push(input);
        console.log("Task added");
    }
    else if (task == 3) {
        if (list.length == 0) alert("List is already empty ");
        else {
            console.log(list);
            let idx = prompt("Enter the index of the task that you want to delete from the current list");
            list.splice(idx, 1);
        }
    }
    task = prompt("  Enter the task number that you want to perform ");
   }
