// ---- BEGIN CHUNK OF CODE COPIED FROM UNDERSCORE.JS -------------------------
// https://underscorejs.org
// underscore.js is licensed under the MIT license
// https://github.com/jashkenas/underscore/blob/master/LICENSE

var restArguments = function(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, arguments[0], rest);
      case 2: return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
};

var delay = restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});

var debounce = function(func, wait, immediate) {
  var timeout, result;

  var later = function(context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };

  var debounced = restArguments(function(args) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      timeout = delay(later, wait, this, args);
    }

    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};
// ----- END UNDERSCORE.JS CODE -----------------------------------------------

function adjustRellax(illustration, rellax) {
  console.log('adjust')
  const hasRellax = illustration.classList.contains('rellax');
  if (hasRellax && window.innerWidth < 600) {
    return removeRellax(illustration, rellax);
  } else if (!hasRellax && window.innerWidth > 600) {
    return addRellax(illustration, rellax);
  }
}

var debouncedAdjustRellax = debounce(adjustRellax, 500);

function addRellax(illustration, rellax) {
  illustration.classList.add('rellax');
  illustration.setAttribute('data-rellax-speed', '1');
  return new Rellax('.rellax', {
    speed: -2
  });
}

function removeRellax(illustration, rellax) {
  illustration.classList.remove('rellax');
  illustration.removeAttribute('data-rellax-speed');
  if (rellax) {
    rellax.destroy()
  };
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
  window.addEventListener('resize', function() { debouncedAdjustRellax(illustrationElement, rellax)});
})();
