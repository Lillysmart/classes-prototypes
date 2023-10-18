const template = document.createElement("template");
template.innerText =
  /*html*/
  `
<style>
.button {
  height: 3rem;
  padding: 0 3rem;
  background: black;
  color: white;
  border-radius: 8px;
  border-width: 0;
  cursor: pointer;
}

</style>
<button class="button"><slot></slot>Click me</button>`;


class UserInpur extends HTMLElement {
  #inner = this.attachShadow({ mode: "closed" });

  connectedCallback() {
    
  }
}
