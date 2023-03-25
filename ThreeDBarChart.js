anychart.onDocumentReady(function () {
	
// 	const data = [];
// 	const fs = require("fs");
// 	const { parse } = require("csv-parse");

// fs.createReadStream("./DataFiles/ThreeDBarChartData.csv")
//   .pipe(
//     parse({
//       delimiter: ",",
//       columns: true,
//       ltrim: true,
//     })
//   )
//   .on("data", function (row) {
//     // This will push the object row into the array
//     data.push(row);
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   })
//   .on("end", function () {
//     // Here log the result array
//     console.log("parsed csv data:");
//     console.log(data);
//   });



	// create data
	var data = [
		["Aerospace & Defence", 387409.19],
		["Alternative Energy", 7448.61],
		["Automobiles & Parts", 1272000.78],
		["Banks", 734744.65],
		["Beverages", 270453.22],
		["Biotechnology", -192361.37],
		["Chemicals", 831481.68],
		["Commercial Vehicles & Trucks", 176.12],
		["Computer Hardware", 278.72],
		["Computer Services", 186.04],
		["Construction & Materials", 547897.81],
		["Electrical equipment", -6388536.47],
		["Electricity", 375453.87],
		["Electronic & Electrical equipment", 87839.7000000001],
		["Electronic Equipment", 881345.000000002],
		["Equity Investment Instruments", 501.16],
		["Financial Services", 121156.6],
		["Fixed Line Telecommunications", 634079.03],
		["Food & Drug Retailers", 34696.08],
		["Food Producers", 520213.44],
		["Forestry & Paper", 44341.52],
		["Gas & Water", 148021.42],
		["General Industrials", 492844.22],
		["General Retailers", 96992.93],
		["Health care equipment & services", 312967.42],
		["Household Goods & Home Construction", 312967.42],
		["Industrial Engineering", 711255.49],
		["Industrial Machinery", 474.68],
		["Industrial Metals & Mining", 204347.11],
		["Industrial Transportation", 47529.18],
		["Internet", 330.98],
		["Leisure goods", 169787.6],
		["Life Insurance", -101948.58],
		["Media", 69243.33],
		["Mining", 348291.4],
		["Mobile Telecommunications", 74370.11],
		["Nonequity Investment Instruments", 381.3],
		["Nonlife Insurance", 854.509999999999],
		["Oil & Gas Producers", 2234612.27],
		["Oil Equipment, Services & Distribution", 189720.33],
		["Other Financials", 270453],
		["Personal & Household Goods", 708],
		["Personal Goods", 311169.28],
		["Pharmaceuticals", 1407476.6],
		["BeverReal Estate Investment & Servicesages", 55731.2],
		["Semiconductors", 1333.28],
		["Software & Computer Servicesrages", 1381336.74],
		["Support Services", 125623.88],
		["Technology Hardware & Equipment", 1704326.66],
		["Telecommunications", 73.86],
		["Telecommunications equipment", -78.41],
		["Tobacco", 296930.9],
		["Toys", 105.49],
		["Travel & Leisure", 162434.04],
];

	// create a 3d column chart
	var chart = anychart.column3d();

	// create a column series and set the data
	var series = chart.column(data);

    // set the chart title
	chart.title("Sum of Profits (€million)");

	// set the container id
	chart.container("ThreeDBarChart");

	// configure the z-aspect of the chart
	chart.zAspect("100%");

	// initiate drawing the chart
	chart.draw();
});

	

// Refrences 
//  https://playground.anychart.com/docs/v8/samples/BCT_3D_01\ 
//  https://playground.anychart.com/docs/v8/samples/BCT_3D_01
//  https://docs.anychart.com/Quick_Start/Modules
// https://www.scaler.com/topics/read-csv-javascript/ - Convert csv to js array

