import ShowsList from './fetchMovie.js';
import renderReservePopup from './homePage/load-reserve-pop.js';

const show = new ShowsList();

const cardContainer = document.getElementById('card-container');
const displayCards = (response) => {
  cardContainer.innerHTML += `
  <div class="items">
    <div class="row-1">
      <img src="${response.image.medium}" alt="movie posture">
    </div>
    <div class="row-2">
      <h3 class="title-movie">${response.name}</h3>
      <p class="flex-col"><span class="heart-icon">&#9825;</span> 5 likes</p>
    </div>
    <div class="row-3 flex-col">
      <button class="comment-btn" onclick="window.location='#';">Comment</button>
      <button class="comment-btn" onclick="window.location='#';">Watch</button>
    </div>
  </div>`;
};

const displayShow = () => {
  for (let id = 1; id <= 6; id += 1) {
    show.getShow(id).then((response) => displayCards(response));
  }
};

document.body.addEventListener('click', async (e) => {
  if (e.target.classList.contains('reserve-btn')) {
    renderReservePopup(e.target.parentElement.id);
  }
});

export default displayShow;