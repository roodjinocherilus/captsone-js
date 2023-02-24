const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'MaaGbCwoyJNbaDzXocQW';
const appUrl = `${url}${appID}/likes`;

const postLike = async (id, Likes) => {
  const request = await fetch(appUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      likes: Likes,
    }),
  });
  const response = request;
  return response;
};

export default postLike;