import {
  homeContent,
  toDoContent,
  addTodayContent,
  addProjectContent,
  clearContent,
} from "./dom.js";

function sideBarButtons() {
  function homeButton() {
    document.querySelector("#home-btn").addEventListener("click", (e) => {
      clearContent();
      homeContent();
    });
  }
  homeButton();

  function toDo() {
    document.querySelector("#todo-btn").addEventListener("click", (e) => {
      clearContent();
      toDoContent();
    });
  }
  toDo();


  function today() {
    document.querySelector("#today-btn").addEventListener("click", (e) => {
      clearContent();
      addTodayContent();
    });
  }
  today();

  function projects() {
    document.querySelector("#projects-btn").addEventListener("click", (e) => {
      clearContent();
      addProjectContent();
    });
  }
  projects();
}
export { sideBarButtons };
