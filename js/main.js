
function adjustRellax(illustration, rellax) {
  const hasRellax = illustration.classList.contains('rellax');
  if (hasRellax && window.innerWidth < 600) {
    return removeRellax(illustration, rellax);
  } else if (!hasRellax && window.innerWidth > 600) {
    return addRellax(illustration, rellax);
  }
}

function addRellax(illustration, rellax) {
  illustration.classList.add('rellax');
  illustration.setAttribute('data-rellax-speed', '2');
  return new Rellax('.rellax', {
    speed: -5
  });
}

function removeRellax(illustration, rellax) {
  illustration.classList.remove('rellax');
  illustration.removeAttribute('data-rellax-speed');
  rellax.destroy();
  return null;
}

(function() {
  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/,'js');

  var illustrationElement = document.getElementById('molly-and-max');
  var rellax;

  // Add Rellax on mount if window is > 900px
  if (window.innerWidth > 600) {
    rellax = addRellax(illustrationElement, rellax)
  }

  // If window resizes, add or remove Rellax if needed (debounced)
  var resizeTimeout;
  window.addEventListener('resize', function() {
   clearTimeout(resizeTimeout);
   resizeTimeout = setTimeout(
    function() {
     rellax = adjustRellax(illustrationElement, rellax);
   },
   200
   );
 });
})();
