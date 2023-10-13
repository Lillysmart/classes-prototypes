// @ts-check
console.log("hi");
import { state, Task } from "./Modules/state.js";
import { createTask } from "./Modules/tasks.js";
import { createAdding } from "./Modules/adding.js";

window.addEventListener("error",()=>{
  document.body.innerHTML=`<h1> something is very wrong </h1>`
})
const adding = createAdding();

adding.submission = createTask;

const example =createTask( {
      title:'pray ',
      due: null,
      urgency:"high"
})
example.title="hi"