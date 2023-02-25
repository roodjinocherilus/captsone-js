import postComment, { getComments } from './postComment.js';

export const checkImage = (image) => { // eslint-disable-line
  if (image) {
    return image.original;
  }
};

const closeModal = () => {
  const modalContainer = document.getElementById('modal-container');
  const modal = document.querySelector('.modal');
  const backdrop = document.querySelector('.modal-backdrop');
  modalContainer.removeChild(modal);
  modalContainer.removeChild(backdrop);
};

const showModal = (movie) => {
  const modalContainer = document.getElementById('modal-container');
  const imageCK = checkImage(movie.image);
  checkImage(movie.image);

  // Create the modal backdrop
  const backdrop = document.createElement('div');
  backdrop.classList.add('modal-backdrop');
  backdrop.id = 'modal-backdrop';

  // Create the modal content
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
      <h2>${movie.name}</h2>
        <img class="img-movie" src="${imageCK}" alt="movie posture">
    ${movie.summary}

    <div class="divider"></div>
    <h2>Add a comment</h2>
    <form>
      <textarea placeholder="Enter your comment"></textarea>
      <button type="submit">Submit</button>
    </form>

    <div class="comments">
    </div>
    `;

  // Get the comments for the movie
  getComments(movie.id).then((response) => {
    response.forEach((element) => {
      const commentContainer = modal.querySelector('.comments');
      const comment = document.createElement('div');
      comment.classList.add('comment');
      comment.innerHTML = `
      <h3>${element.username}</h3>
        <p class="date">${element.creation_date}</p>
        <p>${element.comment}</p>
        `;
      commentContainer.appendChild(comment);
    });
  });
  // Add event listener to the form submit button
  const form = modal.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = form.querySelector('textarea').value;
    postComment(movie.id, comment);
    form.querySelector('textarea').value = '';
  });
  // Append the modal to the container and show the backdrop
  modalContainer.appendChild(backdrop);
  modalContainer.appendChild(modal);

  // Add event listener to the backdrop to close the modal when clicked
  backdrop.addEventListener('click', () => {
    closeModal();
  });
};

export default showModal;