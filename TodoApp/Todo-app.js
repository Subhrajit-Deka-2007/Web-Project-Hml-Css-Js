let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");



btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
    item.classList.add("list");
  ul.appendChild(item);
  console.log(inp.value);

  let deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  // We can alo give class to this delete button
  deletebtn.classList.add("delete");

  item.appendChild(deletebtn);

  inp.value = ""; // reseting the value after enterting the task
});

ul.addEventListener("click", function (event) {
    /* Solution for the problem */
    console.log(event.target);
    /* event.target tells which things got pressed because of which the required event got triggered. This tells on pressing what thing it triggered the event   */
    console.log("button click");
    console.dir(event.target);
    console.dir(event.target.nodeName);
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Item deleted");
    }
});





// let delBtns = document.querySelector(".delete");
// for (delbt of delBtns) {
//   delbt.addEventListener("click", function () {
//     /* we are accesiing delete button which is the child of the list so we have to do delete that list element */
//     let parent = this.parentElement;
//     // this means deletebtn and we are acceessing its parent
//     parent.remove();
//   });
// }
/* Now problem when we add new buttons the functionality when we press the delete button doesnot get deleted .  Reasons : the eventlistener we add that work for the elements that is already existed in the page it doesnot work for new elements that is added to malke it for new elements also for that we have to use event delegation (which uses bubbling property ).If we want that for childe element event get trigerred for that we write that trigger for our parent .Instead of adding that thing to child we will add that thing to parent (as bubbling effect will work) Either we can add event delgation on ul or li as they are the parents of delete button  */