google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

  var data = google.visualization.arrayToDataTable([
    ['Year', 'No of elephants killed',],
    ['2006', 178],
    ['2007', 345],
    ['2008', 498],
    ['2009', 422],
    ['2010', 604],
    ['2011', 1000],
    ['2012', 1139],
    ['2013', 779],
    ['2014', 779],
    ['2015', 663]
  ]);

  var options = {
    title: 'Monitoring of Illegal Killing of Elephants (2002-2015)',
    chartArea: {height: '100%'},
    hAxis: {
      title: 'Year'
    },
    vAxis: {
      title: 'Elephants killed illegaly'
    },
    legend: {
      position: 'none'
    },
    bar: {
      groupWidth: '60%'
    }
  };

  var chart = new google.visualization.BarChart(document.getElementById('mike_yr_data'));
  chart.draw(data, options);
  }
