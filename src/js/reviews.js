function onHighlightClick(event) {
  var detailsId = event.target.getAttribute('aria-details');
  var targetComment = document.querySelector(`#${detailsId}`);

  // Highlight and scroll to it
  targetComment.classList.toggle('selected');
  var prefersReducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var prefersReducedMotion = !prefersReducedMotionQuery || prefersReducedMotionQuery.matches;
  targetComment.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'nearest',
  });

  // Ensure this is the only highlighted comment
  var selectedComments = document.getElementsByClassName('selected');
  for (var i = 0; i < selectedComments.length; i++) {
    if (selectedComments[i].id !== detailsId) {
      selectedComments[i].classList.remove('selected');
    }
  }

  // Avoid bubbling through to the deselectAll function
  event.stopPropagation();
}

function deselectAllAnnotations() {
  var selectedComments = document.getElementsByClassName('selected');
  for (var i = 0; i < selectedComments.length; i++) {
    selectedComments[i].classList.remove('selected');
  }
}

function onInitialLoad() {
  document.documentElement.className = document.documentElement.className.replace(
    /\bno-js\b/,
    'js',
  );

  var highlights = document.getElementsByTagName('mark');
  for (var i = 0; i < highlights.length; i++) {
    highlights[i].addEventListener('click', onHighlightClick);
  }
  document.addEventListener('click', deselectAllAnnotations);
}

(function () {
  if (document.readyState != 'loading') {
    onInitialLoad();
  } else {
    document.addEventListener('DOMContentLoaded', onInitialLoad);
  }
})();
