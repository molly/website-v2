var moment = require('moment');

var articles = [
  {
    title: "The Tensions Behind Wikipedia’s New Code of Conduct",
    author: "Stephen Harrison",
    date: "2021-03-03",
    work: "Slate",
    href: "https://slate.com/technology/2021/03/wikipedia-code-of-conduct-harassment.html",
    quote: "In February, Molly White, age 27, received yet another creepy message... For White, the threat was one more example of the harassment she has received because she is one of Wikipedia's most prolific female contributors.",
    tags: ["wikipedia", "harassment"]
  },
];

articles.sort(function (a, b) {
  return moment(a.date) - moment(b.date);
});
articles.forEach(function (a)  {
  a.formattedDate = moment(a.date).format('MMMM D, YYYY');
  a.tags.sort();
});

exports.articles = articles;