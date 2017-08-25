google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Country', 'Investment', { role: 'style' }],
        ['Zambia (Southern Africa)', 3, '#67b7dc'],
        ['Nigeria (Western Africa)', 6.2, '#83c2ba'],
        ['Mozambique (Southern Africa)', 4.1, '#67b7dc'],
        ['South Africa (Southern Africa)', 5, '#67b7dc'],
        ['Angola (Southern Africa)', 3.9, '#67b7dc'],
      ]);

      var data2 = google.visualization.arrayToDataTable([
        ['Sector', 'Investment'],
        ['Mining', 25.5],
        ['Construction', 25.3],
        ['Manufacturing', 13],
        ['Finance', 10],
        ['Others', 17.5]
      ]);

      var options = {
        title: 'By elephant range countries',
        titleTextStyle: {
          fontName: 'Raleway',
          fontSize: 14,
        },
        chartArea: {
          width: '75%'},
        legend: {
          position: 'none',
        },
        hAxis: {
          minValue: 0,
          gridlines: {
            color:'transparent'
            },
        },
      };

      var options2 = {
        title: 'FDI by sector',
        titleTextStyle: {
          fontName: 'Raleway',
          fontSize: 14,
        },
        chartArea: {width: '75%'},
        legend: {
          position: 'none',
        },
        hAxis: {
          minValue: 0,
          gridlines: {
            color:'transparent'
            },
        },
         colors: ['grey'],
      };

      var chart = new google.visualization.BarChart(document.getElementById('chinese_investment'));
      chart.draw(data, options);

      var chart = new google.visualization.BarChart(document.getElementById('chinese_investment2'));
      chart.draw(data2, options2);
    }
