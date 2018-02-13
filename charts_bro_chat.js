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
    var data = '[{"timestamp": 1505376000.0, "count": 20}, {"timestamp": 1505462400.0, "count": 69}, {"timestamp": 1505548800.0, "count": 148}, {"timestamp": 1505635200.0, "count": 115}, {"timestamp": 1505721600.0, "count": 187}, {"timestamp": 1505808000.0, "count": 113}, {"timestamp": 1505894400.0, "count": 117}, {"timestamp": 1505980800.0, "count": 121}, {"timestamp": 1506067200.0, "count": 154}, {"timestamp": 1506153600.0, "count": 128}, {"timestamp": 1506240000.0, "count": 93}, {"timestamp": 1506326400.0, "count": 51}, {"timestamp": 1506412800.0, "count": 48}, {"timestamp": 1506499200.0, "count": 93}, {"timestamp": 1506585600.0, "count": 119}, {"timestamp": 1506672000.0, "count": 61}, {"timestamp": 1506758400.0, "count": 29}, {"timestamp": 1506844800.0, "count": 49}, {"timestamp": 1506931200.0, "count": 114}, {"timestamp": 1507017600.0, "count": 33}, {"timestamp": 1507104000.0, "count": 88}, {"timestamp": 1507190400.0, "count": 94}, {"timestamp": 1507276800.0, "count": 126}, {"timestamp": 1507363200.0, "count": 78}, {"timestamp": 1507449600.0, "count": 31}, {"timestamp": 1507536000.0, "count": 103}, {"timestamp": 1507622400.0, "count": 78}, {"timestamp": 1507708800.0, "count": 176}, {"timestamp": 1507795200.0, "count": 70}, {"timestamp": 1507881600.0, "count": 142}, {"timestamp": 1507968000.0, "count": 77}, {"timestamp": 1508054400.0, "count": 47}, {"timestamp": 1508140800.0, "count": 128}, {"timestamp": 1508227200.0, "count": 72}, {"timestamp": 1508313600.0, "count": 96}, {"timestamp": 1508400000.0, "count": 14}, {"timestamp": 1508486400.0, "count": 97}, {"timestamp": 1508572800.0, "count": 113}, {"timestamp": 1508659200.0, "count": 82}, {"timestamp": 1508745600.0, "count": 304}, {"timestamp": 1508832000.0, "count": 40}, {"timestamp": 1508918400.0, "count": 105}, {"timestamp": 1509004800.0, "count": 105}, {"timestamp": 1509091200.0, "count": 70}, {"timestamp": 1509177600.0, "count": 41}, {"timestamp": 1509264000.0, "count": 3}, {"timestamp": 1509350400.0, "count": 67}, {"timestamp": 1509436800.0, "count": 70}, {"timestamp": 1509523200.0, "count": 35}, {"timestamp": 1509609600.0, "count": 51}, {"timestamp": 1509696000.0, "count": 88}, {"timestamp": 1509782400.0, "count": 17}, {"timestamp": 1509868800.0, "count": 23}, {"timestamp": 1509955200.0, "count": 36}, {"timestamp": 1510041600.0, "count": 126}, {"timestamp": 1510128000.0, "count": 30}, {"timestamp": 1510214400.0, "count": 100}, {"timestamp": 1510300800.0, "count": 70}, {"timestamp": 1510387200.0, "count": 57}, {"timestamp": 1510473600.0, "count": 87}, {"timestamp": 1510560000.0, "count": 58}, {"timestamp": 1510646400.0, "count": 117}, {"timestamp": 1510732800.0, "count": 97}, {"timestamp": 1510819200.0, "count": 35}, {"timestamp": 1510905600.0, "count": 18}, {"timestamp": 1510992000.0, "count": 53}, {"timestamp": 1511078400.0, "count": 12}, {"timestamp": 1511164800.0, "count": 80}, {"timestamp": 1511251200.0, "count": 46}, {"timestamp": 1511337600.0, "count": 45}, {"timestamp": 1511424000.0, "count": 132}, {"timestamp": 1511510400.0, "count": 64}, {"timestamp": 1511596800.0, "count": 50}, {"timestamp": 1511683200.0, "count": 122}, {"timestamp": 1511769600.0, "count": 198}, {"timestamp": 1511856000.0, "count": 44}, {"timestamp": 1511942400.0, "count": 79}, {"timestamp": 1512028800.0, "count": 36}, {"timestamp": 1512115200.0, "count": 51}, {"timestamp": 1512201600.0, "count": 11}, {"timestamp": 1512288000.0, "count": 17}, {"timestamp": 1512374400.0, "count": 15}, {"timestamp": 1512460800.0, "count": 78}, {"timestamp": 1512547200.0, "count": 49}, {"timestamp": 1512633600.0, "count": 87}, {"timestamp": 1512720000.0, "count": 73}, {"timestamp": 1512806400.0, "count": 79}, {"timestamp": 1512892800.0, "count": 20}, {"timestamp": 1512979200.0, "count": 5}, {"timestamp": 1513065600.0, "count": 28}, {"timestamp": 1513152000.0, "count": 78}, {"timestamp": 1513238400.0, "count": 45}, {"timestamp": 1513324800.0, "count": 85}, {"timestamp": 1513411200.0, "count": 19}, {"timestamp": 1513497600.0, "count": 6}, {"timestamp": 1513584000.0, "count": 3}, {"timestamp": 1513670400.0, "count": 57}, {"timestamp": 1513756800.0, "count": 31}, {"timestamp": 1513843200.0, "count": 99}, {"timestamp": 1513929600.0, "count": 46}, {"timestamp": 1514016000.0, "count": 31}, {"timestamp": 1514102400.0, "count": 107}, {"timestamp": 1514188800.0, "count": 40}, {"timestamp": 1514275200.0, "count": 18}, {"timestamp": 1514361600.0, "count": 68}, {"timestamp": 1514448000.0, "count": 39}, {"timestamp": 1514534400.0, "count": 164}, {"timestamp": 1514620800.0, "count": 15}, {"timestamp": 1514707200.0, "count": 44}, {"timestamp": 1514793600.0, "count": 126}, {"timestamp": 1514880000.0, "count": 222}, {"timestamp": 1514966400.0, "count": 93}, {"timestamp": 1515052800.0, "count": 47}, {"timestamp": 1515139200.0, "count": 59}, {"timestamp": 1515225600.0, "count": 84}, {"timestamp": 1515312000.0, "count": 132}, {"timestamp": 1515398400.0, "count": 12}, {"timestamp": 1515484800.0, "count": 101}, {"timestamp": 1515571200.0, "count": 191}, {"timestamp": 1515657600.0, "count": 48}, {"timestamp": 1515744000.0, "count": 26}, {"timestamp": 1515830400.0, "count": 193}, {"timestamp": 1515916800.0, "count": 94}, {"timestamp": 1516003200.0, "count": 65}, {"timestamp": 1516089600.0, "count": 20}, {"timestamp": 1516176000.0, "count": 46}, {"timestamp": 1516262400.0, "count": 73}, {"timestamp": 1516348800.0, "count": 25}, {"timestamp": 1516435200.0, "count": 26}, {"timestamp": 1516521600.0, "count": 27}, {"timestamp": 1516608000.0, "count": 7}, {"timestamp": 1516694400.0, "count": 7}, {"timestamp": 1516780800.0, "count": 105}, {"timestamp": 1516867200.0, "count": 57}, {"timestamp": 1516953600.0, "count": 27}, {"timestamp": 1517040000.0, "count": 4}, {"timestamp": 1517126400.0, "count": 14}, {"timestamp": 1517212800.0, "count": 23}, {"timestamp": 1517299200.0, "count": 13}, {"timestamp": 1517385600.0, "count": 4}, {"timestamp": 1517472000.0, "count": 33}, {"timestamp": 1517558400.0, "count": 24}, {"timestamp": 1517644800.0, "count": 4}, {"timestamp": 1517731200.0, "count": 5}, {"timestamp": 1517817600.0, "count": 3}, {"timestamp": 1517904000.0, "count": 29}, {"timestamp": 1517990400.0, "count": 2}, {"timestamp": 1518076800.0, "count": 2}, {"timestamp": 1518163200.0, "count": 10}, {"timestamp": 1518249600.0, "count": 1}, {"timestamp": 1518336000.0, "count": 1}]'
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