import React, { useEffect, useState } from "react";
import { Doughnut, defaults } from "react-chartjs-2";
import axios from "axios";

const Chart = () => {
  const [stateData, setStateData] = useState([]);
  useEffect(() => {
    getStateData();
  }, []);

  const getStateData = async () => {
    const response = await axios.get("/api/covid19/India");
    const data = response.data.slice(0, response.data.length - 3);
    setStateData(data);
  };

  //chart js
  defaults.global.defaultFontColor = "#212121";
  defaults.global.defaultFontFamily = "Roboto";
  defaults.global.defaultFontSize = 12;

  const labels = [];
  const data = [];
  stateData.forEach((state) => {
    labels.push(state.State);
    data.push(state.Cases);
  });

  //const finalData = data.sort((a, b) => b - a);

  const colors = [
    "#00429d",
    "#1c4ca2",
    "#2b57a7",
    "#3761ab",
    "#426cb0",
    "#4c76b5",
    "#5681b9",
    "#608cbe",
    "#6997c2",
    "#73a2c6",
    "#7daeca",
    "#88b9cf",
    "#93c4d2",
    "#9ecfd6",
    "#abdad9",
    "#b9e5dd",
    "#caefdf",
    "#def9e1",
    "#fff1d5",
    "#ffe2ca",
    "#ffd3bf",
    "#ffc4b4",
    "#ffb5a9",
    "#ffa59e",
    "#fe9593",
    "#f98689",
    "#f4777f",
    "#ed6976",
    "#e65a6d",
    "#dd4c65",
    "#d43e5c",
    "#ca2f55",
    "#be214d",
    "#b11346",
    "#a30540",
    "#93003a",
  ];
  const datasets = [
    {
      label: "state data",
      backgroundColor: colors,
      data: data,
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
  };

  return (
    <div>
      <Doughnut data={dataset} options={options} />
    </div>
  );
};

export default Chart;
