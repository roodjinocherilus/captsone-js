const CommentCount = require('./CommentCount.js');

describe('CommentCount', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="items">
        <div class="comment">Comment 1</div>
        <div class="comment">Comment 2</div>
      </div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('returns the correct number of comments', () => {
    const count = CommentCount();
    expect(count).toBe(3);
  });

  test('returns 0 if there are no comments', () => {
    document.body.innerHTML = '<div id="items"></div>';
    const count = CommentCount();
    expect(count).toBe(0);
  });

  test('returns NaN if the total comments element is not found', () => {
    document.body.innerHTML = '<div></div>';
    const count = CommentCount();
    expect(Number.isNaN(count)).toBe(true);
  });
});
