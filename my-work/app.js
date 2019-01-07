var someData = ['filler', 'filler', 'filler', 'filler'];

d3.select('body')
  .selectAll('div')
  .data(someData)
  .enter()
  .append('div')
  .html('Wow')
  .append('span')
  .html('Event More Wow')
  .style('font-weight', 900);
