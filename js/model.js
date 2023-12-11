import { getJSON } from './helper.js';
import { KEY, BASE_URL } from './config.js';

export { getJSON } from './helper.js';

export const state = {
  showedMovie: {},
  search: {
    query: '',
    searchResults: [],
  },
  bookmarks: [],
};

const createShowMovieObject = function (data) {
  return {
    id: data.imdbID,
    posterImg: data.Poster,
    title: data.Title,
    releasedDate: data.Released,
    runtime: data.Runtime,
    language: data.Language,
    collection: data.BoxOffice,
    storyline: data.Plot,
    actors: data.Actors.split(','),
    director: data.Director,
    rating: data.imdbRating,
    type: data.Type,
  };
};

const createSearchResultObject = function (data) {
  return {
    title: data.Title,
    year: data.Year,
    id: data.imdbID,
    type: data.Type,
    poster: data.Poster,
  };
};

export const getMovieData = async function (movieId) {
  try {
    const data = await getJSON(`${BASE_URL}?i=${movieId}&apikey=${KEY}`);
    state.showedMovie = createShowMovieObject(data);
    if (state.bookmarks.some(movie => movie.id === state.showedMovie.id))
      state.showedMovie.isbookmarked = true;
    else state.showedMovie.isbookmarked = false;
  } catch (err) {
    throw err;
  }
};

export const getSerchresult = async function (query) {
  try {
    const data = await getJSON(`${BASE_URL}?s=${query}&page=1&apikey=${KEY}`);
    state.search.searchResults = data.Search.map(movie =>
      createSearchResultObject(movie)
    );
  } catch (err) {
    throw err;
  }
};

const checkBookmark = function () {
  console.log(state.bookmarks, state.showedMovie.id);
  return state.bookmarks.some(movie => movie.id === state.showedMovie.id);
};

export const addBookmark = function (movieObject) {
  state.bookmarks.push({
    title: movieObject.title,
    year: movieObject.releasedDate.slice(-4),
    poster: movieObject.posterImg,
    id: movieObject.id,
    type: movieObject.type,
  });
  if (movieObject.id === state.showedMovie.id)
    state.showedMovie.isbookmarked = true;
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(mov => mov.id === id);
  state.bookmarks.splice(index, 1);
  console.log(state.bookmarks);
  if (id === state.showedMovie.id) state.showedMovie.isbookmarked = false;
};

export const saveBookmarks = function () {
  localStorage.setItem('cinesyncBookmark', JSON.stringify(state.bookmarks));
};
export const getBookmarks = function () {
  const bookmarksData = localStorage.getItem('cinesyncBookmark');
  if (!bookmarksData) return;
  state.bookmarks = JSON.parse(bookmarksData);
};
const DeleteAllBookmarks = function () {
  localStorage.clear('cinesyncBookmark');
};
// DeleteAllBookmarks();
