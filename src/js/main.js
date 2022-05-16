var DESCRIPTIONS = [
  'Wikipedia editor',
  'aspiring gardener',
  'friend to all dogs',
  'cryptocurrency skeptic',
  'possibly just a human-shaped cloud of bees',
  'reader of <a href="/reading" target="_blank">many things</a>',
  '<a href="/reading" target="_blank">maker of lists</a>',
  'occasional <a href="/press" target="_blank">pundit</a>',
  'actual-play podcast afficionado',
  'cat whisperer',
  'teller of bad jokes',
  'avid indoorsman',
  'rabbithole explorer',
  '<a href="https://www.theinformation.com/articles/cryptos-csi-how-molly-white-became-an-absolute-nightmare-for-web3-evangelists" target="_blank">"absolute nightmare"</a>',
  'landlubber',
  'seltzer sommelier',
  'hobbyist encyclopedist',
  'dog walk enthusiast',
  'free knowledge advocate',
  'happy camper',
];

function shuffleArray(arr) {
  var arrayCopy = arr.slice();
  var i, j, tmp;
  for (i = arrayCopy.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = tmp;
  }
  return arrayCopy;
}

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

  //Descriptions
  var shuffledDescriptions = shuffleArray(DESCRIPTIONS);
  var descriptionTarget = document.getElementById('description');
  var welcomeTarget = document.querySelector('.welcome');

  function setDescription() {
    if (shuffledDescriptions.length === 0) {
      shuffledDescriptions = shuffleArray(DESCRIPTIONS);
    }
    var choice = shuffledDescriptions.pop();
    descriptionTarget.innerHTML = ' and<br/>' + choice;
  }
  setDescription();

  var descriptionChanger = document.createElement('button');
  descriptionChanger.id = 'description-changer';
  descriptionChanger.innerHTML = 'What else?';
  welcomeTarget.appendChild(descriptionChanger);
  descriptionChanger.addEventListener('click', setDescription);
})();
