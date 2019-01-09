// d3.csv('../data/cities.csv', data => console.log(data));
d3.json('../data/tweets.json', data => {
  var tweetData = data.tweets;
  var nestedTweets = d3
    .nest()
    .key(d => d.user)
    .entries(tweetData);
  console.log(nestedTweets)
});
