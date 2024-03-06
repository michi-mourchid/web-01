import template from "../views/welcome.html"
import { Component } from "./component";

  // TODO #class: use the ES6 class keyword
  /* class WelcomeComponent constructor  */
  export class WelcomeComponent extends Component{
    constructor() {
      // TODO #extends: call super(template)
      super(template)
      this.template = template

    }

    init() {
      let form = document.querySelector("form.form-signin");

      form.addEventListener(
        "submit",(event) => {
          event.preventDefault();
          if (form.checkValidity() === false) {
            event.stopPropagation();
            form.classList.add("was-validated");
          } else {
            let name = event.srcElement.querySelector("#nickname").value;
            let size = parseInt(event.srcElement.querySelector("#size").value);

                // TODO #spa: replace with './#game'
            let gamePage = "./#game";
            // TODO #template-literals:  use template literals (backquotes)
            window.location = `${gamePage}?name=${name}&size=${size}`;
          }
        },
        false
      );

      return this;
    };
  };