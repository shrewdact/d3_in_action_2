// d3.csv('../data/cities.csv', data => console.log(data));
// d3.csv('../data/cities.csv', (error, data) => dataViz(data));
d3.json('../data/tweets.json', (error, data) => {
  dataViz(data.tweets);
});

function dataViz(incomingData) {

  console.log(incomingData)
  var nestedTweets = d3
    .nest()
    .key(d => d.user)
    .entries(incomingData);

  nestedTweets.forEach(d => {
    d.numTweets = d.values.length;
  });
  var maxTweets = d3.max(nestedTweets, d => d.numTweets);

  var yScale = d3
    .scaleLinear()
    .domain([0, maxTweets])
    .range([0, 500]);

  d3.select('svg').attr('style', 'height: 480px; width: 600px;');

  d3.select('svg')
    .selectAll('rect')
    .data(nestedTweets)
    .enter()
    .append('rect')
    .attr('width', 50)
    .attr('height', d => yScale(d.numTweets))
    .attr('x', (d, i) => i * 60)
    .attr('y', d => 480 - yScale(d.numTweets))
    .style('fill', '#FE9922')
    .style('stroke', '#9A8B7A')
    .style('stroke-width', '1px')
}
