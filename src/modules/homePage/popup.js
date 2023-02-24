const showModal = () => {
    const modalContainer = document.getElementById('modal-container');
    
    // Create the modal backdrop
    const backdrop = document.createElement('div');
    backdrop.classList.add('modal-backdrop');
    
    // Create the modal content
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <h2>Add a comment</h2>
      <form>
        <textarea placeholder="Enter your comment"></textarea>
        <button type="submit">Submit</button>
      </form>
    `;
    
    // Add event listener to the form submit button
    const form = modal.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const comment = form.querySelector('textarea').value;
      // Do something with the comment, e.g. send it to a server
      closeModal();
    });
    
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