import React, { useEffect, useState } from "react";
import { Line, defaults } from "react-chartjs-2";
import axios from "axios";

const DeathRecoveredChart = () => {
  const [dataDeaths, setDataDeaths] = useState([]);
  const [dataRecovered, setDataRecoverd] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("/api/covid19/IndiaTS");
    const dataDeaths = response.data.map((item) => {
      const container = {};
      container.Date = item.Date.slice(5);
      container.Cases = item.Deaths;
      return container;
    });
    const dataRecovered = response.data.map((item) => {
      const container = {};
      container.Date = item.Date.slice(5);
      container.Cases = item.Recovered;
      return container;
    });
    setDataDeaths(dataDeaths);
    setDataRecoverd(dataRecovered);
  };

  const labels = [];
  const dataOfDeaths = [];
  const dataOfRecovered = [];
  dataDeaths.forEach((ts) => {
    labels.push(ts.Date);
    const deaths = ts.Cases.replace(/,/g, "");
    dataOfDeaths.push(parseInt(deaths));
  });
  dataRecovered.forEach((ts) => {
    const recovered = ts.Cases.replace(/,/g, "");
    dataOfRecovered.push(parseInt(recovered));
  });

  const datasets = [
    {
      label: "Deaths",
      backgroundColor: "#e83c00",
      data: dataOfDeaths,
      fill: false,
    },
    {
      label: "Recovered",
      backgroundColor: "#497d00",
      data: dataOfRecovered,
      fill: false,
    },
  ];

  const dataset = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            min: "03-03",
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={dataset} options={options} />
    </div>
  );
};

export default DeathRecoveredChart;
