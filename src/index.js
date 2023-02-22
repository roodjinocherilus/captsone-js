// import _ from 'lodash';
import './style.css';
import displayShow from './modules/load-homepage.js';
import  {openpopup}  from './modules/popup.js';



displayShow();

const popupWindow = document.querySelectorAll('.items');
popupWindow.addEventListener('click', () =>{
openpopup();
});

