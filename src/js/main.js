(function () {
  document.documentElement.className = document.documentElement.className.replace(
    /\bno-js\b/,
    'js',
  );

  var expandNavigationToggle = document.getElementById('expand-navigation-toggle');
  expandNavigationToggle.addEventListener('click', function () {
    document.querySelector('nav.navigation').classList.toggle('expanded');
    var faIcon = this.querySelector('i');
    setTimeout(function () {
      faIcon.classList.toggle('fa-bars');
      faIcon.classList.toggle('fa-times');
    }, 200);
  });
})();
