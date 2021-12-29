(function () {
  document.documentElement.className = document.documentElement.className.replace(
    /\bno-js\b/,
    'js',
  );

  // Mobile nav
  var expandNavigationToggle = document.getElementById('expand-navigation-toggle');
  expandNavigationToggle.setAttribute('aria-expanded', false);
  expandNavigationToggle.addEventListener('click', function () {
    // Toggle and record whether the menu is expanded
    var isExpanded = document.querySelector('nav.navigation').classList.toggle('expanded');

    // Update a11y details as needed
    this.setAttribute('aria-expanded', isExpanded);

    // Switch button icon and screenreader text between hamburger menu and close button
    var faIcon = this.querySelector('i');
    var screenreaderText = this.querySelector('span.sr-only');
    setTimeout(function () {
      faIcon.classList.toggle('fa-bars');
      faIcon.classList.toggle('fa-times');
      screenreaderText.innerHTML = `${isExpanded ? 'Collapse' : 'Expand'} navigation`;
    }, 200);
  });
})();
