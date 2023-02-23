import ShowsList from './fetchMovie.js';
import postLike from './postLike.js';

const show = new ShowsList();

const cardContainer = document.getElementById('card-container');
const displayCards = (response) => {
  cardContainer.innerHTML += `
  <section class="items">
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
    <div class="row-3 flex-col">
      <button class="comment-btn" onclick="window.location='#';">Comment</button>
      <button class="comment-btn" onclick="window.location='#';">Watch</button>
    </div>
  </section>`;
};

const displayShow = () => {
  for (let id = 1; id <= 6; id += 1) {
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

const Counter = document.getElementById('counter');
window.addEventListener('load', (e) => {
  e.preventDefault();
});
export default displayShow;