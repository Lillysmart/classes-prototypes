const template = document.createElement("template");
template.innerHTML =
  /*html*/
 `
<style>
button {
  height: 3rem;
  padding: 0 3rem;
  background: white;
  color:var(--color-primary-100);
  border-radius: 8px;
  border-width: 0;
  cursor: pointer;
  border:1px solid var(--color-primary-100);
  font-weight: bold;
  font-size:1rem;
}
button:hover {
    background: #111;
}
button_primary{
    background:var(--color-primary-100);  
    color: white;
}
</style>
<button><slot></slot></button>`;

console.log(template);

class UserInput extends HTMLElement {
  #inner = this.attachShadow({ mode: "open" });
  /**
   * @type {'primary'| 'secondary'}
   */
  #importance ='secondary'
  #elements ={}

  connectedCallback() {
    const node = template.content.cloneNode(true);
    this.#inner.appendChild(node);
  }

  set importance(value){
    if (value===this.#importance){
        return
    }
    this.#importance=value
    if ( value ==='primary'){
        .classList.add("primary")
    }else {

    }
  }
  get importance(){
    return this.#importance
  }
}
customElements.define("user-action", UserInput);
