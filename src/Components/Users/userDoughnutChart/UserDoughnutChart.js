import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { useStyles } from "./css";

export default function DoughnutChart() {
  const classes = useStyles();

  const doughnut = {
    labels: ["Active Users", "Total Hosts", "Total Guests"],
    datasets: [
      {
        data: [150, 80, 100],
        backgroundColor: ["#DC930057", "#B2DF8AC7", "#9D8ADFC2"],
        hoverBackgroundColor: ["#DC930057", "#B2DF8AC7", "#9D8ADFC2"]
      }
    ]
  };

  const options = {
    cutoutPercentage: 80,
    tooltips: {
      enabled: true
    },
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          display: false
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    },
    plugins: {
      datalabels: {
        display: false
      }
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  };

  return (
    <div className={classes.chart}>
      <Doughnut data={doughnut} options={options} height={250} />
      {/* start */}
      <div className={classes.innerDiv}>
        <span className={classes.dis1}>
          <b>User Overview</b>
        </span>
        <br />
        <span className={classes.head}>
          <b>80%</b>
        </span>
        <br />
        <span className={classes.dis2}>
          <b>Active Users</b>
        </span>
      </div>
      {/* end */}
    </div>
  );
}
