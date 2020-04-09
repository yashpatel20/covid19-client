import React, { useEffect, useState } from "react";
import { Bar, defaults } from "react-chartjs-2";
import axios from "axios";

const CountryChart = () => {
  const [countryData, setCountryData] = useState([]);
  const [India, setIndia] = useState({});
  useEffect(() => {
    getCountryData();
  }, []);

  const getCountryData = async () => {
    const response = await axios.get("/api/covid19/World");
    const data = response.data.slice(1);
    const res = await axios.get("/api/covid19/India");
    const india = res.data[0];
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
    title: {
      display: true,
      text: "Cases in most affected countries",
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
