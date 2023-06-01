import React, { useEffect, useRef, useState } from 'react';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const Chart = ({ filter, chartId, height, width }) => {
  const sdk = new ChartsEmbedSDK({ baseUrl: 'https://charts.mongodb.com/charts-new-uhtfm' });
  const chartDiv = useRef(null);
  const [rendered, setRendered] = useState(false);
  const [chart] = useState(sdk.createChart({ chartId, height, width, theme: 'dark' }));

  useEffect(() => {
    chart.render(chartDiv.current)
      .then(() => setRendered(true))
      .catch(err => console.log('Error during Charts rendering.', err));
  }, [chart]);

  useEffect(() => {
    if (rendered) {
      chart.setFilter(filter)
        .catch(err => console.log('Error while filtering.', err));
    }
  }, [chart, filter, rendered]);

  return <div className="chart" ref={chartDiv} />;
};

const DashBoardContainer = () => {
  const filter = {}; // Add your filter object if needed
  const chartId = '647877b9-79d2-45f4-8c73-9384a7e5303e'; // Replace with your actual chart ID
  const height = 400;
  const width = 600;

  return (
    <div>
      <h1>Dashboard</h1>
      <Chart filter={filter} chartId={chartId} height={height} width={width} />
    </div>
  );
};

export default DashBoardContainer;
