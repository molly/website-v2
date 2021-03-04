(function () {
  var initialUrlTags = getTagsListFromUrl();
  if (initialUrlTags.length > 0) {
    for (var i = 0; i < initialUrlTags.length; i++) {
      var buttonEl = document.getElementsByClassName('tag tag-' + initialUrlTags[i])[0];
      buttonEl.classList.add('active');
    }
    filter();
  }
})();

function urlEncodeTags(tags) {
  const tagsStr = Array.isArray(tags) ? tags.join('-') : tags;
  return encodeURIComponent(tagsStr.replace(' ', '_'));
}

function getTagsListFromUrl(url = null) {
  if (!url) {
    url = new URL(window.location);
  }
  var urlParam = url.searchParams.get('tags');
  if (urlParam) {
    return decodeURIComponent(urlParam.replace('_', ' ')).split('-');
  }
  return [];
}

// eslint-disable-next-line no-unused-vars
function onTagClick(tag) {
  // Mark button as active or inactive
  var buttonEl = document.getElementsByClassName('tag tag-' + tag)[0];

  // Set URL param
  var url = new URL(window.location);
  var tags = getTagsListFromUrl(url);
  if (!tags) {
    url.searchParams.set('tags', urlEncodeTags(tag));
  } else {
    var newTagsArr;
    if (tags.includes(tag)) {
      newTagsArr = tags.filter(function (t) {
        return t !== tag;
      });
    } else {
      newTagsArr = tags.slice();
      newTagsArr.push(tag);
    }
    const newTagString = urlEncodeTags(newTagsArr);
    if (newTagString == '') {
      url.searchParams.delete('tags');
    } else {
      url.searchParams.set('tags', newTagString);
    }
  }
  history.pushState({}, '', url);
  filter();
}

function filter() {
  var urlTags = getTagsListFromUrl();
  var articleEls = document.getElementsByClassName('article');
  for (var i = 0; i < articleEls.length; i++) {
    var articleTags = articleEls[i].dataset.tags.split(',');
    if (
      urlTags.every(function (t) {
        return articleTags.includes(t);
      })
    ) {
      articleEls[i].classList.remove('hidden');
    } else {
      articleEls[i].classList.add('hidden');
    }
  }
}
