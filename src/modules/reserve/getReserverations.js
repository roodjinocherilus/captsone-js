const getReserverations = async (movieId) => {
  const request = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sUHYcv06blVrKgUc2kUH/reservations?item_id=${movieId}`);
  const response = await request.json();
  return response;
};

export default getReserverations;