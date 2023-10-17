import { getHtml } from "../Modules/helpers.js";
const template = document.createElement("template");

template.innerHTML =
  /* Html */
  `<style>
  * {
  box-sizing: border-box;
}

  .button {
    height: 3rem;
    padding: 0 3rem;
    background: black;
    color: white;
    border-radius: 8px;
    border-width: 0;
    cursor: pointer;
  }
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

.title {
  text-align: center;
}

.row {
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.field {
  display: block;
  padding-bottom: 1rem;
}

.input {
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
    <h2 class="title">Add Task</h2>
    
    <form data-form id="adding">
    <label class="field">
      <div>Title</div>
      <input required class="input" name="title"/>
    </label>
    
    <label class="field">
      <div>due</div>
      <input type="date" class="input" name="due"/>
    </label>
    
    <label class="field">
      <div>urgency</div>
      <select required class="overlay__input" name="urgency">
      <option value="medium">Medium</option>
      <option value="high">High</option>
      <option value="low">Low</option>
      
    
      </select>
    </label>
    </form>
    
    <div class="row">
      <button class="button" data-cancel>Cancel</button>
      <button class="button" type="submit" form="adding">Save</button>
    </div>
    </dialog>
    `;

customElements.define(
  "task-adding",

  class extends HTMLElement {
    #open = false;
    #elements = {
      /**
       * @type {undefined | HTMLElement}
       */
      form: undefined,

      /**
       * @type {undefined | HTMLElement}
       */
      cancel: undefined,
      /**
       * @type {undefined | HTMLElement}
       */
      overlay: undefined,
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
        form: getHtml({ dataAttr: "form", target: this.#inner }),
        cancel: getHtml({ dataAttr: "cancel", target: this.#inner }),
        overlay: getHtml({ dataAttr: "overlay", target: this.#inner }),
      };
      this.#elements.cancel.addEventListener('click', ()=>{
        this.open= false
      })
    }
    set open(newValue) {
      if (newValue === this.#open) return;
      this.#open = newValue;
      if ((this.#elements.overlay instanceof HTMLDialogElement)){
        throw new Error ('Dialog element required')
      }


      if (newValue) {
        this.#elements.overlay.showModal();
      }else {
        this.#elements.close()
      }
    }
    get open() {
      return this.#open;
    }
  }
);
