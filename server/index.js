const express = require('express');
const app = express();
//require('dotenv').config();
const port = process.env.PORT || 3010;
const { QUANDL_API_KEY } = require('./quandlKey.js');
const axios = require('axios');


app.use(express.static('client/dist'));

app.get('/test', (req, res) => {
  console.log("i'm in the test endpoint");
  console.log("quandlKey", QUANDL_API_KEY);

  axios({
    method: 'get',
    url: 'https://www.quandl.com/api/v3/datasets/ECB/RTD_M_S0_N_C_EUR3M_E.json',
    params: {
      api_key: QUANDL_API_KEY,
      start_date: '2010-01-01'
    }
  })
   .then((data) => {
     console.log('I am in the then')
     console.log('data', data);
     res.status(200).send('done')
   })
   .catch((err) => {
    console.log('I am in the error')
     console.log('there was an error', err);
     res.status(400).send();
   })


})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
