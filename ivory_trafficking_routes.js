// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
// svg path for plane icon
var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

var map = AmCharts.makeChart( "chartdiv4", {
  "type": "map",
  "theme": "light",
  "dataProvider": {
    "map": "worldLow",
    "zoomLevel": 2.8,
    "zoomLongitude": 65.1341,
    "zoomLatitude": 10.1712,

    "areas": [ {
      "title": "China",
      "id": "CN",
      "color": "#FCD4D3",
    } , {
      "title": "Japan",
      "id": "JP",
      "color": "#FCD4D3",
    }, {
      "title": "Taiwan",
      "id": "TW",
      "color": "#FCD4D3",
    }, {
      "title": "Thailand",
      "id": "TH",
      "color": "#C0E1BF",
    }, {
      "title": "Cambodia",
      "id": "KH",
      "color": "#C0E1BF",
    }, {
      "title": "Laos",
      "id": "LA",
      "color": "#C0E1BF",
    }, {
      "title": "Vietnam",
      "id": "VN",
      "color": "#C0E1BF",
    }, {
      "title": "Malaysia",
      "id": "MY",
      "color": "#C0E1BF",
    }, {
      "title": "Singapore",
      "id": "SG",
      "color": "#C0E1BF",
    }, {
      "title": "Philippines",
      "id": "PH",
      "color": "#C0E1BF",
    }, {
      "title": "Sri Lanka",
      "id": "LK",
      "color": "#C0E1BF",
    }, {
      "title": "Dubai",
      "id": "AE",
      "color": "#C0E1BF",
    }, {
      "title": "Nigeria",
      "id": "NG",
      "color": "#C0E1BF",
    }, {
      "title": "Spain",
      "id": "ES",
      "color": "#C0E1BF",
    }, {
      "title": "Togo",
      "id": "TG",
      "color": "#C0E1BF",
    }, {
      "title": "Cameroon",
      "id": "CM",
      "color": "#F0EDBF",
    }, {
      "title": "Gabon",
      "id": "GA",
      "color": "#F0EDBF",
    }, {
      "title": "DR Congo",
      "id": "CD",
      "color": "#F0EDBF",
    }, {
      "title": "Central African Republic",
      "id": "CF",
      "color": "#F0EDBF",
    }, {
      "title": "Congo",
      "id": "CG",
      "color": "#F0EDBF",
    }, {
      "title": "Uganda",
      "id": "UG",
      "color": "#F0EDBF",
    }, {
      "title": "Zambia",
      "id": "ZM",
      "color": "#F0EDBF",
    }, {
      "title": "Kenya",
      "id": "KE",
      "color": "#F0EDBF",
    }, {
      "title": "Tanzania",
      "id": "TZ",
      "color": "#F0EDBF",
    }, {
      "title": "Malawi",
      "id": "MW",
      "color": "#F0EDBF",
    }, {
      "title": "Mozambique",
      "id": "MZ",
      "color": "#F0EDBF",
    }, {
      "title": "South Africa",
      "id": "ZA",
      "color": "#F0EDBF",
    } ],

    // "lines": [ {
    //   "latitudes": [ -14.843497, -29.528383 ],
    //   "longitudes": [ 34.920011, 24.835179 ]
    // }, {
    //   "latitudes": [ -29.528383, -15.276595 ],
    //   "longitudes": [ 24.835179, 37.799046 ]
    // }, {
    //   "latitudes": [ 51.5002, 59.3328 ],
    //   "longitudes": [ -0.1262, 18.0645 ]
    // }, {
    //   "latitudes": [ 51.5002, 40.4167 ],
    //   "longitudes": [ -0.1262, -3.7033 ]
    // }, {
    //   "latitudes": [ 51.5002, 46.0514 ],
    //   "longitudes": [ -0.1262, 14.5060 ]
    // }, {
    //   "latitudes": [ 51.5002, 48.2116 ],
    //   "longitudes": [ -0.1262, 17.1547 ]
    // }, {
    //   "latitudes": [ 51.5002, 44.8048 ],
    //   "longitudes": [ -0.1262, 20.4781 ]
    // }, {
    //   "latitudes": [ 51.5002, 55.7558 ],
    //   "longitudes": [ -0.1262, 37.6176 ]
    // }, {
    //   "latitudes": [ 51.5002, 38.7072 ],
    //   "longitudes": [ -0.1262, -9.1355 ]
    // }, {
    //   "latitudes": [ 51.5002, 54.6896 ],
    //   "longitudes": [ -0.1262, 25.2799 ]
    // }, {
    //   "latitudes": [ 51.5002, 64.1353 ],
    //   "longitudes": [ -0.1262, -21.8952 ]
    // }, {
    //   "latitudes": [ 51.5002, 40.4300 ],
    //   "longitudes": [ -0.1262, -74.0000 ]
    // } ],
    "images": [ {
      "id": "South Africa",
      "svgPath": targetSVG,
      "title": "South Africa",
      "latitude": -29.528383,
      "longitude": 24.835179,
      "scale": 1.5
    }, {
      "svgPath": targetSVG,
      "title": "Mozambique",
      "latitude": -15.276595,
      "longitude": 37.799046,
      "scale": 1.5
    }, {
      "svgPath": targetSVG,
      "title": "China",
      "latitude": 35.359633,
      "longitude": 98.355687,
      "scale": 1.5
    }, {
      "svgPath": targetSVG,
      "title": "Kenya",
      "latitude": 0.198341,
      "longitude": 37.846679,
      "scale": 1
    }, {
      "svgPath": targetSVG,
      "title": "Tanzania",
      "latitude": -7.062249,
      "longitude": 34.399242,
      "scale": 1
    }, {
      "svgPath": targetSVG,
      "title": "DR Congo",
      "latitude": -2.416242,
      "longitude": 20.887216,
      "scale": 1
    }, {
      "svgPath": targetSVG,
      "title": "Taiwan",
      "latitude": 23.138343,
      "longitude": 120.885657,
      "scale": 1
    }, {
      "svgPath": targetSVG,
      "title": "Malaysia",
      "latitude": 4.461626,
      "longitude": 102.200126,
      "scale": 1
    }, {
      "svgPath": targetSVG,
      "title": "Philippines",
      "latitude": 15.237750,
      "longitude": 121.155384,
      "scale": 1
    }, {
      "svgPath": targetSVG,
      "title": "Cameroon",
      "latitude": 3.197803,
      "longitude": 13.076526,
      "scale": 1
    }, {
      "svgPath": targetSVG,
      "title": "Hong Kong",
      "latitude": 22.414969,
      "longitude": 114.146313,
      "scale": 0.7
    }, {
      "svgPath": targetSVG,
      "title": "Vietnam",
      "latitude": 13.409796,
      "longitude": 108.198486,
      "scale": 0.7
    }, {
      "svgPath": targetSVG,
      "title": "Sri Lanka",
      "latitude": 8.319869,
      "longitude": 80.875263,
      "scale": 0.7
    }, {
      "svgPath": targetSVG,
      "title": "Singapore",
      "latitude": 1.355176,
      "longitude": 103.813219,
      "scale": 0.7
    }, {
      "svgPath": targetSVG,
      "title": "Laos",
      "latitude": 20.617258,
      "longitude": 102.381222,
      "scale": 0.7
    }, {
      "svgPath": targetSVG,
      "title": "Thailand",
      "latitude": 15.346642,
      "longitude": 101.457280,
      "scale": 0.7
    }, {
      "svgPath": targetSVG,
      "title": "Japan",
      "latitude": 38.647885,
      "longitude": 140.363585,
      "scale": 0.7
    }, {
      "svgPath": targetSVG,
      "title": "Nigeria",
      "latitude": 9.180436,
      "longitude": 8.308460,
      "scale": 0.7
    }, {
      "svgPath": targetSVG,
      "title": "Dubai",
      "latitude": 25.209118,
      "longitude": 55.296315,
      "scale": 0.7
    }, {
      "svgPath": targetSVG,
      "title": "Togo",
      "latitude": 7.633546,
      "longitude": 0.953543,
      "scale": 0.7
    } ]
  },

  "areasSettings": {
    "unlistedAreasColor": "#000000",
    "unlistedAreasAlpha": 0.2
  },

  "imagesSettings": {
    "color": "#000000",
    "rollOverColor": "#977734",
    "selectedColor": "#977734",
    "showLabel": true,
    "labelPosition": "middle",
    "labelFontSize": 8
  },

  "linesSettings": {
    "arc": -0.7, // this makes lines curved. Use value from -1 to 1
    "arrow": "middle",
    "color": "#000000",
    "alpha": 0.4,
    "arrowAlpha": 1,
    "arrowSize": 4
  },
  "zoomControl": {
    "gridHeight": 100,
    "draggerAlpha": 1,
    "gridAlpha": 0.2
  },

  "backgroundZoomsToTop": true,
  "linesAboveImages": true,
} );
