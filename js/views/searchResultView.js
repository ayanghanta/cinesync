import View from './View.js';

class SearchResultView extends View {
  _parentElement = document.querySelector('.section__preview--body');
  _searchField = document.querySelector('.sreach-form');
  _errorMsg = `This movie can't be found! 😔, try with orther movie :)`;
  _data;

  addHandelerSearch(handler) {
    this._parentElement.addEventListener('click', function (e) {
      document
        .querySelector('.section__preview--header')
        .classList.remove('watchlist--open');
    });
    this._searchField.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = document.querySelector('.movieQuery').value;
      handler(query);
      document.querySelector('.movieQuery').value = '';
    });
  }
  createMarkup() {
    const currentActiveId = window.location.hash.slice(1);
    return this._data
      .map(movie => {
        return `
        <a href="#${movie.id}" class="result__card result__card${
          movie.id === currentActiveId ? '--active' : ''
        }">
            <img
              src="${movie.poster}"
              alt="${movie.title} poster"
              class="movie_poster--small"
            />
            <div class="card--details">
              <p class="card__movie-title">${movie.title}</p>
              <div class="card--details-orthers">
                <div class="card__orthers">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-card"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M224,216H183.36A103.95,103.95,0,1,0,128,232h96a8,8,0,0,0,0-16ZM40,128a88,88,0,1,1,88,88A88.1,88.1,0,0,1,40,128Zm88-24a24,24,0,1,0-24-24A24,24,0,0,0,128,104Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,128,72Zm24,104a24,24,0,1,0-24,24A24,24,0,0,0,152,176Zm-32,0a8,8,0,1,1,8,8A8,8,0,0,1,120,176Zm56-24a24,24,0,1,0-24-24A24,24,0,0,0,176,152Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,176,120ZM80,104a24,24,0,1,0,24,24A24,24,0,0,0,80,104Zm0,32a8,8,0,1,1,8-8A8,8,0,0,1,80,136Z"
                    ></path>
                  </svg>
                  <p class="card--details-data">${movie.year}</p>
                </div>
                <div class="card__orthers">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-card"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"
                    ></path>
                  </svg>
                  <p class="card--details-data">${movie.type}</p>
                </div>
              </div>
            </div>
          </a>
        `;
      })
      .join('');
  }
}

export default new SearchResultView();
