import {sideBarButtons} from "./sidebar.js";
import { homeContent } from "./dom.js";
import "./style.css";


document.addEventListener("DOMContentLoaded", () => {
    homeContent();  // Automatically load home content on page load
    sideBarButtons();  // Set up your buttons
});





sideBarButtons();