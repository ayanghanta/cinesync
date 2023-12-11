import View from './View.js';
import { chekRealData } from '../helper.js';

class MovieView extends View {
  _parentElement = document.querySelector('.section__movieInfo');
  _errorMsg = `Movie data can't be fetched ⚠️`;
  _data;
  createMarkup() {
    return `
    <div class="movie__poster-conatainer">
        </div>
        <div class="movie__data bookmark--${
          this._data.isbookmarked ? 'active' : ''
        }">
          <div class="movie--title-container">
            <p class="movie--title">${this._data.title}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon bookmark-icon"
              viewBox="0 0 256 256"
            >
              <path
                d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"
              ></path>
            </svg>
          </div>
          <p class="movie--description">${chekRealData(
            this._data.storyline
          )}</p>
          <div class="move-stats">
            <div class="movie-stat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-movie-stat"
                viewBox="0 0 256 256"
              >
                <path
                  d="M224,216H183.36A103.95,103.95,0,1,0,128,232h96a8,8,0,0,0,0-16ZM40,128a88,88,0,1,1,88,88A88.1,88.1,0,0,1,40,128Zm88-24a24,24,0,1,0-24-24A24,24,0,0,0,128,104Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,128,72Zm24,104a24,24,0,1,0-24,24A24,24,0,0,0,152,176Zm-32,0a8,8,0,1,1,8,8A8,8,0,0,1,120,176Zm56-24a24,24,0,1,0-24-24A24,24,0,0,0,176,152Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,176,120ZM80,104a24,24,0,1,0,24,24A24,24,0,0,0,80,104Zm0,32a8,8,0,1,1,8-8A8,8,0,0,1,80,136Z"
                ></path>
              </svg>
              <p>${chekRealData(this._data.releasedDate)}</p>
            </div>
            
            <div class="movie-stat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-movie-stat"
                viewBox="0 0 256 256"
              >
                <path
                  d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64ZM184,216H72V180l56-42,56,42.35Zm0-140.36L128,118,72,76V40H184Z"
                ></path>
              </svg>
              <p>${chekRealData(this._data.runtime)}</p>
            </div>
            <div class="movie-stat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-movie-stat"
                viewBox="0 0 256 256"
              >
                <path
                  d="M239.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,100,126.93,103.65,103.65,0,0,0,127.69,64H152a8,8,0,0,0,0-16H96V32a8,8,0,0,0-16,0V48H24a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,88,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,76,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L140.94,192h70.11l13.79,27.58A8,8,0,0,0,232,224a8,8,0,0,0,7.15-11.58ZM148.94,176,176,121.89,203.05,176Z"
                ></path>
              </svg>
              <p>${chekRealData(this._data.language)}</p>
            </div>
            <div class="movie-stat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-movie-stat"
                viewBox="0 0 256 256"
              >
                <path
                  d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM56,146.87C36.41,141.4,24,132.39,24,124V109.93c8.16,5.78,19.09,10.44,32,13.57Zm80-23.37c12.91-3.13,23.84-7.79,32-13.57V124c0,8.39-12.41,17.4-32,22.87Zm-16,71.37C100.41,189.4,88,180.39,88,172v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41Zm0-44.62A163,163,0,0,1,96,152a163,163,0,0,1-24-1.75V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54Zm64,48a165.45,165.45,0,0,1-48,0V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54ZM232,172c0,8.39-12.41,17.4-32,22.87V171.5c12.91-3.13,23.84-7.79,32-13.57Z"
                ></path>
              </svg>
              <p>${chekRealData(this._data.collection)}</p>
            </div>
            <div class="movie-stat">
              <div class="actors">
                <p class="actor-title">Actors</p>
                <p class="actor">${this._data.actors
                  .map(actor => actor)
                  .join(',')}</p>

              </div>
            </div>
            <div class="movie-stat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-movie-stat"
                viewBox="0 0 256 256"
              >
                <path
                  d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.31a16,16,0,0,0-9.11,28.07L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-8.27-2.32V32.09h0l23.2,55.28a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
                ></path>
              </svg>
              <span>${chekRealData(this._data.rating)}/10</span>
            </div>
          </div>
        </div>
    `;
  }
  addHandelLoad(handler) {
    ['load', 'hashchange'].forEach(ev => window.addEventListener(ev, handler));
  }
}

export default new MovieView();
