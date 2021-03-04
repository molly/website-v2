function toggleAccordion() {
  var ariaExpanded = this.getAttribute('aria-expanded');
  var panelId = this.id + '-answer';
  var panel = document.getElementById(panelId);

  // Animate panel open/close
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }

  // Set aria attributes
  if (ariaExpanded === 'true') {
    this.setAttribute('aria-expanded', false);
    panel.setAttribute('aria-hidden', true);
  } else {
    this.setAttribute('aria-expanded', true);
    panel.setAttribute('aria-hidden', false);
  }
}

setTimeout(function () {
  var accordions = document.getElementsByClassName('accordion');

  // Add click/keypress handlers
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', toggleAccordion);
    accordions[i].addEventListener('keypress', function (e) {
      // Toggle panel on space to emulate button functionality for assistive tech
      if (e.keyCode == 32) {
        toggleAccordion.call(this);
      }
    });
  }

  // Open any panel specified in URL
  var hash = window.location.hash ? window.location.hash.slice(1) : null;
  if (hash) {
    var question = document.getElementById(hash);
    if (question) {
      toggleAccordion.call(question);
    }
  }
});
