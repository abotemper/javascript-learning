// import "./styles/styles.css";

import Tooltip from './timber-ui/tooltip.js';
import Dropdown from './dropdown.js';
import Tabs from './timber-ui/tabs.js';
import Snackbar from './timber-ui/snackbars.js';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

//create tabs 
const tabs =  new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbars
const snackbar = new Snackbar();
snackbar.init();
const button = document.querySelector('button');
button.addEventListener('click', e => {
    snackbar.show('you click me ');
});