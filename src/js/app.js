import css from '../scss/main.scss';
import slider from "./slider.js";
import menu from "./menu.js";
import sticky from "./sticky.js";

$(function(){
    // banner
    slider();
    // menu
    menu();
    // sticky
    sticky();
})