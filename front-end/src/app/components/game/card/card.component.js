import { Component } from "../../../scripts/component";
import "./card.component.css";
import template from "./card.component.html"
import back from "./assets/back.png";
import card0 from "./assets/card-0.png";
import card1 from "./assets/card-1.png";
import card2 from "./assets/card-2.png";
import card3 from "./assets/card-3.png";
import card4 from "./assets/card-4.png";
import card5 from "./assets/card-5.png";
import card6 from "./assets/card-6.png";
import card7 from "./assets/card-7.png";
import card8 from "./assets/card-8.png";
import card9 from "./assets/card-9.png";

const CARD_TEMPLATE = template;

    // TODO #card-component: Change images location to /app/components/game/card/assets/***.png
  // TODO #import-assets: use ES default import to import images.
  const CARDS_IMAGE = [
    back,
    card0,
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
  ];


export class CardComponent extends Component {
    constructor(id) {
      // TODO #extends: call super(CARD_TEMPLATE)
      super(CARD_TEMPLATE)
      // is this card flipped?
      this._flipped = false;
      //this.template = CARD_TEMPLATE;

      // has the matching card has been discovered already?
      this.matched = false;

      this._elt = document.createElement("div");
      this._elt.innerHTML = this.template;
      this._elt = this._elt.firstElementChild;
      this._id = id;

      this._imageElt = this.getElement().querySelector(".card-wrapper");
      this._imageElt.querySelector("img.front-face").src =
        CARDS_IMAGE[this._id + 1];
      this._imageElt.querySelector("img.back-face").src = CARDS_IMAGE[0];
    }
  

  /* method CardComponent.getElement */
    getElement() {
      return this._elt;
    };

  // TODO #class: turn function into a method of CardComponent
  /* method CardComponent.flip */
    flip() {
      this._imageElt.classList.toggle("flip");
      this._flipped = !this._flipped;
    };

  // TODO #class: turn function into a method of CardComponent 
  /* method CardComponent.equals */
    equals(card) {
      return card._id === this._id;
    };

  // TODO #class: turn function into a method of CardComponent
  /* CardComponent.get flipped() */
    get flipped() {
      return this._flipped;
    };
  };
