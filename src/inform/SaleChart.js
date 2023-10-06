import React, { useEffect } from "react";
import Chart from "chart.js";

import "./SaleChart.css";

const SaleChart = () => {
  useEffect(() => {
    // 차트를 렌더링할 때 실행되는 코드
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["10/9", "10/10", "10/11", "10/12", "10/13"],
        datasets: [
          {
            label: "CPU",
            data: [65, 59, 80, 15, 27],
            lineTension: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#DD2355",
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "black",
              },
              gridLines: {
                color: "#43000A",
                lineWidth: 2,
                fontFamily: "Pretendard-Regular",
                drawOnChartArea: false, // 그리드 라인을 차트 영역 안에 그리지 않음
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "black",
              },
              gridLines: {
                color: "#43000A",
                lineWidth: 2,
                fontFamily: "Pretendard-Regular",
                drawOnChartArea: false, // 그리드 라인을 차트 영역 안에 그리지 않음
              },
            },
          ],
        },
        legend: {
          display: false, // Label이 보이지 않도록 설정
        },
      },
    });
  }, []); // 빈 배열을 넘겨서 한 번만 실행되도록 합니다.

  return (
    <div style={{ width: "100%", height: "200px" }}>
      <canvas id="myChart" width="330" height="200"></canvas>
    </div>
  );
};

export default SaleChart;
