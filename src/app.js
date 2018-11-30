import {Slider} from './js/slider'
import {HideTitles} from "./js/hideTitles";
import {Calculator} from "./js/calculator";

document.addEventListener("DOMContentLoaded", function(event) {
    new Calculator();
    new Slider('.banner');
    new HideTitles();

  });