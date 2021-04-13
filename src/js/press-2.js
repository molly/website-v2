function clearArticlesContainer() {
  var articlesContainer = document.getElementById('articlesContainer');
  while (articlesContainer.firstChild) {
    articlesContainer.removeChild(articlesContainer.firstChild);
  }
}

function toggleLoadingSpinner(show) {
  var loadingEl = document.getElementById('loading');
  loadingEl.setAttribute('aria-hidden', show ? 'false' : 'true');
  if (show) {
    var articlesEl = document.getElementsByClassName('articles')[0];
    articlesEl.setAttribute('aria-busy', 'true');
  }
}

function createTitle(article) {
  var titleEl = document.createElement('div');
  var titleLink = document.createElement('a');
  titleLink.href = article.href;
  var titleLinkText = document.createTextNode('"' + article.title + '"');
  titleLink.appendChild(titleLinkText);
  titleEl.appendChild(titleLink);

  if (article.parenthetical) {
    var parenText = document.createTextNode(' (' + article.parenthetical + ')');
    titleEl.appendChild(parenText);
  }

  if (article.parenthetical || !article.title.match(/[.?!]$/m)) {
    var periodText = document.createTextNode('.');
    titleEl.appendChild(periodText);
  }

  return titleEl;
}

function createByline(article) {
  var bylineEl = document.createElement('div');
  if (article.author) {
    var authorText = document.createTextNode(article.author + ' ' + article.preposition);
    bylineEl.appendChild(authorText);
  }
  if (article.work) {
    var workText = document.createTextNode(' ' + article.work + '. ');
    if (!article.workItalics) {
      bylineEl.appendChild(workText);
    } else {
      var workEl = document.createElement('i');
      workEl.appendChild(workText);
      bylineEl.appendChild(workEl);
    }
  }
  if (article.publisher) {
    var publisherText = document.createTextNode(' ' + article.publisher + '. ');
    bylineEl.appendChild(publisherText);
  }
  if (article.formattedDate) {
    var dateText = document.createTextNode(article.formattedDate + '.');
    bylineEl.appendChild(dateText);
  }
  return bylineEl;
}

function createTags(article) {
  var tagsEl = document.createElement('div');
  tagsEl.classList.add('tags');
  var tags = article.tags
    .map(function (tag) {
      return tag.toLowerCase();
    })
    .join(', ');
  var tagsText = document.createTextNode(tags);
  tagsEl.appendChild(tagsText);
  return tagsEl;
}

function updateDomWithArticles(articlesResp) {
  clearArticlesContainer();
  toggleLoadingSpinner(false);

  var articlesContainer = document.getElementById('articlesContainer');
  for (var i = 0; i < articlesResp.results.length; i++) {
    var article = articlesResp.results[i];
    var articleEl = document.createElement('div');
    articleEl.classList.add('article');
    articleEl.setAttribute('data-tags', JSON.stringify(article.tags));

    var titleEl = createTitle(article);
    articleEl.appendChild(titleEl);

    var bylineEl = createByline(article);
    articleEl.appendChild(bylineEl);

    if (article.tags) {
      var tagsEl = createTags(article);
      articleEl.appendChild(tagsEl);
    }

    articlesContainer.appendChild(articleEl);
  }

  var articlesEl = document.getElementsByClassName('articles')[0];
  articlesEl.setAttribute('busy', 'false');
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
      if (xhr.status >= 200 && xhr.status < 300) {
        var results = this.response;
        updateDomWithArticles(results);
      } else {
        displayError();
      }
    }
  };

  xhr.open('GET', 'https://glacial-island-27399.herokuapp.com/api/press?limit=10');
  xhr.send(null);
})();
