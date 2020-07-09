import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

function CountryPieChart({hanldeChange}) {
  const [globalData, setGlobalData] = useState([{}]);

  const data = {
    labels: ["Total Recovered", "Total Deaths", "Active Cases"],
    datasets: [
      {
        data: [
          globalData.total_recovered,
          globalData.total_deaths,
          globalData.total_serious_cases,
        ],
        backgroundColor: [
          "rgba(86, 255, 64,1)",
          "rgba(252, 76, 76,1)",
          "rgba(252, 243, 58,1)",
        ],
        hoverBackgroundColor: [
          "rgba(0,255,0,1)",
          "rgba(255,0,0,1)",
          "rgba(235,211,2,1)",
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
    <div>
      <h2>{globalData.title} Covid-19 Status By Pie</h2>
      <Pie data={data} width={500} />
    </div>
  );
}

export default CountryPieChart;