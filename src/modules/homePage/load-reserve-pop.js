import ShowsList from './fetchMovie.js';

const show = new ShowsList();

const reservePopup = document.getElementById('reserve-container');
const mainPage = document.getElementById('main-page');

const renderReservePopup = (showName) => {
  mainPage.classList.replace('show', 'hide');
  reservePopup.classList.replace('hide', 'show');
  show.getShow(showName).then((response) => {
    reservePopup.innerHTML += `
  <div class="popup-reserve-page">  
    <button class="close-popup">x</button>
    <img src="${response.image.medium}" alt="${response.name}">
    <div class="detail-section">
      <h3 class="title">${response.name}</h3>
      <ul class="detail">
        <li class="detil-item">Genre:${response.genres[0]}</li>
        <li class="detil-item">Premiered:${response.premiered}</li>
        <li class="detil-item">Rating:${response.rating.average}</li>
        <li class="detil-item">officialSite:${response.officialSite}</li>
      </ul>
    </div>
    <div class="reservations">
      <h3 class="reservations-header">Reservations
        <span class="counter"></span>
      </h3>
    <div class="reserve-histry"></div>
    </div>
    <div class="form-section">
    <h3 class="add-reserve">Add a reservation</h3>
    <form action="" class="reserve-form">
      <input type="text" placeholder="your name" id="name">
      <input type="date" placeholder="start date" id="start-date">
      <input type="date" placeholder="End date" class="end-date">
      <button type="submit" class="form-submit" id="${response.name}">Reserve</button>
    </form>
  </div>
  </div>
  `;
  });
};

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-popup')) {
    const popupContainer = document.querySelectorAll('.popup-reserve-page');
    if (popupContainer) {
      popupContainer.forEach((e) => {
        e.remove();
      });
    }
  }
});

export default renderReservePopup;