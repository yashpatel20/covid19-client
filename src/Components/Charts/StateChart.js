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

  const colors = [
    "#9CB4E8",
    "#2E2D54",
    "#187882",
    "#46820B",
    "#6D2F02",
    "#1B74D7",
    "#96D2CC",
    "#36B2CC",
    "#425C70",
    "#BA5021",
    "#D1F68E",
    "#2F4278",
    "#2C741D",
    "#69238C",
    "#3BE6CF",
    "#9EA76C",
    "#6B3109",
    "#FAC57F",
    "#D75476",
    "#006F8B",
    "#E8BAE3",
    "#76A692",
    "#2D2541",
    "#94131A",
    "#8F9291",
    "#4A0593",
    "#9FA25E",
    "#D53A18",
    "#37E0F7",
    "#1D6425",
    "#10B395",
    "#DF2FF7",
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
    title: {
      display: true,
      text: "Cases in Indian states",
    },
  };

  return (
    <div>
      <Doughnut data={dataset} options={options} />
    </div>
  );
};

export default Chart;
