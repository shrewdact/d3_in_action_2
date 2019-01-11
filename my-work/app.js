function createSoccerViz() {
  d3.csv('../data/worldcup.csv', data => {
    overallTeamViz(data);
  });
}

function overallTeamViz(incomingData) {
  d3.select('svg')
    .append('g')
    .attr('id', 'teamG')
    .attr('transform', 'translate(50, 300)')
    .selectAll('g')
    .data(incomingData)
    .enter()
    .append('g')
    .attr('class', 'overallG')
    .attr('transform', (d, i) => 'translate(' + i * 50 + ', 0)');
  var teamG = d3.selectAll('g.overallG');

  teamG
    .append('circle')
    .attr('r', 0)
    .transition()
    .delay((d, i) => i * 100)
    .duration(500)
    .attr('r', 40)
    .transition()
    .duration(500)
    .attr('r', 20);

  teamG
    .append('text')
    .attr('y', 30)
    .text(d => d.team);

  teamG.select('text').style('pointer-events', 'none');
  teamG.on('mouseover', highlightRegion);
  teamG.on('mouseout', unHighlight);

  function highlightRegion(d) {
    d3.select(this)
      .select('text')
      .classed('active', true)
      .attr('y', 10);
    d3.selectAll('g.overallG')
      .select('circle')
      .each(function(p) {
        p.region == d.region
          ? d3.select(this).classed('active', true)
          : d3.select(this).classed('inactive', true);
      });
    this.parentElement.appendChild(this);
  }

  function unHighlight() {
    d3.selectAll('g.overallG')
      .select('circle')
      .attr('class', '');
    d3.selectAll('g.overallG')
      .select('text')
      .classed('active', false)
      .attr('y', 30);
  }

  const dataKeys = Object.keys(incomingData[0]).filter(
    d => d !== 'team' && d !== 'region'
  );

  d3.select('#controls')
    .selectAll('button.teams')
    .data(dataKeys)
    .enter()
    .append('button')
    .on('click', buttonClick)
    .html(d => d);

  function buttonClick(datapoint) {
    var maxValue = d3.max(incomingData, d => parseFloat(d[datapoint]));
    var radiusScale = d3
      .scaleLinear()
      .domain([0, maxValue])
      .range([2, 20]);
    d3.selectAll('g.overallG')
      .select('circle')
      .transition()
      .duration(1000)
      .attr('r', d => radiusScale(d[datapoint]));
  }

  d3.select('circle').each(function(d, i) {
    console.log(d);
    console.log(i);
    console.log(this);
  });
}
