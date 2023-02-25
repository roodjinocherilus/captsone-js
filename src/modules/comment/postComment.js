const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'MaaGbCwoyJNbaDzXocQW';
const appUrl = `${url}${appID}/comments`;

const postComment = async (id, Comments) => {
  const request = await fetch(appUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: 'user',
      comment: Comments,
    }),
  });
  const response = request;
  return response;
};

export const getComments = async (id) => {
  const getUrl = `${url}${appID}/comments?item_id=${id}`;
  const request = await fetch(getUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },

  });
  const result = await request.json();
  return result;
};

export default postComment;