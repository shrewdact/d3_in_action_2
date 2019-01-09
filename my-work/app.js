// d3.csv('../data/cities.csv', data => console.log(data));

d3.select('svg')
  .selectAll('rect')
  .data([15, 50, 22, 8, 100, 10])
  .enter()
  .append('rect')
  .attr('width', 10)
  .attr('height', d => d)
  .style('opacity', 0.25)
  .attr('x', (d, i) => i * 10)
  .attr('y', (d, i) => 100 - d);
