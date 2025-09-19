import { check } from "./dom.js";

function sideBarButtons() {
  function homeButton() {
    document.querySelector("#home-btn").addEventListener("click", (e) => {
      check();
    });
  }
  homeButton();

  function addTaskButton() {
    document.querySelector("#add-task-btn").addEventListener("click", (e) => {
      check();
    });
  }
  addTaskButton();

  function toDo() {
    document.querySelector("#todo-btn").addEventListener("click", (e) => {
      check();
    });
  }
  toDo();

  function checkList() {
    document.querySelector("#checklist-btn").addEventListener("click", (e) => {
      check();
    });
  }
  checkList();

  function today() {
    document.querySelector("#today-btn").addEventListener("click", (e) => {
      check();
    });
  }
  today();

  function projects() {
    document.querySelector("#projects-btn").addEventListener("click", (e) => {
      check();
    });
  }
  projects();
}
export { sideBarButtons }
