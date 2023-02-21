import ShowsList from './fetchMovie.js';

const id = 1;
const show = new ShowsList();
const result = show.getShow(id);


const cardContainer = document.getElementById('card-container');
const displayCards = () => {
  cardContainer.innerHTML = `
  <div class="items">
    <div class="row-1">
      <img src="https://source.unsplash.com/collection/sun/200x150" alt="movie posture">
    </div>
    <div class="row-2">
      <h3 class="title-movie">First movie</h3>
      <p class="flex-col"><span class="heart-icon">&#9825;</span> 5 likes</p>
    </div>
    <div class="row-3 flex-col">
      <button class="comment-btn">Comment</button>
      <button class="comment-btn">Reservations</button>
    </div>
  </div>`;
};
const renderCards = () => {
  document.addEventListener('DOMContentLoaded', displayCards);
};

export default renderCards;