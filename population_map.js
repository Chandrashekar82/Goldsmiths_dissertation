var map = AmCharts.makeChart( "mapdiv", {
  "type": "map",
  "theme": "dark",
  "dataProvider": {
    "map": "worldHigh",
    "zoomLevel": 2.8,
    "zoomLongitude": 30,
    "zoomLatitude": 0,
    "areas": [ {
        "title": "Mali",
        "id": "ML",
        "color": "#83c2ba",
        "customData": "an estimated 253 elephants",
        "customData2": "10%",
      }, {
        "title": "Niger",
        "id": "NE",
        "color": "#83c2ba",
        "customData": "an unknown number of elephants",
      }, {
        "title": "Senegal",
        "id": "SN",
        "color": "#83c2ba",
        "customData": "an unknown number of elephants",
      }, {
        "title": "Guinea-Bissau",
        "id": "GW",
        "color": "#83c2ba",
        "customData": "an unknown number of elephants",
      }, {
        "title": "Guinea",
        "id": "GN",
        "color": "#83c2ba",
        "customData": "an unknown number of elephants",
      }, {
        "title": "Sierra Leone",
        "id": "SL",
        "color": "#83c2ba",
        "customData": "an unknown number of elephants",
      }, {
        "title": "Liberia",
        "id": "LR",
        "color": "#83c2ba",
        "customData": "an estimated 124 elephants",
      }, {
        "title": "Ivory Coast",
        "id": "CI",
        "color": "#83c2ba",
        "customData": "an estimated 189 elephants",
      }, {
        "title": "Ghana",
        "id": "GH",
        "color": "#83c2ba",
        "customData": "an estimated 994 elephants",
      }, {
      	"title": "Togo",
        "id": "TG",
        "color": "#83c2ba",
        "customData": "an unknown number of elephants",
      }, {
        "title": "Burkina Faso",
        "id": "BF",
        "color": "#83c2ba",
        "customData": "an estimated 6,850 elephants",
      }, {
        "title": "Benin",
        "id": "BJ",
        "color": "#83c2ba",
        "customData": "an estimated 2,894 elephants",
      }, {
        "title": "Nigeria",
        "id": "NG",
        "color": "#83c2ba",
        "customData": "an estimated 94 elephants",
      }, {
        "title": "South Sudan",
        "id": "SS",
        "color": "#ebdb8b",
        "customData": "an estimated 7,103 elephants",
      }, {
        "title": "Kenya",
        "id": "KE",
        "color": "#ebdb8b",
        "customData": "an estimated 22,809 elephants",
      }, {
        "title": "Uganda",
        "id": "UG",
        "color": "#ebdb8b",
        "customData": "an estimated 4,923 elephants",
      }, {
        "title": "Ethiopia",
        "id": "ET",
        "color": "#ebdb8b",
        "customData": "an estimated 1,017 elephants",
      }, {
        "title": "Rwanda",
        "id": "RW",
        "color": "#ebdb8b",
        "customData": "an estimated 88 elephants",
      }, {
        "title": "Tanzania",
        "id": "TZ",
        "color": "#ebdb8b",
        "customData": "an estimated 50,433 elephants",
      }, {
        "title": "Somalia",
        "id": "SO",
        "color": "#ebdb8b",
        "customData": "an unknown number of elephants",
      }, {
        "title": "Angola",
        "id": "AO",
        "color": "#67b7dc",
        "customData": "an estimated 3,396 elephants",
      }, {
        "title": "Zambia",
        "id": "ZM",
        "color": "#67b7dc",
        "customData": "an estimated 21,967 elephants",
      }, {
        "title": "Malawi",
        "id": "MW",
        "color": "#67b7dc",
        "customData": "an estimated 1,307 elephants",
      }, {
        "title": "Mozambique",
        "id": "MZ",
        "color": "#67b7dc",
        "customData": "an estimated 10,884 elephants",
      }, {
        "title": "Botswana",
        "id": "BW",
        "color": "#67b7dc",
        "customData": "an estimated 131,626 elephants",
      }, {
        "title": "Namibia",
        "id": "NA",
        "color": "#67b7dc",
        "customData": "an estimated 22,754 elephants",
      }, {
        "title": "Swaziland",
        "id": "SZ",
        "color": "#67b7dc",
        "customData": "an estimated 42 elephants",
      }, {
        "title": "South Africa",
        "id": "ZA",
        "color": "#67b7dc",
        "customData": "an estimated 18,841 elephants",
      }, {
        "title": "Zimbabwe",
        "id": "ZW",
        "color": "#67b7dc",
        "customData": "an estimated 82,630 elephants",
      }, {
        "title": "Chad",
        "id": "TD",
        "color": "#db8383",
        "customData": "an estimated 794 elephants",
      }, {
        "title": "Cameroon",
        "id": "CM",
        "color": "#db8383",
        "customData": "an estimated 6,830 elephants",
      }, {
        "title": "Central African Republic",
        "id": "CF",
        "color": "#db8383",
        "customData": "an estimated 702 elephants",
      }, {
        "title": "Democratic Rep of Congo",
        "id": "CD",
        "color": "#db8383",
        "customData": "an estimated 1,794 elephants",
      }, {
        "title": "Republic of Congo",
        "id": "CG",
        "color": "#db8383",
        "customData": "an estimated 6,057 elephants",
      }, {
        "title": "Gabon",
        "id": "GA",
        "color": "#db8383",
        "customData": "an estimated 7,058 elephants",
      }, {
        "title": "Equatorial Guinea",
        "id": "GQ",
        "color": "#db8383",
        "customData": "an estimated 884 elephants",
      }
    ]
  },

  "areasSettings": {
    "rollOverOutlineColor": "#FFFFFF",
    "rollOverColor": "#CC0000",
    "alpha": 0.8,
    "unlistedAreasAlpha": 0.1,
    "balloonText": "There are [[customData]] in [[title]]",
  },

  // "legend": {
  //   "width": "100%",
  //   "marginRight": 27,
  //   "marginLeft": 27,
  //   "equalWidths": false,
  //   "backgroundAlpha": 0.5,
  //   "backgroundColor": "#FFFFFF",
  //   "borderColor": "#ffffff",
  //   "borderAlpha": 1,
  //   "top": 450,
  //   "left": 0,
  //   "horizontalGap": 10,
  //   "data": [ {
  //     "title": "Southern African range",
  //     "color": "#67b7dc"
  //   }, {
  //     "title": "Eastern African range",
  //     "color": "#ebdb8b"
  //   }, {
  //     "title": "Western African range",
  //     "color": "#83c2ba"
  //   }, {
  //     "title": "Central African range",
  //     "color": "#db8383"
  //   } ]
  // },
  "export": {
    "enabled": false
  }

} );
