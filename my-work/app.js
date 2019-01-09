var someNumbers = [17, 82, 9, 500, 40];
var smallerNumbers = someNumbers.filter(function(d) {
  return d <= 40;
});
var someColors = ['blue', 'red', 'chartreuse', 'orange'];
var somePeople = [
  { name: 'Peter', age: 27 },
  { name: 'Sulayman', age: 24 },
  { name: 'K.C.', age: 49 }
];

d3.select('body')
  .selectAll('div')
  .data(smallerNumbers)
  .enter()
  .append('div')
  .html(function(d) {
    return d;
  });
