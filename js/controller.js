import movieView from './views/movieView.js';
import searchResultView from './views/searchResultView.js';
import bookmarkView from './views/bookmarkView.js';

import * as model from './model.js';

const controllMovie = async function () {
  try {
    //0.Mark as selected in search result & resotre bookmarks
    searchResultView.update(model.state.search.searchResults);
    model.getBookmarks();
    // bookmarkView.render();
    // update the bookmard list as selected
    if (model.state.bookmarks.length !== 0)
      bookmarkView.render(model.state.bookmarks);

    // 1.get the movie id form the hash
    const hash = window.location.hash;
    if (!hash) return;

    //2.show loading spinner...
    movieView.renderSpinner();
    const id = hash.slice(1);

    //3.get the movie data using this id
    await model.getMovieData(id);

    //4.render the data
    movieView.render(model.state.showedMovie, true);
  } catch (err) {
    movieView.renderError();
  }
};
const controllSearchResult = async function (searchedMovie) {
  try {
    // 1.showing loading spinner...
    searchResultView.renderSpinner();

    //2. get ther query form the hash
    const query = searchedMovie.toLowerCase();

    //3. get data using this query
    await model.getSerchresult(query);

    //4.render search result
    searchResultView.render(model.state.search.searchResults);
  } catch (err) {
    searchResultView.renderError();
  }
};

const controllBookmark = function () {
  // 1. get the  Current movie data & update in the state
  if (!model.state.showedMovie.isbookmarked)
    model.addBookmark(model.state.showedMovie);
  else model.deleteBookmark(model.state.showedMovie.id);
  // 2. save the data in the local sotrage
  model.saveBookmarks();
  // 3. render in the watchlist
  bookmarkView.render(model.state.bookmarks);
  // 4. Update the current showed movie DOM
  if (model.state.bookmarks.length === 0) bookmarkView.renderMassage();
  movieView.update(model.state.showedMovie);
};
const init = function () {
  movieView.addHandelLoad(controllMovie);
  searchResultView.addHandelerSearch(controllSearchResult);
  bookmarkView.addHandelBookmark(controllBookmark);
};
init();
