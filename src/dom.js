function homeContent() {
  let content = document.querySelector(".content");
  let homePage = document.createElement("div");
  homePage.classList.add("home-page");
  content.appendChild(homePage);
  console.log("home");
}

function addTaskContent() {
  let content = document.querySelector(".content");
  let taskContent = document.createElement("div");
  taskContent.classList.add("task-content");
  content.appendChild(taskContent);
  console.log("add task");
}

function toDoContent() {
  let content = document.querySelector(".content");
  let toDo = document.createElement("div");
  toDo.classList.add("toDo-content");
  content.appendChild(toDo);
  console.log("todo");
}

function checkListContent() {
  let content = document.querySelector(".content");
  let checkList = document.createElement("div");
  checkList.classList.add("checklist-content");
  content.appendChild(checkList);
  console.log("checklist");
}

function addTodayContent() {
  let content = document.querySelector(".content");
  let todayContent = document.createElement("div");
  todayContent.classList.add("today-content");
  content.appendChild(todayContent);
  console.log("today");
}

function addProjectContent(){
    let content = document.querySelector(".content");
    let projectContent = document.createElement("div");
    projectContent.classList.add("project-content");
    content.appendChild(projectContent);
    console.log("projects");
}

export {
  homeContent,
  addTaskContent,
  toDoContent,
  checkListContent,
  addTodayContent,
  addProjectContent,
};
