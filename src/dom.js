import { task } from "./task";
let taskArray = [];
loadLocal();

function clearContent() {
  let content = document.querySelector(".content");
  content.innerHTML = " ";
}

function homeContent() {
  let content = document.querySelector(".content");
  let homePage = document.createElement("div");
  homePage.classList.add("home-page", "layout");
  content.appendChild(homePage);

  let header = document.createElement("div");
  header.id = "home-header";
  header.textContent = "Welcome User!";
  homePage.appendChild(header);
  console.log("home");
  
  let body = document.createElement("div");
  body.id = "home-body";
  body.textContent = "Here are your tasks for the day: ";
  homePage.appendChild(body);
}

function toDoForms() {
  let toDoForm = document.createElement("form");

  let newTaskContent = document.createElement("div");
  newTaskContent.classList.add("task-content");
  
  let toDoFormLabel = document.createElement("label");
  toDoFormLabel.textContent = "New Task: ";
  newTaskContent.appendChild(toDoFormLabel);
  let toDoFormInput = document.createElement("input");
  toDoFormInput.id = "todo-input";
  toDoFormInput.type = "text";
  toDoFormInput.name = "title";
  newTaskContent.appendChild(toDoFormInput);
  
  let priorityContent = document.createElement("div");
  priorityContent.classList.add("priority-content");
  
  let priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority: ";
  priorityContent.appendChild(priorityLabel);
  let priorityInput = document.createElement("select");
  priorityInput.id = "priority-input";
  let option1 = document.createElement("option");
  option1.textContent = "High";
  priorityInput.appendChild(option1);
  let option2 = document.createElement("option");
  option2.textContent = "Medium";
  priorityInput.appendChild(option2);
  let option3 = document.createElement("option");
  option3.textContent = "Low";
  priorityInput.appendChild(option3);
  priorityContent.appendChild(priorityInput);
  
  let dateDueContent = document.createElement("div");
  dateDueContent.classList.add("date-content");
  let dateDueLbl = document.createElement("label");
  dateDueLbl.textContent = "Date Due: ";
  dateDueContent.appendChild(dateDueLbl);
  let dateDueInput = document.createElement("input");
  dateDueInput.id = "date-due-input";
  dateDueInput.type = "date";
  dateDueContent.appendChild(dateDueInput);
  let dateDueSubmit = document.createElement("button");
  dateDueSubmit.type = "submit";
  dateDueSubmit.textContent = "Submit";
  dateDueContent.appendChild(dateDueSubmit);
  
  toDoForm.appendChild(newTaskContent);
  toDoForm.appendChild(priorityContent);
  toDoForm.appendChild(dateDueContent);
  console.log("form");
  toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let taskValue = toDoFormInput.value;
    let priorityValue = priorityInput.value;
    let dateValue = dateDueInput.value;
    let newTask = new task(taskValue, priorityValue, dateValue);
    taskArray.push(newTask);
    saveLocal();
    displayTask(taskArray);
    console.log(taskArray);
  });
  return toDoForm;
}

function displayTask(taskArray) {
  let removeContainer = document.querySelector(".task-list");
  if (removeContainer !== null) {
    removeContainer.remove();
  }
  let taskParentContainer = document.createElement("div");
  taskParentContainer.classList.add("task-list");
  let content = document.querySelector(".toDo-content");
  for (let i = 0; i < taskArray.length; i++) {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    let toDo = taskArray[i];
    let taskTitle = document.createElement("p");
    taskTitle.textContent = toDo.title;
    let taskPriority = document.createElement("span");
    taskPriority.textContent = toDo.priority;
    
    let taskDate = document.createElement("span");
    taskDate.textContent = toDo.date;
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskPriority);
    taskContainer.appendChild(taskDate);
    taskParentContainer.appendChild(taskContainer);
    
    switch (toDo.priority) {
      case "High":
        taskContainer.classList.add("high-background");
        break;
        case "Medium":
          taskContainer.classList.add("medium-background");
        break;
      case "Low":
        taskContainer.classList.add("low-background");
        break;
      }
    }
    content.appendChild(taskParentContainer);
  }
  
  function saveLocal(){
  let stringedArray = JSON.stringify(taskArray);
    localStorage.setItem("tasks", stringedArray);
}

function loadLocal(){
  let saved = localStorage.getItem("tasks");
  if (saved) {
    taskArray = JSON.parse(saved);
  }
}

function toDoContent() {
  let content = document.querySelector(".content");
  let toDo = document.createElement("div");
  toDo.classList.add("toDo-content", "layout");
  content.appendChild(toDo);
  let form = toDoForms();
  toDo.appendChild(form);
  if (taskArray.length > 0) {
  displayTask(taskArray);
}
}

function addTodayContent() {
  let content = document.querySelector(".content");
  let todayContent = document.createElement("div");
  todayContent.classList.add("today-content", "layout");
  content.appendChild(todayContent);
  console.log("today");
}

function addProjectContent() {
  let content = document.querySelector(".content");
  let projectContent = document.createElement("div");
  projectContent.classList.add("project-content", "layout");
  content.appendChild(projectContent);
  console.log("projects");
}

export {
  homeContent,
  toDoContent,
  addTodayContent,
  addProjectContent,
  clearContent,
};
