//@ts-check

import { doesHtmlExist, getHtml, createUniqueId } from "./helpers.js";
//import { Task } from "./state.js";
/**
 * @typedef {'high' | 'medium' | 'low'} Urgency - The priority that the tasks
 * should take in terms of how quickly it should be completed
 *
 * @typedef {'recent' | 'oldest' | 'upcoming'} Sorting - One of three possible
 * predefined ordering approaches that task can be shown in. `recent` arranges
 * based on the tasks that were created closest to the current date, `oldest`
 * does the opposite, and `upcoming` arranges based on the closest due date (if
 * no due date it will be placed last).
 */
/**
 * @typedef {Pick<Task, 'completed' | 'due' |'title' | 'urgency'>} Props
 */

/**
 *
 * @param {string} id
 */
const addTaskToHtml = (id) => {
  const list = getHtml({ dataAttr: "list" });

  if (doesHtmlExist("task", id)) {
    throw new Error("Task with that Id already exist");
  }

  const preview = document.createElement("li");
  preview.className = "task";
  preview.dataset.task = id;
  preview.innerHTML = /* Html */ ` 
          <label class="task__check">
            <input class="task__input" data-checkbox type="checkbox" />
          </label>
          <button class="task__title" data-title >
          </button>

          <buttonclass="task__check" data-delete style="display:none"> </button>
          <label class="task__check">
            <svg
              class="task__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
          
            >
              <path
                d="M253 961q-40.212 0-67.606-27.1Q158 906.8 158 867V314h-58v-94h231v-48h297v48h232v94h-58v553q0 39.05-27.769 66.525Q746.463 961 707 961H253Zm454-647H253v553h454V314ZM354 789h77V390h-77v399Zm175 0h78V390h-78v399ZM253 314v553-553Z"
              ></path>
            </svg>
          </label>
      `;
  list.appendChild(preview);
};

/**
 *
 * @param {string} id
 * @param {Partial<Props>} changes
 */

const updateTaskHtml = (id, changes) => {
  const { completed, title } = changes;
  const element = getHtml({ dataAttr: "task", value: id });

  const hasCompleted = completed !== undefined;
  //const hasDue = due !== undefined
  const hasTitle = title !== undefined;
  //const hasUrgency = urgency !== undefined

  if (hasCompleted) {
    const inner = getHtml({ dataAttr: "checkbox", target: element });
    if (!("checked" in inner)) {
      throw new Error("Expected input element");
    }
    inner.checked = completed;
  }

  if (hasTitle) {
    const inner = getHtml({ dataAttr: "title", target: element });
    inner.innerHTML = title;
  }
};



/**
 * @returns {Task}
 */
export class Task{
  /**
   * @type {string}
   */
 #id = createUniqueId();
 /**
   * @type {boolean}
   */
 #completed= false
 /**
   * @type {Date}
   */
#created= new Date()
/**
   * @type {string}
   */
#title= undefined 
/**
   * @type {Urgency}
   */
#urgency= undefined
/**
   * @type {null | Date}
   */
#due = undefined

/**
 *
 * @param {Omit<Props, 'completed'>} props
 * @returns {Task}
 */
 constructor(props){
    this.#due=props.due
    this.#urgency= props.urgency


    addTaskToHtml(this.id);

    updateTaskHtml(this.id, {
      completed: this.completed,
     ...props,
    });
 }
 

    get id() {
      return this.#id;
    }

    set id(newValue) {
      throw new Error("cannot directly change id ");
    }

    get completed() {
      return this.#completed;
    }
  
    set completed(newValue) {
      if (typeof newValue !== "boolean") {
        throw new Error('"completed" is not a boolean');
      }
      
      if (newValue !== this.completed) {
        this.completed = newValue;

        updateTaskHtml(this.id, {
          completed:newValue
      
        });
      }
    }

    get created() {
      return this.#created;
    }

    set created(newValue) {
      throw new Error("cannot directly change created");
    }

    get title() {
      return this.#title;
    }

    set title(newValue) {
      
        if (!newValue || typeof newValue !== "string" || newValue.trim === "") {
          throw new Error('"title" is required to be a non-empty string ');
        }
      this.#title= newValue

      updateTaskHtml(this.id, {
        title:newValue,
    
      })
    }

    get urgency() {
      return this.#urgency;
    }

    set urgency(newValue) {
      /**
       * @type {Array<Urgency>}
       */
      const valid = ["high", "low", "medium"];
      if (!valid.includes(newValue)) {
        throw new Error("valid is required to be 'high', 'low', 'medium'");
      }
      this.#urgency=newValue
    }
    get due() {
      return this.#due;
    }
    set due(newValue) {
      if (!(newValue instanceof Date)) {
        throw new Error("Due is requirred to be a date");
      }
      this.#due = newValue;
    }
  };
;

export default Task;
