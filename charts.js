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
    var data = '[{"count": 127, "timestamp": 1463990400.0}, {"count": 1, "timestamp": 1464076800.0}, {"count": 97, "timestamp": 1464163200.0}, {"count": 315, "timestamp": 1464249600.0}, {"count": 1, "timestamp": 1464336000.0}, {"count": 260, "timestamp": 1464422400.0}, {"count": 422, "timestamp": 1464508800.0}, {"count": 274, "timestamp": 1464595200.0}, {"count": 903, "timestamp": 1464681600.0}, {"count": 305, "timestamp": 1464768000.0}, {"count": 515, "timestamp": 1464854400.0}, {"count": 481, "timestamp": 1464940800.0}, {"count": 635, "timestamp": 1465027200.0}, {"count": 596, "timestamp": 1465113600.0}, {"count": 311, "timestamp": 1465200000.0}, {"count": 414, "timestamp": 1465286400.0}, {"count": 1011, "timestamp": 1465372800.0}, {"count": 724, "timestamp": 1465459200.0}, {"count": 401, "timestamp": 1465545600.0}, {"count": 483, "timestamp": 1465632000.0}, {"count": 723, "timestamp": 1465718400.0}, {"count": 1353, "timestamp": 1465804800.0}, {"count": 889, "timestamp": 1465891200.0}, {"count": 870, "timestamp": 1465977600.0}, {"count": 1525, "timestamp": 1466064000.0}, {"count": 355, "timestamp": 1466150400.0}, {"count": 611, "timestamp": 1466236800.0}, {"count": 1360, "timestamp": 1466323200.0}, {"count": 1192, "timestamp": 1466409600.0}, {"count": 991, "timestamp": 1466496000.0}, {"count": 428, "timestamp": 1466582400.0}, {"count": 1139, "timestamp": 1466668800.0}, {"count": 1057, "timestamp": 1466755200.0}, {"count": 1668, "timestamp": 1466841600.0}, {"count": 1672, "timestamp": 1466928000.0}, {"count": 1257, "timestamp": 1467014400.0}, {"count": 1557, "timestamp": 1467100800.0}, {"count": 1149, "timestamp": 1467187200.0}, {"count": 542, "timestamp": 1467273600.0}, {"count": 956, "timestamp": 1467360000.0}, {"count": 1514, "timestamp": 1467446400.0}, {"count": 898, "timestamp": 1467532800.0}, {"count": 1581, "timestamp": 1467619200.0}, {"count": 945, "timestamp": 1467705600.0}, {"count": 618, "timestamp": 1467792000.0}, {"count": 824, "timestamp": 1467878400.0}, {"count": 542, "timestamp": 1467964800.0}, {"count": 33, "timestamp": 1468051200.0}, {"count": 132, "timestamp": 1468137600.0}, {"count": 390, "timestamp": 1468224000.0}, {"count": 456, "timestamp": 1468310400.0}, {"count": 412, "timestamp": 1468396800.0}, {"count": 328, "timestamp": 1468483200.0}, {"count": 523, "timestamp": 1468569600.0}, {"count": 94, "timestamp": 1468656000.0}, {"count": 494, "timestamp": 1468742400.0}, {"count": 274, "timestamp": 1468828800.0}, {"count": 293, "timestamp": 1468915200.0}, {"count": 427, "timestamp": 1469001600.0}, {"count": 611, "timestamp": 1469088000.0}, {"count": 469, "timestamp": 1469174400.0}, {"count": 229, "timestamp": 1469260800.0}, {"count": 345, "timestamp": 1469347200.0}, {"count": 732, "timestamp": 1469433600.0}, {"count": 545, "timestamp": 1469520000.0}, {"count": 497, "timestamp": 1469606400.0}, {"count": 204, "timestamp": 1469692800.0}, {"count": 55, "timestamp": 1469779200.0}, {"count": 341, "timestamp": 1469865600.0}, {"count": 180, "timestamp": 1469952000.0}, {"count": 474, "timestamp": 1470038400.0}, {"count": 431, "timestamp": 1470124800.0}, {"count": 225, "timestamp": 1470211200.0}, {"count": 120, "timestamp": 1470297600.0}, {"count": 61, "timestamp": 1470384000.0}, {"count": 7, "timestamp": 1470470400.0}, {"count": 199, "timestamp": 1470556800.0}, {"count": 144, "timestamp": 1470643200.0}, {"count": 57, "timestamp": 1470729600.0}, {"count": 47, "timestamp": 1470816000.0}, {"count": 44, "timestamp": 1470902400.0}, {"count": 22, "timestamp": 1470988800.0}, {"count": 1, "timestamp": 1471075200.0}, {"count": 1, "timestamp": 1471161600.0}, {"count": 36, "timestamp": 1471248000.0}, {"count": 13, "timestamp": 1471334400.0}, {"count": 55, "timestamp": 1471420800.0}, {"count": 59, "timestamp": 1471507200.0}, {"count": 232, "timestamp": 1471593600.0}, {"count": 85, "timestamp": 1471680000.0}, {"count": 41, "timestamp": 1471766400.0}, {"count": 27, "timestamp": 1471852800.0}, {"count": 48, "timestamp": 1471939200.0}, {"count": 43, "timestamp": 1472025600.0}, {"count": 67, "timestamp": 1472112000.0}, {"count": 92, "timestamp": 1472198400.0}, {"count": 794, "timestamp": 1472284800.0}, {"count": 96, "timestamp": 1472371200.0}, {"count": 481, "timestamp": 1472457600.0}, {"count": 425, "timestamp": 1472544000.0}, {"count": 239, "timestamp": 1472630400.0}, {"count": 712, "timestamp": 1472716800.0}, {"count": 483, "timestamp": 1472803200.0}, {"count": 1160, "timestamp": 1472889600.0}, {"count": 686, "timestamp": 1472976000.0}, {"count": 392, "timestamp": 1473062400.0}, {"count": 259, "timestamp": 1473148800.0}, {"count": 410, "timestamp": 1473235200.0}, {"count": 1296, "timestamp": 1473321600.0}, {"count": 213, "timestamp": 1473408000.0}, {"count": 944, "timestamp": 1473494400.0}, {"count": 1645, "timestamp": 1473580800.0}, {"count": 1676, "timestamp": 1473667200.0}, {"count": 721, "timestamp": 1473753600.0}, {"count": 189, "timestamp": 1473840000.0}, {"count": 305, "timestamp": 1473926400.0}, {"count": 235, "timestamp": 1474012800.0}, {"count": 1052, "timestamp": 1474099200.0}, {"count": 1412, "timestamp": 1474185600.0}, {"count": 1111, "timestamp": 1474272000.0}, {"count": 1149, "timestamp": 1474358400.0}, {"count": 263, "timestamp": 1474444800.0}, {"count": 466, "timestamp": 1474531200.0}, {"count": 704, "timestamp": 1474617600.0}, {"count": 1074, "timestamp": 1474704000.0}, {"count": 556, "timestamp": 1474790400.0}, {"count": 1699, "timestamp": 1474876800.0}, {"count": 1109, "timestamp": 1474963200.0}, {"count": 205, "timestamp": 1475049600.0}, {"count": 631, "timestamp": 1475136000.0}, {"count": 813, "timestamp": 1475222400.0}, {"count": 1277, "timestamp": 1475308800.0}, {"count": 1292, "timestamp": 1475395200.0}, {"count": 452, "timestamp": 1475481600.0}, {"count": 423, "timestamp": 1475568000.0}, {"count": 1105, "timestamp": 1475654400.0}, {"count": 438, "timestamp": 1475740800.0}, {"count": 880, "timestamp": 1475827200.0}, {"count": 1431, "timestamp": 1475913600.0}, {"count": 962, "timestamp": 1476000000.0}, {"count": 1398, "timestamp": 1476086400.0}, {"count": 1319, "timestamp": 1476172800.0}, {"count": 559, "timestamp": 1476259200.0}, {"count": 284, "timestamp": 1476345600.0}, {"count": 887, "timestamp": 1476432000.0}, {"count": 1727, "timestamp": 1476518400.0}, {"count": 586, "timestamp": 1476604800.0}, {"count": 1008, "timestamp": 1476691200.0}, {"count": 593, "timestamp": 1476777600.0}, {"count": 1191, "timestamp": 1476864000.0}, {"count": 436, "timestamp": 1476950400.0}, {"count": 787, "timestamp": 1477036800.0}, {"count": 611, "timestamp": 1477123200.0}, {"count": 737, "timestamp": 1477209600.0}, {"count": 791, "timestamp": 1477296000.0}, {"count": 508, "timestamp": 1477382400.0}, {"count": 822, "timestamp": 1477468800.0}, {"count": 746, "timestamp": 1477555200.0}, {"count": 563, "timestamp": 1477641600.0}, {"count": 796, "timestamp": 1477728000.0}, {"count": 1568, "timestamp": 1477814400.0}, {"count": 1078, "timestamp": 1477900800.0}, {"count": 893, "timestamp": 1477987200.0}, {"count": 469, "timestamp": 1478073600.0}, {"count": 1085, "timestamp": 1478160000.0}, {"count": 506, "timestamp": 1478246400.0}, {"count": 239, "timestamp": 1478332800.0}, {"count": 645, "timestamp": 1478419200.0}, {"count": 752, "timestamp": 1478505600.0}, {"count": 789, "timestamp": 1478592000.0}, {"count": 603, "timestamp": 1478678400.0}, {"count": 827, "timestamp": 1478764800.0}, {"count": 608, "timestamp": 1478851200.0}, {"count": 792, "timestamp": 1478937600.0}, {"count": 1438, "timestamp": 1479024000.0}, {"count": 1019, "timestamp": 1479110400.0}, {"count": 542, "timestamp": 1479196800.0}, {"count": 874, "timestamp": 1479283200.0}, {"count": 1149, "timestamp": 1479369600.0}, {"count": 780, "timestamp": 1479456000.0}, {"count": 478, "timestamp": 1479542400.0}, {"count": 427, "timestamp": 1479628800.0}, {"count": 505, "timestamp": 1479715200.0}, {"count": 642, "timestamp": 1479801600.0}, {"count": 823, "timestamp": 1479888000.0}, {"count": 1461, "timestamp": 1479974400.0}, {"count": 861, "timestamp": 1480060800.0}]'
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