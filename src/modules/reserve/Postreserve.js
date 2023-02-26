const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'sUHYcv06blVrKgUc2kUH';
const appUrl = `${url}${appID}/reservations/`;

const postReservation = async (id, name, dateStart, dateEnd) => {
  const request = await fetch(appUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      date_start: dateStart,
      date_end: dateEnd,
    }),
  });
  const response = request;
  return response;
};

export default postReservation;