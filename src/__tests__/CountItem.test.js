/**
 * @jest-environment jsdom
 */

const countItem = require('../modules/homePage/CountItem.js');

describe('the number of movies', () => {
  test('should be equal to 0', () => {
    document.body.innerHTML = `
      <article  class="total-count">
        <p class="count-value">Total Movies : <span id="counter"></span></p>
      </article>
      <main id="main-section">
        <div class="movie-grid" id="card-container"></div>
      </main>
      `;
    const response = [];
    const cardContainer = document.getElementById('card-container');
    response.forEach((movie) => {
      cardContainer.innerHTML += `<section id=${movie.id} class="items"></section>`;
    });
    expect(countItem() - 1).toBe(0);
  });
  test('should be equal to 1', () => {
    document.body.innerHTML = `
      <article  class="total-count">
        <p class="count-value">Total Movies : <span id="counter"></span></p>
      </article>
      <main id="main-section">
        <div class="movie-grid" id="card-container"></div>
      </main>
      `;
    const response = [
      { id: 1, name: 'Under the Dome' },
    ];
    const cardContainer = document.getElementById('card-container');
    response.forEach((movie) => {
      cardContainer.innerHTML += `<section id=${movie.id} class="items"></section>`;
    });
    expect(countItem() - 1).toBe(1);
  });
  test('should be equal to 6', () => {
    document.body.innerHTML = `
      <article  class="total-count">
        <p class="count-value">Total Movies : <span id="counter"></span></p>
      </article>
      <main id="main-section">
        <div class="movie-grid" id="card-container"></div>
      </main>
      `;
    const response = [
      { id: 1, name: 'Under the Dome' },
      { id: 2, name: 'Person of Interest' },
      { id: 3, name: 'Bitten' },
      { id: 4, name: 'Arrow' },
      { id: 5, name: 'True Detective' },
      { id: 6, name: 'The 100' },
    ];
    const cardContainer = document.getElementById('card-container');
    response.forEach((movie) => {
      cardContainer.innerHTML += `<section id=${movie.id} class="items"></section>`;
    });
    expect(countItem() - 1).toBe(6);
  });
});