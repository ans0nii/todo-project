import {
  homeContent,
  addTaskContent,
  toDoContent,
  checkListContent,
  addTodayContent,
  addProjectContent,
} from "./dom.js";

function sideBarButtons() {
  function homeButton() {
    document.querySelector("#home-btn").addEventListener("click", (e) => {
      homeContent();
    });
  }
  homeButton();

  function addTaskButton() {
    document.querySelector("#add_task-btn").addEventListener("click", (e) => {
      addTaskContent();
    });
  }
  addTaskButton();
  function toDo() {
    document.querySelector("#todo-btn").addEventListener("click", (e) => {
      toDoContent();
    });
  }
  toDo();

  function checkList() {
    document.querySelector("#checklist-btn").addEventListener("click", (e) => {
      checkListContent();
    });
  }
  checkList();

  function today() {
    document.querySelector("#today-btn").addEventListener("click", (e) => {
      addTodayContent();
    });
  }
  today();

  function projects() {
    document.querySelector("#projects-btn").addEventListener("click", (e) => {
      addProjectContent();
    });
  }
  projects();
}
export { sideBarButtons };
