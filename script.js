"use strict";

const addButton = document.querySelector(".add");
const taskList = document.querySelector(".taskList");
const inputElem = document.querySelector("input");

let tasks;
if (!localStorage.getItem("todo")) {
  tasks = [];
} else {
  tasks = getTasks();
}

//Create Li Tag
function createTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  li.innerHTML += ` <span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>`;
  taskList.appendChild(li);
  return li;
}

//save tasks in localStorage
function saveTasks(text) {
  tasks.push(text);
  localStorage.setItem("todo", tasks);
}

//get tasks from localStorage
function getTasks() {
  return localStorage.getItem("todo").split(",");
}

//show localStorage items in ul
function showTasks() {
  for (let taskText of getTasks()) {
    createTask(taskText);
  }
}

window.addEventListener("load", showTasks);

//Insert input value to li textContent then append li to ul
addButton.addEventListener("click", () => {
  let inputValue = inputElem.value;
  if (inputValue === "") {
    alert("Please insert a task!");
  } else {
    createTask(inputValue);
    saveTasks(inputValue);
    inputElem.value = "";
  }
});

//remove task or change the status of task to done
taskList.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    let target = e.target.parentElement.parentElement;
    target.style = "display:none";
    tasks.splice(tasks.indexOf(target.textContent), 1);
    localStorage.setItem("todo", tasks);
  }
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});
