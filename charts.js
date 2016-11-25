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
    var data = '[{"count": 0, "timestamp": 1468540800.0}, {"count": 58, "timestamp": 1468627200.0}, {"count": 147, "timestamp": 1468713600.0}, {"count": 560, "timestamp": 1468800000.0}, {"count": 323, "timestamp": 1468886400.0}, {"count": 287, "timestamp": 1468972800.0}, {"count": 738, "timestamp": 1469059200.0}, {"count": 528, "timestamp": 1469145600.0}, {"count": 351, "timestamp": 1469232000.0}, {"count": 242, "timestamp": 1469318400.0}, {"count": 457, "timestamp": 1469404800.0}, {"count": 803, "timestamp": 1469491200.0}, {"count": 351, "timestamp": 1469577600.0}, {"count": 347, "timestamp": 1469664000.0}, {"count": 190, "timestamp": 1469750400.0}, {"count": 211, "timestamp": 1469836800.0}, {"count": 215, "timestamp": 1469923200.0}, {"count": 428, "timestamp": 1470009600.0}, {"count": 225, "timestamp": 1470096000.0}, {"count": 509, "timestamp": 1470182400.0}, {"count": 187, "timestamp": 1470268800.0}, {"count": 80, "timestamp": 1470355200.0}, {"count": 61, "timestamp": 1470441600.0}, {"count": 135, "timestamp": 1470528000.0}, {"count": 121, "timestamp": 1470614400.0}, {"count": 140, "timestamp": 1470700800.0}, {"count": 34, "timestamp": 1470787200.0}, {"count": 54, "timestamp": 1470873600.0}, {"count": 26, "timestamp": 1470960000.0}, {"count": 10, "timestamp": 1471046400.0}, {"count": 1, "timestamp": 1471132800.0}, {"count": 8, "timestamp": 1471219200.0}, {"count": 29, "timestamp": 1471305600.0}, {"count": 34, "timestamp": 1471392000.0}, {"count": 58, "timestamp": 1471478400.0}, {"count": 221, "timestamp": 1471564800.0}, {"count": 73, "timestamp": 1471651200.0}, {"count": 69, "timestamp": 1471737600.0}, {"count": 55, "timestamp": 1471824000.0}, {"count": 50, "timestamp": 1471910400.0}, {"count": 24, "timestamp": 1471996800.0}, {"count": 38, "timestamp": 1472083200.0}, {"count": 57, "timestamp": 1472169600.0}, {"count": 149, "timestamp": 1472256000.0}, {"count": 781, "timestamp": 1472342400.0}, {"count": 317, "timestamp": 1472428800.0}, {"count": 275, "timestamp": 1472515200.0}, {"count": 436, "timestamp": 1472601600.0}, {"count": 201, "timestamp": 1472688000.0}, {"count": 880, "timestamp": 1472774400.0}, {"count": 855, "timestamp": 1472860800.0}, {"count": 814, "timestamp": 1472947200.0}, {"count": 532, "timestamp": 1473033600.0}, {"count": 509, "timestamp": 1473120000.0}, {"count": 353, "timestamp": 1473206400.0}, {"count": 606, "timestamp": 1473292800.0}, {"count": 1048, "timestamp": 1473379200.0}, {"count": 804, "timestamp": 1473465600.0}, {"count": 791, "timestamp": 1473552000.0}, {"count": 2233, "timestamp": 1473638400.0}, {"count": 1053, "timestamp": 1473724800.0}, {"count": 429, "timestamp": 1473811200.0}, {"count": 291, "timestamp": 1473897600.0}, {"count": 109, "timestamp": 1473984000.0}, {"count": 711, "timestamp": 1474070400.0}, {"count": 772, "timestamp": 1474156800.0}, {"count": 1953, "timestamp": 1474243200.0}, {"count": 759, "timestamp": 1474329600.0}, {"count": 894, "timestamp": 1474416000.0}, {"count": 527, "timestamp": 1474502400.0}, {"count": 563, "timestamp": 1474588800.0}, {"count": 664, "timestamp": 1474675200.0}, {"count": 1053, "timestamp": 1474761600.0}, {"count": 611, "timestamp": 1474848000.0}, {"count": 1842, "timestamp": 1474934400.0}, {"count": 783, "timestamp": 1475020800.0}, {"count": 181, "timestamp": 1475107200.0}, {"count": 702, "timestamp": 1475193600.0}, {"count": 960, "timestamp": 1475280000.0}, {"count": 1629, "timestamp": 1475366400.0}, {"count": 1048, "timestamp": 1475452800.0}, {"count": 132, "timestamp": 1475539200.0}, {"count": 505, "timestamp": 1475625600.0}, {"count": 1132, "timestamp": 1475712000.0}, {"count": 410, "timestamp": 1475798400.0}, {"count": 1436, "timestamp": 1475884800.0}, {"count": 1102, "timestamp": 1475971200.0}, {"count": 1433, "timestamp": 1476057600.0}, {"count": 1176, "timestamp": 1476144000.0}, {"count": 1025, "timestamp": 1476230400.0}, {"count": 535, "timestamp": 1476316800.0}, {"count": 383, "timestamp": 1476403200.0}, {"count": 1506, "timestamp": 1476489600.0}, {"count": 1230, "timestamp": 1476576000.0}, {"count": 783, "timestamp": 1476662400.0}, {"count": 688, "timestamp": 1476748800.0}, {"count": 1183, "timestamp": 1476835200.0}, {"count": 684, "timestamp": 1476921600.0}, {"count": 409, "timestamp": 1477008000.0}, {"count": 570, "timestamp": 1477094400.0}, {"count": 775, "timestamp": 1477180800.0}, {"count": 690, "timestamp": 1477267200.0}, {"count": 1016, "timestamp": 1477353600.0}, {"count": 326, "timestamp": 1477440000.0}, {"count": 1255, "timestamp": 1477526400.0}, {"count": 594, "timestamp": 1477612800.0}, {"count": 440, "timestamp": 1477699200.0}, {"count": 1218, "timestamp": 1477785600.0}, {"count": 1050, "timestamp": 1477872000.0}, {"count": 1257, "timestamp": 1477958400.0}, {"count": 683, "timestamp": 1478044800.0}, {"count": 1094, "timestamp": 1478131200.0}, {"count": 711, "timestamp": 1478217600.0}, {"count": 460, "timestamp": 1478304000.0}, {"count": 196, "timestamp": 1478390400.0}, {"count": 1007, "timestamp": 1478476800.0}, {"count": 846, "timestamp": 1478563200.0}, {"count": 627, "timestamp": 1478649600.0}, {"count": 901, "timestamp": 1478736000.0}, {"count": 241, "timestamp": 1478822400.0}, {"count": 1110, "timestamp": 1478908800.0}, {"count": 489, "timestamp": 1478995200.0}, {"count": 1752, "timestamp": 1479081600.0}, {"count": 727, "timestamp": 1479168000.0}, {"count": 608, "timestamp": 1479254400.0}, {"count": 1233, "timestamp": 1479340800.0}, {"count": 907, "timestamp": 1479427200.0}, {"count": 622, "timestamp": 1479513600.0}, {"count": 631, "timestamp": 1479600000.0}, {"count": 91, "timestamp": 1479686400.0}, {"count": 561, "timestamp": 1479772800.0}, {"count": 806, "timestamp": 1479859200.0}, {"count": 793, "timestamp": 1479945600.0}]'
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