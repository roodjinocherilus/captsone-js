import getReserverations from './getReserverations.js';

const countReserve = async (id) => {
  const totalItems = document.getElementById('reserve-counter');
  const request = await getReserverations(id);
  const response = request.length;
  totalItems.innerHTML = response;
  return response;
};

export default countReserve;
