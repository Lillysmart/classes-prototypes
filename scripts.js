// @ts-check

import './Components/single-task.js'
import { Task } from "./Modules/task.js";
import { createAdding } from "./Modules/adding.js";



window.addEventListener("error",()=>{
  document.body.innerHTML=`<h1> something is very wrong </h1>`
})

const task = document.createElement('single-task')
console.log(task)

//const adding= createAdding()

