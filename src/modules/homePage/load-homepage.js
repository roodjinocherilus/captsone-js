import ShowsList from './fetchMovie.js';
import postLike from './postLike.js';
import countItem from './CountItem.js';
import renderReservePopup from '../reserve/load-reserve-pop.js';
import showModal from '../comment/popup.js';
import getFilteredLikes from './getLikes.js';

const show = new ShowsList();

const cardContainer = document.getElementById('card-container');

const displayCards = async () => {
  for (let id = 1; id < 7; id += 1) {
    show.getShow(id).then(async (response) => {
      const section = document.createElement('section');
      countItem();
      section.classList.add('items');
      section.innerHTML += `
      <div class="row-1">
        <img src="${response.image.medium}" alt="movie posture">
      </div>
      <div class="row-2">
        <h3 class="title-movie">${response.name}</h3>
        <p class="flex-col">
        <button class="heart">
          <i class="fa fa-heart heart-icon" id="${response.id}"></i>
        </button><span class=like-count></span>likes
        </p>
      </div>
      <div class="row-3 flex-col" id="${response.id}">
        <button class="comment-btn"  value="${response.id}" onclick="window.location='#';">Comment</button>
        <button class="reserve-btn" id="reserve-btn">Reserve</button>
        </div>`;
      cardContainer.appendChild(section);
    });
  }
  window.addEventListener('mouseover', async (e) => {
    e.preventDefault();
    if (e.target.classList.contains('row-2')) {
      const movieID = e.target.children[1].children[0].children[0].id;
      const counter = e.target.children[1].children[0].nextSibling;
      const likes = await getFilteredLikes(movieID);
      counter.innerHTML = likes;
    }
  });
};

document.body.addEventListener('click', async (e) => {
  if (e.target.parentElement.classList.contains('heart')) {
    e.preventDefault();
    await postLike(e.target.id);
    const likeContainer = e.target.parentElement.parentElement.children[1];
    const likes = await getFilteredLikes(e.target.id);
    likeContainer.innerText = likes;
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
export default displayCards;
