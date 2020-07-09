import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function CountryBarChart({handleChange}) {
  const [globalData, setGlobalData] = useState([{}]);

  const data = {
    labels: ["Total Cases", "Total Recovered", "Total Deaths", "Active Cases"],
    datasets: [
      {
        label: "People",
        backgroundColor: [
          "rgba(69, 72, 255,1)",
          "rgba(86, 255, 64,1)",
          "rgba(252, 76, 76,1)",
          "rgba(252, 243, 58,1)",
        ],
        hoverBackgroundColor: [
          "rgba(0,0,255,1)",
          "rgba(0,255,0,1)",
          "rgba(255,0,0,1)",
          "rgba(235,211,2,1)",
        ],
        data: [
          globalData.total_cases,
          globalData.total_recovered,
          globalData.total_deaths,
          globalData.total_serious_cases,
        ],
      },
    ],
  };

  useEffect(() => {
    async function fetchapi() {
      const res = await fetch(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      );
      let data = await res.json();
      setGlobalData(data.countryitems[0][118]);
    }
    fetchapi();
  }, []);

  return (
    <div style={{ width: "70%", display: "inline-grid" }}>
      <h2>{globalData.title} Covid-19 Status By Chart</h2>
      <Bar data={data} options={{}} />
    </div>
  );
}

export default CountryBarChart;