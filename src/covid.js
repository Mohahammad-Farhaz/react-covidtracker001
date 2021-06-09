import React, { useEffect } from 'react';
import './style.css';

const Covid = () => {
  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      const actualData = await res.json;
      console.log(actualData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div>
      <h1>🔴 LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    </div>
  );
};
export default Covid;
