// @ts-check
console.log("hi");

import { Task } from "./Modules/task.js";
import { createAdding } from "./Modules/adding.js";

class Example extends HTMLElement {
  connectedCallback(){
      this.innerHTML="hello!"
  }
}
customElements.define("example-leona", Example)

window.addEventListener("error",()=>{
  document.body.innerHTML=`<h1> something is very wrong </h1>`
})

const adding= createAdding()
adding.submission= (data)=>
{
  new Task(data)
}

/*const example =new Task( {
      title:'pray ',
      due: null,
      urgency:"high"
})
example.title="hi"*/