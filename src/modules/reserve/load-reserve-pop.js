import ShowDetail from '../homePage/fetchMovie.js';
import postReservation from './Postreserve.js';
import getReserverations from './getReserverations.js';
import countReserve from './countreserve.js';

const show = new ShowDetail();
const reservePopup = document.getElementById('reserve-container');
const mainPage = document.getElementById('main-page');

const renderReservePopup = async (showName) => {
  mainPage.classList.replace('show', 'hide');
  reservePopup.classList.replace('hide', 'show');
  show.getShow(showName).then(async (response) => {
    // get reservations
    // countReserve(response.id);
    const reservations = await getReserverations(response.id);
    reservations.forEach((reservation) => {
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
    <div class="reserve-histry" id="${response.id}">
      <li><span>${reservation.date_start} - ${reservation.date_end} <span>${reservation.username}</li>
    </div>
    <div class="form-section">
    <h3 class="add-reserve">Add a reservation</h3>
    <form action="" class="reserve-form" id="${response.id}">
      <input type="text" placeholder="your name" id="name">
      <input type="date" placeholder="start date" id="start-date">
      <input type="date" placeholder="End date" class="end-date">
      <button type="submit" class="form-submit" id="${response.name}">Reserve</button>
    </form>
  </div>
  </div>
  `;
    });
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

document.body.addEventListener('click', async (e) => {
  if (e.target.classList.contains('form-submit')) {
    e.preventDefault();
    const form = document.querySelector('.reserve-form');
    const itemId = e.target.parentElement.id;
    const name = e.target.parentElement.children[0].value;
    const dateStart = e.target.parentElement.children[1].value;
    const dateEnd = e.target.parentElement.children[2].value;
    await postReservation(itemId, name, dateStart, dateEnd);
    form.submit();
    countReserve(itemId);
  }
});

export default renderReservePopup;