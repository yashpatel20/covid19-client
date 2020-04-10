import React, { useEffect, useState } from "react";
import { Line, defaults } from "react-chartjs-2";
import axios from "axios";

const TimeSeriesChart = ({ type }) => {
  const [timeSeries, setTimeSeries] = useState([]);
  useEffect(() => {
    getTimeSeriesData();
  }, []);

  const getTimeSeriesData = async () => {
    const response = await axios.get("/api/covid19/IndiaTS");
    setTimeSeries(response.data);
  };

  //TODO defaults in one place
  defaults.global.defaultFontColor = "#212121";
  defaults.global.defaultFontFamily = "Roboto";
  defaults.global.defaultFontSize = 12;

  const labels = [];
  const data = [];
  timeSeries.forEach((ts) => {
    labels.push(ts.Date);
    const cases = ts.Cases.replace(/,/g, "");
    data.push(parseInt(cases));
  });

  console.log(data);

  const datasets = [
    {
      label: "Cases",
      backgroundColor: "#673ab7",
      data: data,
      fill: true,
    },
  ];

  const dataset = {
    labels: labels,
    datasets: datasets,
  };

  const yaxes =
    type === "linear"
      ? {
          type: type,
          ticks: {
            beginAtZero: true,
            max: undefined,
            precision: 0,
          },
        }
      : {
          type: type,
          ticks: {
            min: 0,
            max: 100000,
            callback: function (value, index, values) {
              if (value === 100000) return "100000";
              if (value === 10000) return "10000";
              if (value === 1000) return "1000";
              if (value === 100) return "100";
              if (value === 10) return "10";
              if (value === 0) return "0";
              return null;
            },
          },
        };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            min: "2020-03-03",
          },
        },
      ],
      yAxes: [yaxes],
    },
  };

  return (
    <div>
      <Line data={dataset} options={options} />
    </div>
  );
};

export default TimeSeriesChart;
