export default class View {
  _parentElement = '';
  _data;
  _errorMsg = '';
  _ortherMsg = '';
  clearParentEl() {
    this._parentElement.innerHTML = '';
  }
  render(data, backgroundImg = false) {
    this._data = data;
    this.clearParentEl();
    const markup = this.createMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    if (backgroundImg)
      document.querySelector(
        '.movie__poster-conatainer'
      ).style.backgroundImage = `url(${this._data.posterImg})`;
  }

  update(data) {
    if (data.length === 0) return;
    this._data = data;
    const newMarkup = this.createMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newDomElements = newDOM.querySelectorAll('*');
    const curDomElemnets = this._parentElement.querySelectorAll('*');

    newDomElements.forEach((newDomEl, i) => {
      const curDomEl = curDomElemnets[i];
      if (!newDomEl.isEqualNode(curDomEl))
        Array.from(newDomEl.attributes).forEach(attrib => {
          curDomEl.setAttribute(attrib.name, attrib.value);
        });
    });
  }
  renderError(errorMassage = this._errorMsg) {
    this.clearParentEl();
    const markup = `<p class="error-massage">${errorMassage}</p>`;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderMassage(massage = this._ortherMsg) {
    const markup = `<p class="orther-massage">${massage}</p>`;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderSpinner() {
    this.clearParentEl();
    const markup = `<span class="loader"></span>`;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  createMarkup() {
    return ``;
  }
}
