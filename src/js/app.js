import Taskmanager from "./Taskmanager";

const taskmanager = new Taskmanager(document.querySelector(".taskmanager"));
taskmanager.init();
taskmanager.tasks = [];
taskmanager.render();
