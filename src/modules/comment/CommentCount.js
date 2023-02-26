const CommentCount = () => {
  const totalComments = document.getElementById('items');
  if (!totalComments) {
    return NaN;
  }
  const comments = totalComments.querySelectorAll('.comment');
  if (comments.length === 0) {
    return 0;
  }
  return comments.length;
};

module.exports = CommentCount;
