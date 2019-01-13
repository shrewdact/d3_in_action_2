d3.csv('../data/boxplot.csv', scatterplot);

function scatterplot(data) {
  const tickSize = 470;
  const xScale = d3
    .scaleLinear()
    .domain([1, 8])
    .range([20, tickSize]);

  const yScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([tickSize + 10, 20]);

  const yAxis = d3
    .axisRight()
    .scale(yScale)
    .ticks(8)
    .tickSize(-tickSize);

  d3.select('svg')
    .append('g')
    .attr('transform', 'translate(470,0)')
    .attr('id', 'yAxisG')
    .call(yAxis);

  const xAxis = d3
    .axisBottom()
    .scale(xScale)
    .tickSize(-tickSize)
    .tickValues([1, 2, 3, 4, 5, 6, 7]);

  d3.select('svg')
    .append('g')
    .attr('transform', 'translate(0, 480)')
    .attr('id', 'xAxisG')
    .call(xAxis);

  d3.select('svg')
    .selectAll('circle.median')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'tweets')
    .attr('r', 5)
    .attr('cx', d => xScale(d.day))
    .attr('cy', d => yScale(d.median))
    .style('fill', 'darkgray');

  d3.select('svg')
    .selectAll('g.box')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'box')
    .attr(
      'transform',
      d => 'translate(' + xScale(d.day) + ',' + yScale(d.median) + ')'
    )
    .each(function(d, i) {
      d3.select(this)
        .append('rect')
        .attr('width', 20)
        .attr('height', yScale(d.q1) - yScale(d.q3));
    });
}
