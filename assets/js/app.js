// @TODO: YOUR CODE HERE!
d3.csv("data.csv").then(function(healthData) {

    console.log(healthData)

    var povertyData = healthData.map(data => data.poverty);
    console.log("poverty", povertyData);

    var smokesData = healthData.map(data => data.smokes);
    console.log("smokes", smokesData);

    var statesData = healthData.map(data => data.state);
    console.log("state", statesData)




// Create the Traces
  var trace1 = {
      x: statesData,
      y: smokesData,
      mode: "markers",
      type: "scatter",
      name: "Smoking Rate",
      marker: {
        color: "#2077b4",
        symbol: "hexagram"
      }
    };
    
    var trace2 = {
      x: [statesData],
      y: [povertyData],
      mode: "markers",
      type: "scatter",
      name: "Poverty Rate",
      marker: {
        color: "orange",
        symbol: "diamond-x"
      }
    };
    
  
    // Create the data array for the plot
    var data = [trace1, trace2];
    
    // Define the plot layout
    var layout = {
      title: "Correlation between Smoking and Poverty in all 50 states",
      xaxis: { title: "States" },
      yaxis: { title: "Poverty & Smoking" }
    };
  
    Plotly.newPlot("plot", data, layout);

  });
   