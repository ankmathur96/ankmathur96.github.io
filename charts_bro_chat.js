var chartData = generateChartData();
var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "autoMarginOffset": 20,
    "marginTop": 7,
    "dataProvider": chartData,
    "valueAxes": [{
        "axisAlpha": 0.2,
        "dashLength": 1,
        "position": "left"
    }],
    "mouseWheelZoomEnabled": true,
    "graphs": [{
        "id": "g1",
        "balloonText": "[[value]]",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "hideBulletsCount": 50,
        "title": "red line",
        "valueField": "visits",
        "useLineColorForBulletBorder": true,
        "balloon":{
            "drop":true
        }
    }],
    "chartScrollbar": {
        "autoGridCount": true,
        "graph": "g1",
        "scrollbarHeight": 40
    },
    "chartCursor": {
       "limitToGraph":"g1"
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "axisColor": "#DADADA",
        "dashLength": 1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    }
});

chart.addListener("rendered", zoomChart);
zoomChart();

// this method is called when chart is first inited as we listen for "rendered" event
function zoomChart() {
    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
    chart.zoomToIndexes(chartData.length - 40, chartData.length - 1);
}


// generate some random data, quite different range
function generateChartData() {
    var data = '[{"count": 635, "timestamp": 1465891200.0}, {"count": 1044, "timestamp": 1465977600.0}, {"count": 573, "timestamp": 1466064000.0}, {"count": 197, "timestamp": 1466150400.0}, {"count": 539, "timestamp": 1466236800.0}, {"count": 502, "timestamp": 1466323200.0}, {"count": 248, "timestamp": 1466409600.0}, {"count": 513, "timestamp": 1466496000.0}, {"count": 334, "timestamp": 1466582400.0}, {"count": 1071, "timestamp": 1466668800.0}, {"count": 944, "timestamp": 1466755200.0}, {"count": 395, "timestamp": 1466841600.0}, {"count": 584, "timestamp": 1466928000.0}, {"count": 486, "timestamp": 1467014400.0}, {"count": 306, "timestamp": 1467100800.0}, {"count": 644, "timestamp": 1467187200.0}, {"count": 1045, "timestamp": 1467273600.0}, {"count": 545, "timestamp": 1467360000.0}, {"count": 157, "timestamp": 1467446400.0}, {"count": 122, "timestamp": 1467532800.0}, {"count": 212, "timestamp": 1467619200.0}, {"count": 374, "timestamp": 1467705600.0}, {"count": 779, "timestamp": 1467792000.0}, {"count": 893, "timestamp": 1467878400.0}, {"count": 567, "timestamp": 1467964800.0}, {"count": 324, "timestamp": 1468051200.0}, {"count": 310, "timestamp": 1468137600.0}, {"count": 434, "timestamp": 1468224000.0}, {"count": 550, "timestamp": 1468310400.0}, {"count": 414, "timestamp": 1468396800.0}, {"count": 728, "timestamp": 1468483200.0}, {"count": 260, "timestamp": 1468569600.0}, {"count": 290, "timestamp": 1468656000.0}, {"count": 248, "timestamp": 1468742400.0}, {"count": 294, "timestamp": 1468828800.0}, {"count": 529, "timestamp": 1468915200.0}, {"count": 400, "timestamp": 1469001600.0}, {"count": 604, "timestamp": 1469088000.0}, {"count": 503, "timestamp": 1469174400.0}, {"count": 160, "timestamp": 1469260800.0}, {"count": 469, "timestamp": 1469347200.0}, {"count": 398, "timestamp": 1469433600.0}, {"count": 450, "timestamp": 1469520000.0}, {"count": 976, "timestamp": 1469606400.0}, {"count": 785, "timestamp": 1469692800.0}, {"count": 457, "timestamp": 1469779200.0}, {"count": 468, "timestamp": 1469865600.0}, {"count": 397, "timestamp": 1469952000.0}, {"count": 376, "timestamp": 1470038400.0}, {"count": 428, "timestamp": 1470124800.0}, {"count": 213, "timestamp": 1470211200.0}, {"count": 418, "timestamp": 1470297600.0}, {"count": 192, "timestamp": 1470384000.0}, {"count": 174, "timestamp": 1470470400.0}, {"count": 231, "timestamp": 1470556800.0}, {"count": 332, "timestamp": 1470643200.0}, {"count": 591, "timestamp": 1470729600.0}, {"count": 204, "timestamp": 1470816000.0}, {"count": 462, "timestamp": 1470902400.0}, {"count": 457, "timestamp": 1470988800.0}, {"count": 195, "timestamp": 1471075200.0}, {"count": 248, "timestamp": 1471161600.0}, {"count": 243, "timestamp": 1471248000.0}, {"count": 282, "timestamp": 1471334400.0}, {"count": 326, "timestamp": 1471420800.0}, {"count": 194, "timestamp": 1471507200.0}, {"count": 34, "timestamp": 1471593600.0}, {"count": 501, "timestamp": 1471680000.0}, {"count": 291, "timestamp": 1471766400.0}, {"count": 275, "timestamp": 1471852800.0}, {"count": 246, "timestamp": 1471939200.0}, {"count": 187, "timestamp": 1472025600.0}, {"count": 494, "timestamp": 1472112000.0}, {"count": 324, "timestamp": 1472198400.0}, {"count": 250, "timestamp": 1472284800.0}, {"count": 369, "timestamp": 1472371200.0}, {"count": 378, "timestamp": 1472457600.0}, {"count": 274, "timestamp": 1472544000.0}, {"count": 350, "timestamp": 1472630400.0}, {"count": 644, "timestamp": 1472716800.0}, {"count": 310, "timestamp": 1472803200.0}, {"count": 149, "timestamp": 1472889600.0}, {"count": 67, "timestamp": 1472976000.0}, {"count": 258, "timestamp": 1473062400.0}, {"count": 200, "timestamp": 1473148800.0}, {"count": 216, "timestamp": 1473235200.0}, {"count": 229, "timestamp": 1473321600.0}, {"count": 261, "timestamp": 1473408000.0}, {"count": 100, "timestamp": 1473494400.0}, {"count": 253, "timestamp": 1473580800.0}, {"count": 383, "timestamp": 1473667200.0}, {"count": 450, "timestamp": 1473753600.0}, {"count": 312, "timestamp": 1473840000.0}, {"count": 194, "timestamp": 1473926400.0}, {"count": 381, "timestamp": 1474012800.0}, {"count": 378, "timestamp": 1474099200.0}, {"count": 211, "timestamp": 1474185600.0}, {"count": 279, "timestamp": 1474272000.0}, {"count": 357, "timestamp": 1474358400.0}, {"count": 297, "timestamp": 1474444800.0}, {"count": 421, "timestamp": 1474531200.0}, {"count": 153, "timestamp": 1474617600.0}, {"count": 537, "timestamp": 1474704000.0}, {"count": 159, "timestamp": 1474790400.0}, {"count": 297, "timestamp": 1474876800.0}, {"count": 309, "timestamp": 1474963200.0}, {"count": 158, "timestamp": 1475049600.0}, {"count": 333, "timestamp": 1475136000.0}, {"count": 412, "timestamp": 1475222400.0}, {"count": 213, "timestamp": 1475308800.0}, {"count": 139, "timestamp": 1475395200.0}, {"count": 84, "timestamp": 1475481600.0}, {"count": 299, "timestamp": 1475568000.0}, {"count": 211, "timestamp": 1475654400.0}, {"count": 322, "timestamp": 1475740800.0}, {"count": 188, "timestamp": 1475827200.0}, {"count": 299, "timestamp": 1475913600.0}, {"count": 288, "timestamp": 1476000000.0}, {"count": 366, "timestamp": 1476086400.0}, {"count": 202, "timestamp": 1476172800.0}, {"count": 263, "timestamp": 1476259200.0}, {"count": 172, "timestamp": 1476345600.0}, {"count": 236, "timestamp": 1476432000.0}, {"count": 372, "timestamp": 1476518400.0}, {"count": 233, "timestamp": 1476604800.0}, {"count": 268, "timestamp": 1476691200.0}, {"count": 135, "timestamp": 1476777600.0}, {"count": 186, "timestamp": 1476864000.0}, {"count": 216, "timestamp": 1476950400.0}, {"count": 135, "timestamp": 1477036800.0}, {"count": 244, "timestamp": 1477123200.0}, {"count": 101, "timestamp": 1477209600.0}, {"count": 315, "timestamp": 1477296000.0}, {"count": 354, "timestamp": 1477382400.0}, {"count": 320, "timestamp": 1477468800.0}, {"count": 366, "timestamp": 1477555200.0}, {"count": 97, "timestamp": 1477641600.0}, {"count": 230, "timestamp": 1477728000.0}, {"count": 219, "timestamp": 1477814400.0}, {"count": 236, "timestamp": 1477900800.0}, {"count": 372, "timestamp": 1477987200.0}, {"count": 407, "timestamp": 1478073600.0}, {"count": 283, "timestamp": 1478160000.0}, {"count": 100, "timestamp": 1478246400.0}, {"count": 184, "timestamp": 1478332800.0}, {"count": 104, "timestamp": 1478419200.0}, {"count": 218, "timestamp": 1478505600.0}, {"count": 895, "timestamp": 1478592000.0}, {"count": 510, "timestamp": 1478678400.0}, {"count": 195, "timestamp": 1478764800.0}, {"count": 185, "timestamp": 1478851200.0}, {"count": 319, "timestamp": 1478937600.0}, {"count": 301, "timestamp": 1479024000.0}, {"count": 226, "timestamp": 1479110400.0}, {"count": 350, "timestamp": 1479196800.0}, {"count": 359, "timestamp": 1479283200.0}, {"count": 148, "timestamp": 1479369600.0}, {"count": 158, "timestamp": 1479456000.0}, {"count": 409, "timestamp": 1479542400.0}, {"count": 202, "timestamp": 1479628800.0}, {"count": 227, "timestamp": 1479715200.0}, {"count": 153, "timestamp": 1479801600.0}, {"count": 190, "timestamp": 1479888000.0}, {"count": 210, "timestamp": 1479974400.0}, {"count": 248, "timestamp": 1480060800.0}, {"count": 601, "timestamp": 1480147200.0}, {"count": 163, "timestamp": 1480233600.0}, {"count": 201, "timestamp": 1480320000.0}, {"count": 364, "timestamp": 1480406400.0}, {"count": 270, "timestamp": 1480492800.0}, {"count": 263, "timestamp": 1480579200.0}, {"count": 253, "timestamp": 1480665600.0}, {"count": 178, "timestamp": 1480752000.0}, {"count": 316, "timestamp": 1480838400.0}, {"count": 206, "timestamp": 1480924800.0}, {"count": 264, "timestamp": 1481011200.0}, {"count": 228, "timestamp": 1481097600.0}, {"count": 190, "timestamp": 1481184000.0}, {"count": 303, "timestamp": 1481270400.0}, {"count": 255, "timestamp": 1481356800.0}, {"count": 381, "timestamp": 1481443200.0}, {"count": 395, "timestamp": 1481529600.0}, {"count": 260, "timestamp": 1481616000.0}, {"count": 261, "timestamp": 1481702400.0}, {"count": 360, "timestamp": 1481788800.0}, {"count": 363, "timestamp": 1481875200.0}, {"count": 191, "timestamp": 1481961600.0}, {"count": 157, "timestamp": 1482048000.0}, {"count": 168, "timestamp": 1482134400.0}, {"count": 222, "timestamp": 1482220800.0}, {"count": 106, "timestamp": 1482307200.0}, {"count": 106, "timestamp": 1482393600.0}, {"count": 185, "timestamp": 1482480000.0}, {"count": 273, "timestamp": 1482566400.0}, {"count": 429, "timestamp": 1482652800.0}, {"count": 170, "timestamp": 1482739200.0}, {"count": 210, "timestamp": 1482825600.0}, {"count": 186, "timestamp": 1482912000.0}, {"count": 115, "timestamp": 1482998400.0}, {"count": 146, "timestamp": 1483084800.0}, {"count": 152, "timestamp": 1483171200.0}, {"count": 260, "timestamp": 1483257600.0}, {"count": 164, "timestamp": 1483344000.0}, {"count": 137, "timestamp": 1483430400.0}, {"count": 254, "timestamp": 1483516800.0}, {"count": 399, "timestamp": 1483603200.0}, {"count": 209, "timestamp": 1483689600.0}, {"count": 165, "timestamp": 1483776000.0}, {"count": 249, "timestamp": 1483862400.0}, {"count": 134, "timestamp": 1483948800.0}, {"count": 58, "timestamp": 1484035200.0}, {"count": 266, "timestamp": 1484121600.0}, {"count": 210, "timestamp": 1484208000.0}, {"count": 272, "timestamp": 1484294400.0}, {"count": 91, "timestamp": 1484380800.0}, {"count": 108, "timestamp": 1484467200.0}, {"count": 122, "timestamp": 1484553600.0}, {"count": 288, "timestamp": 1484640000.0}, {"count": 381, "timestamp": 1484726400.0}, {"count": 175, "timestamp": 1484812800.0}, {"count": 214, "timestamp": 1484899200.0}, {"count": 218, "timestamp": 1484985600.0}, {"count": 132, "timestamp": 1485072000.0}, {"count": 174, "timestamp": 1485158400.0}, {"count": 401, "timestamp": 1485244800.0}, {"count": 126, "timestamp": 1485331200.0}, {"count": 225, "timestamp": 1485417600.0}, {"count": 123, "timestamp": 1485504000.0}, {"count": 229, "timestamp": 1485590400.0}, {"count": 381, "timestamp": 1485676800.0}, {"count": 214, "timestamp": 1485763200.0}, {"count": 193, "timestamp": 1485849600.0}, {"count": 906, "timestamp": 1485936000.0}, {"count": 386, "timestamp": 1486022400.0}, {"count": 231, "timestamp": 1486108800.0}, {"count": 88, "timestamp": 1486195200.0}, {"count": 193, "timestamp": 1486281600.0}, {"count": 71, "timestamp": 1486368000.0}, {"count": 152, "timestamp": 1486454400.0}, {"count": 228, "timestamp": 1486540800.0}, {"count": 172, "timestamp": 1486627200.0}, {"count": 108, "timestamp": 1486713600.0}, {"count": 91, "timestamp": 1486800000.0}, {"count": 63, "timestamp": 1486886400.0}, {"count": 165, "timestamp": 1486972800.0}, {"count": 179, "timestamp": 1487059200.0}, {"count": 173, "timestamp": 1487145600.0}, {"count": 174, "timestamp": 1487232000.0}, {"count": 201, "timestamp": 1487318400.0}, {"count": 119, "timestamp": 1487404800.0}, {"count": 141, "timestamp": 1487491200.0}, {"count": 195, "timestamp": 1487577600.0}, {"count": 298, "timestamp": 1487664000.0}, {"count": 228, "timestamp": 1487750400.0}]'
    var parsedData = JSON.parse(data);
    var chartData = [];
    // var firstDate = new Date();
    // firstDate.setDate(firstDate.getDate() - 5);

    for (var i = 0; i < parsedData.length; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var newDate = new Date(parsedData[i].timestamp * 1000);

        chartData.push({
            date: newDate,
            visits: parsedData[i].count
        });
    }
    return chartData;
}