var moment = require('moment');

var articleDefaults = {
  title: null,
  author: null,
  date: '1970-01-01',
  formattedDate: null,
  work: null,
  workItalics: true,
  preposition: 'in',
  parenthetical: null,
  href: null,
  tags: [],
};

var TAGS = {
  ARBITRATION: 'arbitration',
  BREAKING_NEWS: 'breaking news',
  DISINFORMATION: 'disinformation',
  GENDER_GAP: 'gender gap',
  HARASSMENT: 'harassment',
  TECHNOLOGY: 'technology',
  TWITTER: 'twitter',
  WIKIPEDIA: 'wikipedia',
};

var articles = [
  {
    title: 'The Tensions Behind Wikipedia’s New Code of Conduct',
    author: 'Stephen Harrison',
    date: '2021-03-03',
    work: 'Slate',
    href: 'https://slate.com/technology/2021/03/wikipedia-code-of-conduct-harassment.html',
    tags: [TAGS.WIKIPEDIA, TAGS.HARASSMENT],
  },
  {
    title: "Twitter's 'Birdwatch' Aims to Crowdsource Fight Against Misinformation",
    author: 'Shannon Bond',
    date: '2021-02-10',
    work: 'NPR',
    parenthetical: 'Radio show',
    href:
      'https://www.npr.org/2021/02/10/965839888/twitters-birdwatch-aims-to-crowdsource-fight-against-misinformations',
    tags: [TAGS.TECHNOLOGY, TAGS.TWITTER, TAGS.HARASSMENT, TAGS.DISINFORMATION],
  },
  {
    title: 'When the Capitol Was Attacked, Wikipedia Went to Work',
    author: 'Grace Gedye',
    date: '2021-02-04',
    work: 'Washington Monthly',
    href:
      'https://washingtonmonthly.com/2021/02/04/when-the-capitol-was-attacked-wikipedia-went-to-work/',
    tags: [TAGS.WIKIPEDIA, TAGS.BREAKING_NEWS],
  },
  {
    title: 'On its 20th birthday, Wikipedia might be the safest place online',
    author: 'Heather Kelly',
    date: '2021-01-15',
    work: 'The Washington Post',
    href: 'https://www.washingtonpost.com/technology/2021/01/15/wikipedia-20-year-anniversary/',
    tags: [TAGS.WIKIPEDIA, TAGS.DISINFORMATION, TAGS.BREAKING_NEWS],
  },
  {
    title: "Wikipedia At 20: The Promises And Pitfalls Of The 'Free Encyclopedia'",
    author: 'Carmen Baskauf and Lucy Nalpathanchil',
    date: '2021-01-28',
    work: 'WNPR',
    preposition: 'on',
    parenthetical: 'Radio show',
    href: 'https://www.wnpr.org/post/wikipedia-20-promises-and-pitfalls-free-encyclopedia',
    tags: [TAGS.WIKIPEDIA, TAGS.DISINFORMATION, TAGS.GENDER_GAP],
  },
  {
    title: 'Twitter wants your help fighting falsehoods. It’s risky, but it might just work',
    author: 'Alex Pasternack',
    date: '2021-01-28',
    work: 'FastCompany',
    href: 'https://www.fastcompany.com/90598070/twitter-birdwatch-misinformation-risks',
    tags: [TAGS.TECHNOLOGY, TAGS.TWITTER],
  },
  {
    title: 'Celebrating 20 years of Wikipedia',
    date: '2021-01-18',
    work: 'World Wide Web Foundation',
    workItalics: false,
    href: 'https://webfoundation.org/2021/01/celebrating-20-years-of-wikipedia/',
    tags: [TAGS.WIKIPEDIA, TAGS.BREAKING_NEWS],
  },
  {
    title: 'As a mob attacked the Capitol, a crowd built Wikipedia',
    author: 'Alex Pasternack',
    date: '2021-01-14',
    work: 'FastCompany',
    href: 'https://www.fastcompany.com/90593176/wikipedia-capitol-attack-name',
    tags: [TAGS.WIKIPEDIA, TAGS.BREAKING_NEWS],
  },
  {
    title: 'How Wikipedia is preparing for Election Day',
    author: 'Sara Morrison',
    date: '2020-11-02',
    work: "Vox's Recode",
    href:
      'https://www.vox.com/recode/2020/11/2/21541880/wikipedia-presidential-election-misinformation-social-media',
    tags: [TAGS.WIKIPEDIA, TAGS.BREAKING_NEWS, TAGS.HARASSMENT, TAGS.DISINFORMATION],
  },
  {
    title:
      'Why Did It Take So Long for the Democratic Senate Candidate in Iowa to Get a Wikipedia Page?',
    author: 'Stephen Harrison',
    date: '2020-10-27',
    work: 'Slate',
    href:
      'https://slate.com/technology/2020/10/theresa-greenfield-iowa-senate-race-wikipedia-page.html',
    tags: [TAGS.WIKIPEDIA, TAGS.GENDER_GAP],
  },
  {
    title: "Wikipedia's Plan to Resist Election Day Misinformation",
    author: 'Noam Cohen',
    date: '2020-10-26',
    work: 'Wired',
    href: 'https://www.wired.com/story/wikipedias-plan-to-resist-election-day-misinformation/',
    tags: [TAGS.WIKIPEDIA, TAGS.BREAKING_NEWS, TAGS.DISINFORMATION],
  },
  {
    title:
      'Wikipedia is a world built by and for men. Rosie Stephenson-Goodknight is changing that.',
    author: 'Rachael Allen',
    date: '2020-04-11',
    work: 'The Lily',
    href:
      'https://www.thelily.com/wikipedia-is-a-world-built-by-and-for-men-rosie-stephenson-goodnight-is-changing-that/',
    tags: [TAGS.WIKIPEDIA, TAGS.GENDER_GAP],
  },
  {
    title: 'The Culture War Has Finally Come For Wikipedia',
    author: 'Joseph Bernstein',
    date: '2019-06-27',
    work: 'BuzzFeed News',
    href: 'https://www.buzzfeednews.com/article/josephbernstein/wikipedia-ban-editor-culture-war',
    tags: [TAGS.WIKIPEDIA, TAGS.ARBITRATION],
  },
  {
    title: "Why Wikipedia's 'Nuclear Option' Is the Right Call",
    author: 'Stephen Harrison',
    date: '2018-12-17',
    work: 'Slate',
    href:
      'https://slate.com/technology/2018/12/wikipedia-nuclear-option-administrators-unself-banning.html',
    tags: [TAGS.WIKIPEDIA, TAGS.TECHNOLOGY],
  },
  {
    title: 'Privacy and Harassment on the Internet',
    author: 'Katherine Maher',
    date: '2016-10-29',
    work: 'MozFest 2016',
    workItalics: false,
    preposition: 'at',
    parenthetical: 'Talk',
    href: 'https://en.wikisource.org/wiki/Privacy_and_Harassment_on_the_Internet',
    tags: [TAGS.WIKIPEDIA, TAGS.HARASSMENT],
  },
  {
    title: "Wikipedia's Hostility to Women",
    author: 'Emma Paling',
    date: '2015-10-21',
    work: 'The Atlantic',
    href:
      'https://www.theatlantic.com/technology/archive/2015/10/how-wikipedia-is-hostile-to-women/411619/',
    tags: [TAGS.WIKIPEDIA, TAGS.ARBITRATION, TAGS.HARASSMENT],
  },
];

articles = articles.map(function (a) {
  var updatedArticle = Object.assign({}, articleDefaults, a);
  var m = moment(updatedArticle.date);
  if (m.year() !== 1970) {
    updatedArticle.formattedDate = m.format('MMMM D, YYYY');
  }
  updatedArticle.tags.sort();
  return updatedArticle;
});

articles.sort(function (a, b) {
  // Reverse chrono
  return moment(b.date) - moment(a.date);
});

exports.articles = articles;