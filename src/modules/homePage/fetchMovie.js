export default class ShowsList {
  constructor() {
    this.url = ' https://api.tvmaze.com/shows/';
    this.imgUrl = ' ';
  }

  getShow = async (id) => {
    const response = await fetch(`${this.url}${id}`);
    const show = await response.json();
    return show;
  }
}
