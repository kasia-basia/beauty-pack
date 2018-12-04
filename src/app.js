import {Slider} from './js/slider'
import {HideTitles} from "./js/hideTitles";
import {Calculator} from "./js/calculator";
import {Menu} from "./js/menu";
import {scroll} from "./js/scroll";
import {Contact} from "./js/contact";

document.addEventListener("DOMContentLoaded", function(event) {
    new Calculator();
    new Slider('.banner');
    new HideTitles();
    new Menu();
    scroll();
    new Contact();

  });



