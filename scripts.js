
import "./Components/task-adding.js"
 import './Components/single-task.js'
 import { getHtml } from "./Modules/helpers.js"
 import {Taskadding} from "./Components/task-adding.js"
// import { Task } from "./Modules/task.js";
// import { createAdding } from "./Modules/adding.js";

const addButton =getHtml('add-button')
const taskAdding = getHtml('adding')


if (!(addButton instanceof HTMLElement)){
throw new Error ("data-add")
}

if (!(taskAdding instanceof Taskadding)){
  throw new Error ('invalid task adding')
}
addButton.addEventListener("click",()=>{
  taskAdding.open = true
})


window.addEventListener("error",()=>{
  document.body.innerHTML=`<h1> something is very wrong </h1>`
})

const task = document.createElement('single-task')
console.log(task)

//const adding= createAdding()

