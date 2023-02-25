const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const createAPP = async () => {
  const response = await fetch(`${url}/apps/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const id = await response.json();
  return id;
};

export default createAPP;