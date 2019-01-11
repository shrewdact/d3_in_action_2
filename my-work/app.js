// d3.csv('../data/cities.csv', data => console.log(data));
// d3.csv('../data/cities.csv', (error, data) => dataViz(data));
d3.json('../data/tweets.json', (error, data) => {
  console.log(data);
  dataViz(data.tweets);
});

d3.selectAll('g').data([0,1,2,3]).exit().remove();

/* function dataViz(incomingData) {
  incomingData.forEach(d => {
    d.impact = d.favorites.length + d.retweets.length;
    d.tweetTime = new Date(d.timestamp);
  });

  var maxImpact = d3.max(incomingData, d => d.impact);
  var startEnd = d3.extent(incomingData, d => d.tweetTime);

  var timeRamp = d3
    .scaleTime()
    .domain(startEnd)
    .range([20, 480]);

  var yScale = d3
    .scaleLinear()
    .domain([0, maxImpact])
    .range([0, 460]);

  var radiusScale = d3
    .scaleLinear()
    .domain([0, maxImpact])
    .range([1, 20]);

  var colorScale = d3
    .scaleLinear()
    .domain([0, maxImpact])
    .range(['white', '#75739F']);

  var tweetG = d3
    .select('svg')
    .selectAll('g')
    .data(incomingData)
    .enter()
    .append('g')
    .attr(
      'transform',
      d =>
        'translate(' +
        timeRamp(d.tweetTime) +
        ',' +
        (480 - yScale(d.impact)) +
        ')'
    );

  tweetG
    .append('circle')
    .attr('r', d => radiusScale(d.impact))
    .style('fill', '#75739F')
    .style('stroke', 'black')
    .style('stroke-width', '1px');

  tweetG.append('text').text(d => d.user + '-' + d.tweetTime.getHours());
  // d3.select('svg')
  //   .selectAll('circle')
  //   .data(incomingData)
  //   .enter()
  //   .append('circle')
  //   .attr('r', d => radiusScale(d.impact))
  //   .attr('cx', d => timeRamp(d.tweetTime))
  //   .attr('cy', d => 480 - yScale(d.impact))
  //   .style('fill', d => colorScale(d.impact))
  //   .style('stroke', 'black')
  //   .style('stroke-width', '1px'); */
