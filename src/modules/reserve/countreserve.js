const countReserve = () => {
  const totalItems = document.getElementById('counter');
  totalItems.innerHTML = document.querySelectorAll('.items').length + 1;
  return Number(totalItems.innerHTML);
};

module.exports = countReserve;