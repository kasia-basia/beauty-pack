import {Slider} from './js/slider'
import {HideTitles} from "./js/hideTitles";
import {Calculator} from "./js/calculator";
import {Menu} from "./js/menu";

document.addEventListener("DOMContentLoaded", function(event) {
    new Calculator();
    new Slider('.banner');
    new HideTitles();
    new Menu();
  });