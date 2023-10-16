import {getHtml} from '../Modules/helpers.js'
const template = document.createElement("template");

template.innerHTML = /* Html */ 
`<style>
    
.overlay {
  border-width: 0;
  position: fixed;
  top: 4rem;
  max-width: 30rem;
  width: 90%;
  border-radius: 16px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 1);
  padding: 1rem 3rem;

  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
}

.overlay__title {
  text-align: center;
}

.overlay__row {
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.overlay__field {
  display: block;
  padding-bottom: 1rem;
}

.overlay__input {
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  height: 3rem;
  padding: 0 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border-width: 0;
}

.backdrop {
  display: none;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}

.overlay[open] ~ .backdrop {
  display: block;
}

</style>
    <dialog class="overlay" open="open">
    <h2 class="overlay__title">Add Task</h2>
    
    <form data-form id="adding">
    <label class="overlay__field">
      <div>Title</div>
      <input required class="overlay__input" name="title"/>
    </label>
    
    <label class="overlay__field">
      <div>due</div>
      <input type="date" class="overlay__input" name="due"/>
    </label>
    
    <label class="overlay__field">
      <div>urgency</div>
      <select required class="overlay__input" name="urgency">
      <option value="medium">Medium</option>
      <option value="high">High</option>
      <option value="low">Low</option>
      
    
      </select>
    </label>
    </form>
    
    <div class="overlay__row">
      <button class="button" data-cancel>Cancel</button>
      <button class="button" type="submit" form="adding">Save</button>
    </div>
    </dialog>
    `;

customElements.define(
  "single-task",

  class extends HTMLElement {
    /**
     * @type {string}
     */
    #title = this.getAttribute("title");
  /**
     * @type {boolean}
     */
    #completed = this.getAttribute("completed") !== null;
      /**
     * @type {undefined | HTMLElement}
     */
    #elements = {
          /**
     * @type {undefined | HTMLElement}
     */
      check: undefined,
        /**
     * @type {undefined | HTMLElement}
     */
      title: undefined,
        /**
     * @type {undefined | HTMLElement}
     */
      remove: undefined,
    };

  /**
     * @type {ShadowRoot}
     */
    #inner = this.attachShadow({ mode: "closed" });
    constructor() {
      super();
      const { content } = template;
      this.#inner.appendChild(content.cloneNode(true));
    }
    connectedCallback() {
      this.#elements = {
        check:getHtml({dataAttr: "check" , target: this.#inner}),
        remove:getHtml({dataAttr: "remove" , target: this.#inner}),
        title:getHtml({dataAttr: "title" , target: this.#inner})
      };
      this.#elements.title.innerText=this.#title
      if (! (this.#elements.check instanceof HTMLInputElement)){
throw new Error ("required input element")

    }
    
    this.#elements.check.checked=this.#completed

  }
}
);
