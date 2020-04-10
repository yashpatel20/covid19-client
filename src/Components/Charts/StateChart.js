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
    const data = response.data.slice(1);
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
    "#1f4ea3",
    "#305ba9",
    "#3e67ae",
    "#4a74b4",
    "#5681b9",
    "#618fbf",
    "#6d9cc4",
    "#79a9c9",
    "#85b7ce",
    "#93c4d2",
    "#a1d1d7",
    "#b1dfdb",
    "#c3ebde",
    "#daf7e1",
    "#ffeed3",
    "#ffdcc6",
    "#ffcab9",
    "#ffb8ab",
    "#ffa59e",
    "#fd9291",
    "#f78085",
    "#f06f7a",
    "#e75d6f",
    "#dd4c65",
    "#d23b5b",
    "#c52a52",
    "#b61849",
    "#a60741",
    "#93003a",
    // "#9CB4E8",
    // "#2E2D54",
    // "#187882",
    // "#46820B",
    // "#6D2F02",
    // "#1B74D7",
    // "#96D2CC",
    // "#36B2CC",
    // "#425C70",
    // "#BA5021",
    // "#D1F68E",
    // "#2F4278",
    // "#2C741D",
    // "#69238C",
    // "#3BE6CF",
    // "#9EA76C",
    // "#6B3109",
    // "#FAC57F",
    // "#D75476",
    // "#006F8B",
    // "#E8BAE3",
    // "#76A692",
    // "#2D2541",
    // "#94131A",
    // "#8F9291",
    // "#4A0593",
    // "#9FA25E",
    // "#D53A18",
    // "#37E0F7",
    // "#1D6425",
    // "#10B395",
    // "#DF2FF7",
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
