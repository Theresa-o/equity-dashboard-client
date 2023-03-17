import React, { useState, useEffect } from "react";
import "chartjs-adapter-date-fns";
import { enUS } from "date-fns/locale";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  TimeScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, TimeScale);

const BarChart = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    const fetchAccountinfo = async () => {
      const res = await fetch("https://equity-dashboard.onrender.com");
      const data = await res.json();
      setChart(data);
      try {
        console.log(data);
      } catch (e) {
        console.log("Error");
      }
    };
    fetchAccountinfo();
  }, []);

  var data = {
    labels: chart?.map((x) => x.equity),
    datasets: [
      {
        label: "${chart?.length}",
        data: chart?.map((x) => x.balance),
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        type: "time",
        time: {
          unit: "second",
        },
        adapters: {
          date: {
            locale: enUS,
          },
        },
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} height={400} />
    </div>
  );
};

export default BarChart;
