d3.csv('../data/tweetdata.csv', lineChart);

function lineChart(data) {
  const blue = '#5eaec5',
    green = '#92c463',
    orange = '#fe9a22';
  const xScale = d3
    .scaleLinear()
    .domain([1, 10, 5])
    .range([20, 480]);
  const yScale = d3
    .scaleLinear()
    .domain([0, 35])
    .range([480, 20]);
  const xAxis = d3
    .axisBottom()
    .scale(xScale)
    .tickSize(480)
    .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  d3.select('svg')
    .append('g')
    .attr('id', 'xAxisG')
    .call(xAxis);

  const yAxis = d3
    .axisRight()
    .scale(yScale)
    .ticks(10)
    .tickSize(480);

  d3.select('svg')
    .append('g')
    .attr('id', 'yAxisG')
    .call(yAxis);

  d3.select('svg')
    .selectAll('circle.tweets')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'tweets')
    .attr('r', 5)
    .attr('cx', d => xScale(d.day))
    .attr('cy', d => yScale(d.tweets))
    .style('fill', orange);

  d3.select('svg')
    .selectAll('circle.retweets')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'retweets')
    .attr('r', 5)
    .attr('cx', d => xScale(d.day))
    .attr('cy', d => yScale(d.retweets))
    .style('fill', blue);

  d3.select('svg')
    .selectAll('circle.favorites')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'favorites')
    .attr('r', 5)
    .attr('cx', d => xScale(d.day))
    .attr('cy', d => yScale(d.favorites))
    .style('fill', green);

  const lamdaXScale = d => xScale(d.day);

  var tweetLine = d3
    .line()
    .x(lamdaXScale)
    .y(d => yScale(d.tweets));

  var retweetLine = d3
    .line()
    .x(lamdaXScale)
    .y(d => yScale(d.retweets));

  var favLine = d3
    .line()
    .x(lamdaXScale)
    .y(d => yScale(d.favorites));

  d3.select('svg')
    .append('path')
    .attr('d', tweetLine(data))
    .attr('fill', 'none')
    .attr('stroke', orange)
    .attr('stroke-width', 2);


	d3.select('svg')
		.append('path')
		.attr('d', retweetLine(data))
		.attr('fill', 'none')
		.attr('stroke',blue)
		.attr('stroke-width', 2);

	d3.select('svg')
		.append('path')
		.attr('d',favLine(data))
		.attr('fill', 'none')
		.attr('stroke', green)
		.attr('stroke-width', 2);

}
