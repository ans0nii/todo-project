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
}


function toDoContent() {
  let content = document.querySelector(".content");
  let toDo = document.createElement("div");
  toDo.classList.add("toDo-content", "layout");
  content.appendChild(toDo);
  console.log("todo");
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
