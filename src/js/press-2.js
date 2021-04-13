function clearArticlesContainer() {
  var articlesContainer = document.getElementById('articlesContainer');
  while (articlesContainer.firstChild) {
    articlesContainer.removeChild(articlesContainer.firstChild);
  }
}

function toggleLoadingSpinner(show) {
  var loadingEl = document.getElementById('loading');
  loadingEl.setAttribute('aria-hidden', show ? 'false' : 'true');
  var articlesEl = document.getElementsByClassName('articles')[0];
  articlesEl.setAttribute('aria-busy', show ? 'true' : 'false');
}

function updateDomWithResults(results) {
  clearArticlesContainer();
  toggleLoadingSpinner(false);
}

function displayError() {
  clearArticlesContainer();
  toggleLoadingSpinner(false);

  var errorEl = document.createElement('p');
  errorEl.classList.add('error');
  errorEl.setAttribute('role', 'alert');
  var text = document.createTextNode('Oh no! Something went wrong when fetching these articles.');
  errorEl.appendChild(text);

  var articlesContainer = document.getElementById('articlesContainer');
  articlesContainer.appendChild(errorEl);
}

(function () {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      debugger;
      if (xhr.status >= 200 && xhr.status < 300) {
        var results = this.response;
        updateDomWithResults(results);
      } else {
        displayError();
      }
    }
  };

  xhr.open('GET', 'https://glacial-island-27399.herokuapp.com/api/press');
  xhr.send(null);
})();
