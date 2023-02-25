import postComment, { getComments } from './postComment.js';
import totalComments from './CommentCount.js';

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

  // Create the modal content
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.id = 'items';
  modal.innerHTML = `
      <h2>${movie.name}</h2>
        <img class="img-movie" src="${imageCK}" alt="movie posture">
    ${movie.summary}
    <div class="divider"></div>
    <h2>Add a comment</h2>
    <form>
      <textarea placeholder="Enter your comment"></textarea>
      <button type="submit" id="btn-reload">Submit</button>
    </form>

    <h2 class="commentCounter">
    </h2>
    `;

     // Get the comments for the movie
     getComments(movie.id).then((response) => {
      response.forEach((element) => {
        const commentContainer = modal.querySelector('.comments');
        const comment = document.createElement('div');
        comment.classList.add('comment');

        const commentCount = modal.querySelector('.commentCounter');
        commentCount.innerHTML = 'Comments: ' + totalComments();

        comment.innerHTML = `
        <h3>${element.username}</h3>
          <p class="date">${element.creation_date}</p>
          <p>${element.comment}</p>
          `;
        if (commentContainer) {
          commentContainer.appendChild(comment);
        } else {
          const comments = document.createElement('div');
          comments.classList.add('comments');
          comments.appendChild(comment);
          modal.appendChild(comments);
        }
      });
    });


    const form = modal.querySelector('form');
    // Add event listener to the form submit button
    // form.addEventListener('submit', (event) => {
    //   event.preventDefault();
    //   const comment = form.querySelector('textarea').value;
    //   postComment(movie.id, comment);
    //   form.querySelector('textarea').value = '';
    // });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const comment = form.querySelector('textarea').value;
      await postComment(movie.id, comment);
      form.querySelector('textarea').value = '';
      const comments = await getComments(movie.id);
      const commentContainer = modal.querySelector('.comments');
      const commentCount = modal.querySelector('.commentCounter');
      commentCount.innerHTML = 'Comments: ' + totalComments();
      commentContainer.innerHTML = '';
      comments.forEach((element) => {
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

    // Add close button
const closeButton = document.createElement('button');
closeButton.classList.add('close-button');
closeButton.innerHTML = 'X';
modal.appendChild(closeButton);

// Add event listener to close button
closeButton.addEventListener('click', () => {
  closeModal();
});

 // Create the modal backdrop
 const backdrop = document.createElement('div');
 backdrop.classList.add('modal-backdrop');
 backdrop.id = 'modal-backdrop';

  // Append the modal to the container and show the backdrop
  modalContainer.appendChild(backdrop);
  modalContainer.appendChild(modal);

  // Add event listener to the backdrop to close the modal when clicked
  backdrop.addEventListener('click', () => {
    closeModal();
  });
};


export default showModal;