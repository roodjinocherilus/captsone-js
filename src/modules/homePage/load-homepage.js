import ShowsList from './fetchMovie.js';
import postLike from './postLike.js';
import countItem from './CountItem.js';
import renderReservePopup from '../reserve/load-reserve-pop.js';
import showModal from '../comment/popup.js';

const show = new ShowsList();

const cardContainer = document.getElementById('card-container');
const displayCards = async (response) => {
  const section = document.createElement('section');
  section.classList.add('items');
  countItem();
  section.innerHTML += `
  <div class="row-1">
    <img src="${response.image.medium}" alt="movie posture">
  </div>
  <div class="row-2">
    <h3 class="title-movie">${response.name}</h3>
    <p class="flex-col">
      <button class="heart">
        <i class="fa fa-heart heart-icon" id="${response.id}"></i>
      </button><span class=like-count>0</span>likes
    </p>
  </div>
  <div class="row-3 flex-col" id="${response.id}">
    <button class="comment-btn"  value="${response.id}" onclick="window.location='#';">Comment</button>
    <button class="reserve-btn" id="reserve-btn">Reserve</button>
  </div>`;
  cardContainer.appendChild(section);
};
const displayShow = () => {
  for (let id = 1; id <= 9; id += 1) {
    show.getShow(id).then((response) => displayCards(response));
  }
};

document.body.addEventListener('click', async (e) => {
  if (e.target.parentElement.classList.contains('heart')) {
    e.preventDefault();
    await postLike(e.target.id);
    const likeContainer = e.target.parentElement.parentElement.children[1];
    const previousLikes = Number(likeContainer.innerText);
    const newLikes = previousLikes + 1;
    likeContainer.innerText = newLikes;
  }
});

document.body.addEventListener('click', async (e) => {
  if (e.target.classList.contains('reserve-btn')) {
    renderReservePopup(e.target.parentElement.id);
  }
});
// event listener for the comment button afer everything has been displayed
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('comment-btn')) {
    e.preventDefault();
    showModal(e.target.value);
    show.getShow(e.target.value).then((response) => showModal(response));
  }
});

export default displayShow;