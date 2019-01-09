// d3.csv('../data/cities.csv', data => console.log(data));

var yScale = d3
  .scaleLinear()
  .domain([0, 100, 500])
  .range([0, 50, 100])
  // .clamp(true);

console.log(yScale(0));
console.log(yScale(100));
console.log(yScale(24000));

d3.select('svg')
  .selectAll('rect')
  .data([14, 68, 24500, 430, 19, 1000, 5555])
  .enter()
  .append('rect')
  .attr('width', 10)
  .attr('height', d => yScale(d))
  .attr('x', (d, i) => i * 10)
  .attr('y', d => 100 - yScale(d))
  .style('fill', '#FE9922')
  .style("stroke", "#9A8B7A")
  .style('stroke-width', '1');
