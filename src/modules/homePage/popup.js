import ShowsList from './fetchMovie.js';
const show = new ShowsList();

export const checkImage = (image) => {
    if (image) {
        return image.original;
    }
};

const showModal = (movie) => {
    const modalContainer = document.getElementById('modal-container');  
    let imageCK = checkImage(movie.image);
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
    `;
    
    // Append the modal to the container and show the backdrop
    modalContainer.appendChild(backdrop);
    modalContainer.appendChild(modal);
    
    // Add event listener to the backdrop to close the modal when clicked
    backdrop.addEventListener('click', () => {
      closeModal();
    });
  };
  
const closeModal = () => {
    const modalContainer = document.getElementById('modal-container');
    const modal = document.querySelector('.modal');
    const backdrop = document.querySelector('.modal-backdrop');
    modalContainer.removeChild(modal);
    modalContainer.removeChild(backdrop);
  };
  

export default showModal;