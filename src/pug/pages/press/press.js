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
  ARBITRATION: 'arbitration',
  BREAKING_NEWS: 'breaking news',
  DISINFORMATION: 'disinformation',
  GENDER_GAP: 'gender gap',
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
    tags: [TAGS.TECHNOLOGY, TAGS.TWITTER, TAGS.HARASSMENT, TAGS.DISINFORMATION],
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
    title: "On its 20th birthday, Wikipedia might be the safest place online",
    author: "Heather Kelly",
    date: "2021-01-15",
    work: "The Washington Post",
    href: "https://www.washingtonpost.com/technology/2021/01/15/wikipedia-20-year-anniversary/",
    quote: "This month, the online encyclopedia's strengths and quirks were on full display as hundreds of volunteers furiously worked to create a page for the Capitol riots as events unfolded Jan. 6. As it transitioned from a protest to something more violent, Wikipedia’s volunteer editors added key details while debating the article title, as shared by editor Molly White.",
    tags: [TAGS.WIKIPEDIA, TAGS.DISINFORMATION, TAGS.BREAKING_NEWS]
  },
  {
    title: "Twitter wants your help fighting falsehoods. It’s risky, but it might just work",
    author: "Alex Pasternack",
    date: "2021-01-28",
    work: "FastCompany",
    href: "https://www.fastcompany.com/90598070/twitter-birdwatch-misinformation-risks",
    quote: '"How will Twitter protect those who are targeted by people who are unhappy with being fact-checked?" asks Molly White, a software engineer and longtime Wikipedia editor.',
    tags: [TAGS.TECHNOLOGY, TAGS.TWITTER]
  },
  {
    title: "As a mob attacked the Capitol, a crowd built Wikipedia",
    author: "Alex Pasternack",
    date: "2021-01-14",
    work: "FastCompany",
    href: "https://www.fastcompany.com/90593176/wikipedia-capitol-attack-name",
    quote: 'At the peak of editing, there was a change being saved every 10 seconds, estimates Molly White, a software developer and longtime Wikipedia editor who began working on the article in its earliest minutes... About 24 hours after the attack began, she and Moore and 406 other volunteers had crafted a detailed, even-keeled account of an event as it was unfolding—5,000 words long, with 305 references. Those numbers have since mushroomed, along with page views: 1.8 million and counting.',
    tags: [TAGS.WIKIPEDIA, TAGS.BREAKING_NEWS]
  },
  {
    title: "How Wikipedia is preparing for Election Day",
    author: "Sara Morrison",
    date: "2020-11-02",
    work: "Vox's Recode",
    href: "https://www.vox.com/recode/2020/11/2/21541880/wikipedia-presidential-election-misinformation-social-media",
    quote: 'The election page lock was put in place on October 21 by Molly White, who goes by the handle "GorillaWarfare" on the site. She’s been a Wikipedia editor for almost 15 years and also serves as an administrator. This gives her some additional abilities, like the power to lock pages. But White is not anticipating any major issues on Wikipedia with regard to the upcoming election. "For the most part, things will be business as usual on Wikipedia," White told Recode. "Wikipedia editors and administrators have plenty of tools at our disposal to ensure that our readers are only seeing accurate information, even as things are changing quickly behind the scenes."',
    tags: [TAGS.WIKIPEDIA, TAGS.BREAKING_NEWS, TAGS.HARASSMENT, TAGS.DISINFORMATION]
  },
  {
    title: "Why Did It Take So Long for the Democratic Senate Candidate in Iowa to Get a Wikipedia Page?",
    author: "Stephen Harrison",
    date: "2020-10-27",
    work: "Slate",
    href: "https://slate.com/technology/2020/10/theresa-greenfield-iowa-senate-race-wikipedia-page.html",
    quote: 'It seemed very clear to many Wikipedians, including Wales and White, that Greenfield satisfied the general notability guideline.',
    tags: [TAGS.WIKIPEDIA, TAGS.GENDER_GAP]
  },
  {
    title: "Wikipedia's Plan to Resist Election Day Misinformation",
    author: "Noam Cohen",
    date: "2020-10-26",
    work: "Wired",
    href: "https://www.wired.com/story/wikipedias-plan-to-resist-election-day-misinformation/",
    quote: 'Per Wednesday\'s change, anyone editing the article about November\'s election must have had a registered account for more than 30 days and already made 500 edits across the site. "I am hoping this will reduce the issue of new editors trying to change the page to what they believe to be accurate when it doesn\'t meet the threshold that has been decided," wrote Molly White, a software engineer living in Boston known on Wikipedia as GorillaWarfare, who put the order in place. The protection for that article, she wrote, was meant to keep away bad actors as well as overly exuberant editors who feel the "urge to be the ones to introduce a major fact like the winner of a presidential election."',
    tags: [TAGS.WIKIPEDIA, TAGS.BREAKING_NEWS, TAGS.DISINFORMATION]
  },
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
