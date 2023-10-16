import {getHtml} from '../Modules/helpers.js'
const template = document.createElement("template");

template.innerHTML = /* Html */  `<dialog class="overlay" open="open">
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
