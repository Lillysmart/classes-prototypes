const template = document.createElement("template");
template.innerHTML =
  /*html*/
 `
<style>
.button {
  height: 3rem;
  padding: 0 3rem;
  background: white;
  color:bkack;
  border-radius: 8px;
  border-width: 0;
  cursor: pointer;
  border:1px solid black
}
.button:hover {
    background: #111;
}
.button_primary{
    background: black;
    color: white;
}
</style>
<button class="button"><slot></slot></button>`;

console.log(template);

class UserInput extends HTMLElement {
  #inner = this.attachShadow({ mode: "open" });
  #importance ='secondary'

  connectedCallback() {
    const node = template.content.cloneNode(true);
    this.#inner.appendChild(node);
  }

  set importance(value){
    this.#importance=value
  }
}
customElements.define("user-action", UserInput);
