const express = require('express');
const app = express();
//require('dotenv').config();
const port = process.env.PORT || 3010;
const { QUANDL_API_KEY } = require('./quandlKey.js');
const { parseEuribor } = require('./helpers/parseEuribor.js')
const axios = require('axios');


app.use(express.static('client/dist'));

app.get('/euribor', (req, res) => {
  axios({
    method: 'get',
    url: 'https://www.quandl.com/api/v3/datasets/ECB/RTD_M_S0_N_C_EUR3M_E.json',
    params: {
      api_key: QUANDL_API_KEY,
      start_date: '2010-01-01'
    }
  })
   .then((data) => {
     const timeSeries = parseEuribor(data);
     res.status(200).send(timeSeries);
   })
   .catch((err) => {
     console.log('there was an error', err);
     res.status(400).send();
   })


})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
