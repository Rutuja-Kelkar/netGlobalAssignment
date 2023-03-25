anychart.onDocumentReady(function () {
    // create data set on our data, also we can put data directly to series
    var dataSet = anychart.data.set(getData());

    // map data for the first series, take x from the zero column and value from the first column of data set
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

    // create line chart
    var chart = anychart.line();

    // turn on chart animation
    chart.animation(true);

    // set chart padding
    chart.padding([10, 180, 5, 20]);

    // set chart title text settings
    chart.title("Sum of sales (€million)");
    
    // set chart y scale minimum and maximum
    chart.yScale().minimum(0).maximum(25000000);

    // tune y scale
    chart.yScale().ticks().set([5000000, 10000000, 15000000, 20000000, 25000000]);

    // change yAxis title text settings
    chart.yAxis().title("Sum of sales (€million)");

    // format y axis labels
    chart.yAxis().labels().format("{%Value}");

    // create extra y axis on the right
    // primary Y Scale setup earlier is used by default
    // setting it up explictly look like this: chart.yAxis(1).scale(chart.yScale());
    // chart.yAxis(1).enabled(true).orientation("right");
    // chart.yAxis(1).labels().format("{%Value}%");

    var line;

    // create 3 line series and tune them using chaining calls
    line = chart.line(firstSeriesData).name("Sum of sales");
    line.hovered().markers().enabled(true).type("circle").size(4);

  
    // create range axes markers
    chart.rangeMarker(0).from(0).to(5000000).fill("#4db6ac 0.4");
    chart.rangeMarker(1).from(5000000).to(10000000).fill("#80cbc4 0.4");
    chart.rangeMarker(2).from(10000000).to(15000000).fill("#b2dfdb 0.4");
    chart.rangeMarker(3).from(15000000).to(20000000).fill("#e0f2f1 0.4");
    chart.rangeMarker(4).from(15000000).to(25000000).fill("#e0f2f4 0.4");

    

    // enable chart legend
    chart.legend().enabled(true).fontSize(13).padding([0, 0, 15, 0]);

    // set container id for the chart
    chart.container("lineChart");

    // display the chart
    chart.draw();
  });

  function getData() {
    return [
      ["2010", 13894163],
      ["2011", 15710758],
      ["2012", 16854413],
      ["2013", 16723019],
      ["2014", 17972595],
      ["2015", 17686790],
      ["2016", 17910320],
      ["2017", 18448033],
      ["2018", 20351620],
      ["2019", 21018395],
      ["2020", 18952091],
      
    ];
  }




// References 
// https://www.anychart.com/products/anychart/gallery/Line_Charts/