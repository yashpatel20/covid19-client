import React, { useEffect, useState } from "react";
import { Bar, defaults } from "react-chartjs-2";
import axios from "axios";

const CountryChart = () => {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    getCountryData();
  }, []);

  const getCountryData = async () => {
    const response = await axios.get("/api/covid19/World");
    const data = response.data.slice(1, 19);
    const res = await axios.get("/api/covid19/India");
    const india = res.data[res.data.length - 3];
    data.push({
      Country: india.State,
      Cases: india.Cases,
      Deaths: india.Deaths,
      Recovered: india.Recovered,
    });
    setCountryData(data);
  };

  //chart js

  const labels = [];
  const data = [];
  countryData.forEach((country) => {
    labels.push(country.Country);
    const cases = country.Cases.replace(/,/g, "");
    data.push(parseInt(cases, 10));
  });

  console.log(data);
  const colors = [
    "#ff0000",
    "#ff2c00",
    "#ff4100",
    "#ff5000",
    "#ff5d00",
    "#ff6900",
    "#ff7400",
    "#fe7e00",
    "#fd8900",
    "#fa9400",
    "#f79e00",
    "#f2a900",
    "#edb300",
    "#e6be00",
    "#ddc800",
    "#d0d300",
    "#bfdf00",
    "#a2ec00",
    "#00ff00",
  ];
  const datasets = [
    {
      label: "country data",
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
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Bar data={dataset} options={options} />
    </div>
  );
};

export default CountryChart;
