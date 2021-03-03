var moment = require('moment');

var articleDefaults = {
  title: null,
  author: null,
  date: '1970-01-01',
  formattedDate: null,
  work: null,
  href: null,
  quote: null,
  tags: [],
};

var TAGS = {
  BREAKING_NEWS: 'breaking news',
  HARASSMENT: 'harassment',
  TECHNOLOGY: 'technology',
  TWITTER: "twitter",
  WIKIPEDIA: 'wikipedia',
}

var articles = [
  {
    title: "The Tensions Behind Wikipedia’s New Code of Conduct",
    author: "Stephen Harrison",
    date: "2021-03-03",
    work: "Slate",
    href: "https://slate.com/technology/2021/03/wikipedia-code-of-conduct-harassment.html",
    quote: "In February, Molly White, age 27, received yet another creepy message... For White, the threat was one more example of the harassment she has received because she is one of Wikipedia's most prolific female contributors.",
    tags: [TAGS.WIKIPEDIA, TAGS.HARASSMENT],
  },
  {
    title: "Twitter's 'Birdwatch' Aims to Crowdsource Fight Against Misinformation",
    author: "Shannon Bond",
    date: "2021-02-10",
    work: "NPR",
    href: "https://www.npr.org/2021/02/10/965839888/twitters-birdwatch-aims-to-crowdsource-fight-against-misinformations",
    quote: '"What if there\'s an accurate tweet and someone fact checks that to say something inaccurate, then who fact checks that, and then who fact checks that?" asked Molly White, a long-time Wikipedia editor. White is also wary of the potential for harassment and "brigading" — when people gang up on a particular post or user. "The first thing I thought of when I saw the announcement about Birdwatch is, like, how on earth are they going to try to protect these people?" she said.',
    tags: [TAGS.TECHNOLOGY, TAGS.TWITTER, TAGS.HARASSMENT],
  },
  {
    title: "When the Capitol Was Attacked, Wikipedia Went to Work",
    author: "Grace Gedye",
    date: "2021-02-04",
    work: "Washington Monthly",
    href: "https://washingtonmonthly.com/2021/02/04/when-the-capitol-was-attacked-wikipedia-went-to-work/",
    quote: 'White, a software developer in Cambridge, Massachusetts who goes by the username GorillaWarfare, made multiple edits to the "Capitol Storming" page. "I was horrified and anxious to watch this all unfold," she explained, but editing on Wikipedia felt better than doomscrolling. "This is something I do often—if I\'m trying to understand what\'s happening or learn more about something, I will go edit the Wikipedia article about it as I do." White primarily edits pages related to right-wing online extremism.',
    tags: [TAGS.WIKIPEDIA, TAGS.BREAKING_NEWS]
  },
  {
    title: "How Wikipedia is preparing for Election Day",
    author: "Sara Morrison",
    date: "2020-11-02",
    work: "Vox's Recode",
    href: "https://www.vox.com/recode/2020/11/2/21541880/wikipedia-presidential-election-misinformation-social-media",
    quote: 'The election page lock was put in place on October 21 by Molly White, who goes by the handle "GorillaWarfare" on the site. She’s been a Wikipedia editor for almost 15 years and also serves as an administrator. This gives her some additional abilities, like the power to lock pages. But White is not anticipating any major issues on Wikipedia with regard to the upcoming election. "For the most part, things will be business as usual on Wikipedia," White told Recode. "Wikipedia editors and administrators have plenty of tools at our disposal to ensure that our readers are only seeing accurate information, even as things are changing quickly behind the scenes."',
    tags: [TAGS.WIKIPEDIA, TAGS.BREAKING_NEWS, TAGS.HARASSMENT]
  },
  {
    title: "Wikipedia's Plan to Resist Election Day Misinformation",
    author: "Noam Cohen",
    date: "2020-10-26",
    work: "Wired",
    href: "https://www.wired.com/story/wikipedias-plan-to-resist-election-day-misinformation/",
    quote: 'Per Wednesday\'s change, anyone editing the article about November\'s election must have had a registered account for more than 30 days and already made 500 edits across the site. "I am hoping this will reduce the issue of new editors trying to change the page to what they believe to be accurate when it doesn\'t meet the threshold that has been decided," wrote Molly White, a software engineer living in Boston known on Wikipedia as GorillaWarfare, who put the order in place. The protection for that article, she wrote, was meant to keep away bad actors as well as overly exuberant editors who feel the "urge to be the ones to introduce a major fact like the winner of a presidential election."',
    tags: [TAGS.WIKIPEDIA, TAGS.BREAKING_NEWS]
  }
];

articles = articles.map(function (a)  {
  var updatedArticle = Object.assign({}, articleDefaults, a);
  var m = moment(updatedArticle.date);
  if (m.year() !== 1970) {
    console.log('here')
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