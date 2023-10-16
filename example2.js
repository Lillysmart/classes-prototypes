// class Example extends HTMLElement {
//     connectedCallback(){
//         this.innerHTML= "hello!";
//     }
// }
// customElements.define("example-lilly", Example)

class Example extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "hello!";
    }
}

customElements.define("example-lilly", Example);
