const post = {
  title: 'T',
  body: 'Y',
  author: 'Lenny',
  views: 50,
  comments: [
    { author: 'G', body: 'TT' },
    { author: 'G', body: 'TT' },
  ],
  isLive: true,
};

// Constructor Function

console.log(post);
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const post2 = new Post();

post2.title = 'Titulo';
post2.body = 'TTTTffff';
post2.author = 'Carl';
post2.comments = [
  { author: 'G', body: 'TT' },
  { author: 'G', body: 'TT' },
];

console.log(post2);
