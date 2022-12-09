function onInitialLoad() {
  try {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status === 200) {
        var resp = JSON.parse(xhr.response);
        var commit = resp[0].commit;
        var isoDate = commit.committer.date;
        var date = new Date(isoDate);
        var dateString = new Intl.DateTimeFormat('en-us', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }).format(date);

        var lastUpdatedEl = document.querySelector('#last-updated');
        lastUpdatedEl.innerHTML = 'Last updated ';
        var linkEl = document.createElement('a');
        var linkText = document.createTextNode(dateString);
        linkEl.appendChild(linkText);
        linkEl.href = resp[0].html_url;
        linkEl.target = '_blank';
        lastUpdatedEl.appendChild(linkEl);
        lastUpdatedEl.innerHTML += '.';
      }
    };
    xhr.open('GET', 'https://api.github.com/repos/molly/ftx-contagion/commits?per_page=1');
    xhr.send();
  } catch (err) {
    // No handling; can just not show the last updated info if something goes wrong.
  }
}

(function () {
  if (document.readyState != 'loading') {
    onInitialLoad();
  } else {
    document.addEventListener('DOMContentLoaded', onInitialLoad);
  }
})();
