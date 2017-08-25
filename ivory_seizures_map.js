// svg path for target icon
var targetSVG = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNTYsNTEyQzExNC42MjUsNTEyLDAsMzk3LjM3NSwwLDI1NlMxMTQuNjI1LDAsMjU2LDBzMjU2LDExNC42MjUsMjU2LDI1NlMzOTcuMzc1LDUxMiwyNTYsNTEyeiBNMjU2LDY0ICBDMTQ5Ljk2OSw2NCw2NCwxNDkuOTY5LDY0LDI1NnM4NS45NjksMTkyLDE5MiwxOTJjMTA2LjAzLDAsMTkyLTg1Ljk2OSwxOTItMTkyUzM2Mi4wMzEsNjQsMjU2LDY0eiBNMjU2LDM4NCAgYy03MC42ODgsMC0xMjgtNTcuMzEyLTEyOC0xMjhjMC03MC42ODgsNTcuMzEyLTEyOCwxMjgtMTI4YzcwLjY4OCwwLDEyOCw1Ny4zMTIsMTI4LDEyOEMzODQsMzI2LjY4OCwzMjYuNjg4LDM4NCwyNTYsMzg0eiIvPjwvc3ZnPg==";

/**
 * Define marker data for each year
 */
var markers = [ {
  "year": 2012,
  "images": [{
      "imageURL": targetSVG,
      "title": "Tianjin (932kg from Tanzania, Mozambique & Malawi)",
      "latitude": 39.3434,
      "longitude": 117.3616,
      "color": "red"
    }, {
      "imageURL": targetSVG,
      "title": "Hai Phong (745kg)",
      "latitude": 20.8449,
      "longitude": 106.6881
    }, {
      "imageURL": targetSVG,
      "title": "Colombo (1,539kg from Mozambique)",
      "latitude": 6.9271,
      "longitude": 79.8612
    }, {
      "imageURL": targetSVG,
      "title": "Nairobi (2434kg)",
      "latitude": 1.2921,
      "longitude": 36.8219
    }, {
      "imageURL": targetSVG,
      "title": "Hong Kong (5,130kg)",
      "latitude": 22.3964,
      "longitude": 114.1095
    }, {
      "imageURL": targetSVG,
      "title": "Quanzhou (4,200kg)",
      "latitude": 24.8741,
      "longitude": 118.6757
    }, {
      "imageURL": targetSVG,
      "title": "Port Klang (6,034kg from Tanzania, Mozambique and central Africa)",
      "latitude": 2.9999,
      "longitude": 101.3928
    }, {
      "imageURL": targetSVG,
      "title": "Ho Chi Minh City (2,400kg)",
      "latitude": 10.8231,
      "longitude": 106.6297
    }, {
      "imageURL": targetSVG,
      "title": "New York City (1,000kg)",
      "latitude": 40.7128,
      "longitude": -74.0059
    }]
}, {
  "year": 2013,
  "images": [{
      "imageURL": targetSVG,
      "title": "Hong Kong (4,736kg from Tanzania & Mozambique)",
      "latitude": 22.3964,
      "longitude": 114.1095
    }, {
      "imageURL": targetSVG,
      "title": "Mombasa (12,492kg)",
      "latitude": 4.0435,
      "longitude": 39.6682
    }, {
      "imageURL": targetSVG,
      "title": "Singapore (1,800kg from Kenya)",
      "latitude": 1.3521,
      "longitude": 103.8198
    }, {
      "imageURL": targetSVG,
      "title": "Jebel Ali Port (867kg)",
      "latitude": 24.9857,
      "longitude": 55.0273
    }, {
      "imageURL": targetSVG,
      "title": "Mzuzu (2,640kg from Tanzania & Mozambique)",
      "latitude": 11.4390,
      "longitude": 34.0084
    }, {
      "imageURL": targetSVG,
      "title": "Dar es Salaam (1,089kg)",
      "latitude": 6.7924,
      "longitude": 39.2083
    }, {
      "imageURL": targetSVG,
      "title": "Lomé (700kg)",
      "latitude": 6.1725,
      "longitude": 1.2314
    }, {
      "imageURL": targetSVG,
      "title": "Hai Phong (4,618kg)",
      "latitude": 20.8449,
      "longitude": 106.6881
    }, {
      "imageURL": targetSVG,
      "title": "Bweyogerere (1,903kg from Kenya)",
      "latitude": 0.3354,
      "longitude": 32.6673
    }
    } ]
}, {
  "year": 2010,
  "images": [{
      "imageURL": targetSVG,
      "title": "Dublin",
      "latitude": 53.3441,
      "longitude": -6.2675
    }, {
      "imageURL": targetSVG,
      "title": "Rome",
      "latitude": 41.8955,
      "longitude": 12.4823
    }, {
      "imageURL": targetSVG,
      "title": "Riga",
      "latitude": 56.9465,
      "longitude": 24.1049
    }]
} ];

/**
 * Set up chart
 */
var map = AmCharts.makeChart( "chartdiv_seizures", {
  "type": "map",
  "theme": "light",
  "addClassNames": true,
  "dataProvider": {
    "map": "worldHigh",
    "images": markers[0].images
  },
  "imagesSettings": {
    "opacity": 1
  },
  "listeners": [{
    "event": "init",
    "method": function(e) {

      // init jQuery UI Slider
      $( "#slider" ).slider({
        "min": 0,
        "max": (markers.length - 1),
        "create": function( event, ui ) {
          var dataSet = markers[0];
          $("#slider .ui-slider-handle").text(dataSet.year);
        },
        "slide": function( event, ui ) {
          var dataSet = markers[ui.value];
          e.chart.dataProvider.images = dataSet.images;
          e.chart.validateData();
          $(ui.handle).text(dataSet.year);
        }
      });
    }
  }]
} );
