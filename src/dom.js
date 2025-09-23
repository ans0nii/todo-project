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

function toDoForms() {
  let toDoForm = document.createElement("form");

  let newTaskContent = document.createElement("div");

  let toDoFormLabel = document.createElement("label");
  toDoFormLabel.textContent = "New Task: ";
  newTaskContent.appendChild(toDoFormLabel);

  let toDoFormInput = document.createElement("input");
  toDoFormInput.type = "text";
  toDoFormInput.name = "title";
  newTaskContent.appendChild(toDoFormInput);

  let toDoFormSubmit = document.createElement("button");
  toDoFormSubmit.type = "submit";
  toDoFormSubmit.textContent = "Add task";
  newTaskContent.appendChild(toDoFormSubmit);

  let priorityContent = document.createElement("div");

  let priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority: ";
  priorityContent.appendChild(priorityLabel);

  let priorityInput = document.createElement("select");
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

  let prioritySubmit = document.createElement("button");
  prioritySubmit.type = "submit";
  prioritySubmit.textContent = "Submit";
  priorityContent.appendChild(prioritySubmit);

  let dateDueContent = document.createElement("div");
  let dateDueLbl = document.createElement("label");
  dateDueLbl.textContent = "Date Due: ";
  dateDueContent.appendChild(dateDueLbl);

  let dateDueInput = document.createElement("input");
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

  return toDoForm;
}

function toDoContent() {
  let content = document.querySelector(".content");
  let toDo = document.createElement("div");
  toDo.classList.add("toDo-content", "layout");
  content.appendChild(toDo);
  let form = toDoForms();
  toDo.appendChild(form);
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
