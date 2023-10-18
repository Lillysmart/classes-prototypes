
import "./Components/task-adding.js"
 import './Components/single-task.js'
 import { getHtml } from "./Modules/helpers.js"
 import {Taskadding} from "./Components/task-adding.js"
 import './Components/user-action.js'
// import { Task } from "./Modules/task.js";
// import { createAdding } from "./Modules/adding.js";

const addButton =getHtml({dataAttr:'add-button'})
const taskAdding =getHtml({dataAttr:'adding'})

const element = getHtml({
  dataAttr: "adding",
  target:document
})
console.log(addButton)

if (!(addButton instanceof HTMLElement)){
throw new Error ("data-add")
}

if (!(taskAdding instanceof Taskadding)){
  throw new Error ('invalid task adding')
}
addButton.addEventListener("click",()=>{
  taskAdding.open = true
})

taskAdding.addEventListener ("added", (event)=>{
  if (!(event instanceof CustomEvent)){
    throw new Error ('required to be custom event')
  }
  console.log(event.detail)
console.log(event)
})

window.addEventListener("error",()=>{
  document.body.innerHTML=`<h1> something is very wrong </h1>`
})

const task = document.createElement('single-task')
console.log(task)

//const adding= createAdding()

