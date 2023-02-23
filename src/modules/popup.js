import { popupwindows } from "../index.js";



export const openpopup = () =>{ 
  console.log("hello");
 /* const newPopup = document.createElement('div');   
  newPopup.innerHTML = `
        <div class="popup-container">
          <h3> title </h3>
          <div></div>
        </div>
        `;*/
  }
  export const popupwindows = document.querySelector('row-1');
  popupwindows.addEventListener("click",() => {openpopup();})


//addEventListener('click', openpopup);

const main = document.querySelector('main');
const popupContainer = addElem('div', ['popup-container'], main);
popupContainer.innerHTML = `
  <div class="popup-close-container"></div>
  <div class="flex-column">
    <h2>${showData.name}</h2>
    <div class="sub-title flex-row">
      <span>${_showData.premiered.substring(0, 4)}</span>
      <span>&middot;</span>
      <span>${_showData.status}</span>
      <span>&middot;</span>
      <div class="flex-row">
        <span class="material-icons-round icons">star</span>
        <span class="rating">${_showData.rating.average}</span>
        <span>/10</span>
      </div>
    </div>
  </div>
  <img class="popup-img" src="${_showData.image.original}" alt="show thumbnail">
  <div class="genres flex-row"></div>
  <div class="summary">${_showData.summary}</div>
  <hr>
  <div class="comments-container"></div>`;
