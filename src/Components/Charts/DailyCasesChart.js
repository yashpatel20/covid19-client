import React, { useEffect, useState } from "react";
import { Bar, defaults } from "react-chartjs-2";
import axios from "axios";

const DailyCasesChart = () => {
  const [dailyCasesData, setDailyCasesData] = useState([]);

  useEffect(() => {
    getDailyCasesData();
  }, []);

  const getDailyCasesData = async () => {
    const response = await axios.get("/api/covid19/IndiaTS");
    let prev = response.data[0].Cases.replace(/,/g, "");
    const data = response.data.map((item, index) => {
      const container = {};
      container.Date = item.Date.slice(5);
      if (index === 0) {
        container.Cases = item.Cases;
      }
      container.Cases = item.Cases.replace(/,/g, "") - prev;
      prev = item.Cases.replace(/,/g, "");
      return container;
    });
    console.log(data);
    setDailyCasesData(data);
  };

  //chart js
  console.log(dailyCasesData);

  const labels = [];
  const data = [];
  dailyCasesData.forEach((daily) => {
    labels.push(daily.Date);
    const cases = daily.Cases;
    data.push(parseInt(cases, 10));
  });

  console.log(data);

  const datasets = [
    {
      label: "Daily Cases",
      backgroundColor: "rgba(0,60,100,1)",
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
      xAxes: [
        {
          ticks: {
            min: "03-03",
          },
        },
      ],
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

export default DailyCasesChart;
