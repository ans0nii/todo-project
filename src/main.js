import {sideBarButtons} from "./sidebar.js";
import { homeContent, toDoContent } from "./dom.js";
import { task } from "./task.js";
import "./style.css";


document.addEventListener("DOMContentLoaded", () => {
    toDoContent();  // Automatically load home content on page load
    sideBarButtons();  // Set up your buttons
});


sideBarButtons();