var chart = AmCharts.makeChart("chartdiv2", {
  "type": "serial",
  "categoryField": "sector",
  "rotate": true,
  "startDuration": 2,
  "categoryAxis": {
    "gridPosition": "start",
    "position": "right"
  },
  "trendLines": [],
  "graphs": [{
    "balloonText": "[[value]]$bn",
    "fillAlphas": 0.8,
    "id": "AmGraph-1",
    "lineAlpha": 0.2,
    "title": "Income",
    "type": "column",
    "valueField": "income",
    "lineColor": "#977734",
  }],
  "guides": [],
  "valueAxes": [{
    "id": "ValueAxis-1",
    "position": "top",
    "axisAlpha": 0,
    "reversed": false
  }],
  "allLabels": [],
  "balloon": {},
  "titles": [],
  "dataProvider": [{
    "sector": "Mining",
    "income": 28,
  }, {
    "sector": "Construction",
    "income": 27,
  }, {
    "sector": "Manufacturing",
    "income": 13.5,
  }, {
    "sector": "Financial Services",
    "income": 10,
  }, {
    "sector": "Scientific Research",
    "income": 4,
  }]
});
