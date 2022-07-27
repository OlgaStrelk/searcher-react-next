class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
  }

  getCards(inputValue) {
    // if (inputValue === '') {
    //   return fetch(`${this._baseUrl}beers?page=1&per_page=80`).then((res) =>
    //   res.ok ? res.json() : Promise.reject(res.status)
    // );
    // }
    return fetch(`${this._baseUrl}beers?beer_name=${inputValue}`).then((res) =>
      res.ok ? res.json() : Promise.reject(res.status)
    );
  }

  getCardById(id) {
    return fetch(`${this._baseUrl}beers/${id}`).then((res) =>
      res.ok ? res.json() : Promise.reject(res.status)
    );
  }
}

const api = new Api({
  baseUrl: "https://api.punkapi.com/v2/",
});

export default api;
