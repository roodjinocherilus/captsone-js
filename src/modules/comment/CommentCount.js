const CommentCount = () => {
  const totalComments = document.getElementById('items');
  totalComments.innerHTML = document.querySelectorAll('.comment').length + 1; 
  return Number(totalComments.innerHTML);
};

module.exports = CommentCount;
