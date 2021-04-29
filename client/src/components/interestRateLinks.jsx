import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const InterestRateLinks = () => {
  const [euriborTimeSeries, setEuriborTimeSeries] = useState({});

  useEffect(() => {
    axios.get('/euribor') // for development
    //axios.get('/http://143.198.104.94:3010/euribor') // for production
      .then( (updatedEuriborTimeSeries) => {
        setEuriborTimeSeries(updatedEuriborTimeSeries.data);
      })
      .catch((err) => {
        console.log('there was an error');
      })
  },[]);


  return (
    <div>
      <div style={{width: "80%"}}>
      <Line
        data ={{
          labels: euriborTimeSeries.dates,
          datasets: [
            {
              label: 'Euribor 3m rate (%)',
              data: euriborTimeSeries.prices
            }
          ]
        }}
        options ={{
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false
                  }
              }]
          }
      }}
      />
    </div>

    </div>
  )
}

export default InterestRateLinks;