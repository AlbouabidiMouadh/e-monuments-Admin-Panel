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
          chartId={"6479ca5e-8dfe-43df-82dd-fe59d0404122"}
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
         SponsorShips 
        </h1>
        <Chart
          filter={filter}
          chartId={"647c7b12-b1b7-4e2e-852c-8619fa9d7415"}
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
          chartId={"6479cf7b-186d-4217-8b4e-e1cdb28cdece"}
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
          chartId={"6479d33e-123e-4671-8882-37b308f9220e"}
          height={height}
          width={width}
        />
      </div>
    </div>
  );
};

export default DashBoardContainer;
