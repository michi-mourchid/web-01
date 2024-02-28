// TODO #import-html: use ES default imports to import game.html as template
import { parseUrl } from "./utils";
  // TODO #class: use the ES6 class keyword
  /* class ScoreComponent constructor */
  export function ScoreComponent() {
    // TODO #extends: call super(template)
    var params = parseUrl();
    // TODO #import-html: assign template to this.template
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }

  // put component in global scope, to be runnable right from the HTML.


  // TODO #class: turn function into a method of ScoreComponent
  /* method ScoreComponent.init */
  ScoreComponent.prototype.init = function init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  };
