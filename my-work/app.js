// d3.csv('../data/cities.csv', data => console.log(data));
d3.csv('../data/cities.csv', (error, data) => {
  if (error) {
    console.error(error);
  } else {
    dataViz(data);
  }
});

function dataViz(incomingData) {
  d3.select('body')
    .selectAll('div.cities')
    .data(incomingData)
    .enter()
    .append('div')
    .attr('class', 'cities')
    .html(d => d.label);
}
