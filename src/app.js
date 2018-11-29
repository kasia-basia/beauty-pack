import {Slider} from './js/slider'
import {HideTitles} from "./js/hideArticleTitles";
import {Calculate} from "./js/kalkulator";

document.addEventListener("DOMContentLoaded", function(event) {
    new Slider('.banner');
    new HideTitles();
    new Calculate();
  });