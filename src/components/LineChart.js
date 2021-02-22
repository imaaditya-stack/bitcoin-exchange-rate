import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ labels, values }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Exchange Rate of Two Bitcoin",
        data: values.map((v) => v * 2),
        fill: false,
        backgroundColor: "#5843BE",
        borderColor: "#5843BE",
        lineTension: 0,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontFamily: "Lato",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontFamily: "Lato",
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
