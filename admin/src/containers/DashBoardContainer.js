import React from "react";
import Chart from "../components/Chart";

const DashBoardContainer = () => {
  const filter = {};
  const chartId = "647877b9-79d2-45f4-8c73-9384a7e5303e";
  const height = 400;
  const width = 600;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "auto",
        maxWidth: "70%",
      }}
    >
      <div style={{ margin: "auto", textAlign: "center", marginTop: "30px" }}>
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "20px",
            color: "darkgreen",
            fontWeight: "bold",
          }}
        >
          Chart Name one
        </h1>
        <Chart
          filter={filter}
          chartId={chartId}
          height={height}
          width={width}
        />
      </div>
      <div style={{ margin: "auto", textAlign: "center", marginTop: "30px" }}>
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "20px",
            color: "darkgreen",
            fontWeight: "bold",
          }}
        >
          Chart Name Two
        </h1>
        <Chart
          filter={filter}
          chartId={chartId}
          height={height}
          width={width}
        />
      </div>
      <div style={{ margin: "auto", textAlign: "center", marginTop: "30px" }}>
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "20px",
            color: "darkgreen",
            fontWeight: "bold",
          }}
        >
          Chart Name Three
        </h1>
        <Chart
          filter={filter}
          chartId={chartId}
          height={height}
          width={width}
        />
      </div>
      <div style={{ margin: "auto", textAlign: "center", marginTop: "30px" }}>
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "20px",
            color: "darkgreen",
            fontWeight: "bold",
          }}
        >
          Chart Name Four
        </h1>
        <Chart
          filter={filter}
          chartId={chartId}
          height={height}
          width={width}
        />
      </div>
    </div>
  );
};

export default DashBoardContainer;
