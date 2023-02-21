class ShowsList {
  constructor() {
    this.url = ' https://api.tvmaze.com/shows/';
    this.img = '';
  }

  getShow = (id) => {
    fetch(`${this.url}${id}`)
      .then((response) => response.json())
      .then((jsonData) => {
        const data = jsonData.image.medium;
        console.log(data);
      });
  };
}
export default ShowsList;