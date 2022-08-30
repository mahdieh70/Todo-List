"use strict";

const addButton = document.querySelector(".add");
const taskList = document.querySelector(".taskList");
const inputElem = document.querySelector("input");

//Create Li Tag
function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}

//Insert input value to li textContent then append li to ul 
addButton.addEventListener("click", () => {
  let inputValue = inputElem.value;
  if (inputValue === "") {
    alert("Please insert a task!");
  } else {
    let task = createTask(inputValue);
    task.innerHTML += ` <span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>`;
    taskList.appendChild(task);
    inputElem.value = "";
  }
});

//remove task or change the status of task to done
taskList.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    e.target.parentElement.parentElement.style = "display:none";
  }
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});
