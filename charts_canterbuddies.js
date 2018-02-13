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
    var data = '[{"timestamp": 1511251200.0, "count": 44}, {"timestamp": 1511337600.0, "count": 111}, {"timestamp": 1511424000.0, "count": 237}, {"timestamp": 1511510400.0, "count": 31}, {"timestamp": 1511596800.0, "count": 111}, {"timestamp": 1511683200.0, "count": 16}, {"timestamp": 1511769600.0, "count": 146}, {"timestamp": 1511856000.0, "count": 163}, {"timestamp": 1511942400.0, "count": 198}, {"timestamp": 1512028800.0, "count": 111}, {"timestamp": 1512115200.0, "count": 74}, {"timestamp": 1512201600.0, "count": 281}, {"timestamp": 1512288000.0, "count": 60}, {"timestamp": 1512374400.0, "count": 162}, {"timestamp": 1512460800.0, "count": 125}, {"timestamp": 1512547200.0, "count": 96}, {"timestamp": 1512633600.0, "count": 257}, {"timestamp": 1512720000.0, "count": 239}, {"timestamp": 1512806400.0, "count": 280}, {"timestamp": 1512892800.0, "count": 172}, {"timestamp": 1512979200.0, "count": 172}, {"timestamp": 1513065600.0, "count": 205}, {"timestamp": 1513152000.0, "count": 62}, {"timestamp": 1513238400.0, "count": 56}, {"timestamp": 1513324800.0, "count": 93}, {"timestamp": 1513411200.0, "count": 68}, {"timestamp": 1513497600.0, "count": 3}, {"timestamp": 1513584000.0, "count": 22}, {"timestamp": 1513670400.0, "count": 31}, {"timestamp": 1513756800.0, "count": 10}, {"timestamp": 1513843200.0, "count": 5}, {"timestamp": 1513929600.0, "count": 102}, {"timestamp": 1514016000.0, "count": 59}, {"timestamp": 1514102400.0, "count": 67}, {"timestamp": 1514188800.0, "count": 22}, {"timestamp": 1514275200.0, "count": 431}, {"timestamp": 1514361600.0, "count": 49}, {"timestamp": 1514448000.0, "count": 31}, {"timestamp": 1514534400.0, "count": 58}, {"timestamp": 1514620800.0, "count": 35}, {"timestamp": 1514707200.0, "count": 21}, {"timestamp": 1514793600.0, "count": 132}, {"timestamp": 1514880000.0, "count": 28}, {"timestamp": 1514966400.0, "count": 75}, {"timestamp": 1515052800.0, "count": 261}, {"timestamp": 1515139200.0, "count": 60}, {"timestamp": 1515225600.0, "count": 65}, {"timestamp": 1515312000.0, "count": 125}, {"timestamp": 1515398400.0, "count": 239}, {"timestamp": 1515484800.0, "count": 99}, {"timestamp": 1515571200.0, "count": 78}, {"timestamp": 1515657600.0, "count": 25}, {"timestamp": 1515744000.0, "count": 110}, {"timestamp": 1515830400.0, "count": 45}, {"timestamp": 1515916800.0, "count": 117}, {"timestamp": 1516003200.0, "count": 43}, {"timestamp": 1516089600.0, "count": 101}, {"timestamp": 1516176000.0, "count": 137}, {"timestamp": 1516262400.0, "count": 119}, {"timestamp": 1516348800.0, "count": 139}, {"timestamp": 1516435200.0, "count": 58}, {"timestamp": 1516521600.0, "count": 15}, {"timestamp": 1516608000.0, "count": 223}, {"timestamp": 1516694400.0, "count": 180}, {"timestamp": 1516780800.0, "count": 96}, {"timestamp": 1516867200.0, "count": 72}, {"timestamp": 1516953600.0, "count": 205}, {"timestamp": 1517040000.0, "count": 84}, {"timestamp": 1517126400.0, "count": 92}, {"timestamp": 1517212800.0, "count": 128}, {"timestamp": 1517299200.0, "count": 187}, {"timestamp": 1517385600.0, "count": 103}, {"timestamp": 1517472000.0, "count": 167}, {"timestamp": 1517558400.0, "count": 190}, {"timestamp": 1517644800.0, "count": 279}, {"timestamp": 1517731200.0, "count": 186}, {"timestamp": 1517817600.0, "count": 136}, {"timestamp": 1517904000.0, "count": 219}, {"timestamp": 1517990400.0, "count": 98}, {"timestamp": 1518076800.0, "count": 76}, {"timestamp": 1518163200.0, "count": 39}, {"timestamp": 1518249600.0, "count": 224}, {"timestamp": 1518336000.0, "count": 360}]'
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