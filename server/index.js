const express = require('express');
const app = express();
//require('dotenv').config();
const port = process.env.PORT || 3010;
const { QUANDL_API_KEY } = require('./quandlKey.js');
const { parseEuribor } = require('./helpers/parseEuribor.js')
const axios = require('axios');
const path = require('path'); // may be able to remove this
const redis = require('redis');

app.use(express.static('client/dist'));

const client = redis.createClient();


// set up a cron job to erase the cache on the first day of every month
var CronJob = require('cron').CronJob;
var job = new CronJob('00 00 00 1 * *', function() {
  // erase the redis cache
  client.flushdb( function (err, succeeded) {
    console.log(succeeded); // will be OK if successfull
  });
}, null, true, 'America/Los_Angeles');
job.start();


app.get('/euribor', (req, res) => {

  client.get('euribor', (err, redisReply) => {
    if (redisReply) {
      res.status(200).send(JSON.parse(redisReply));
    } else {
      axios({
        method: 'get',
        url: 'https://www.quandl.com/api/v3/datasets/ECB/RTD_M_S0_N_C_EUR3M_E.json',
        params: {
          api_key: QUANDL_API_KEY,
          start_date: '2010-01-01',
          order: 'asc'
        }
      })
       .then((data) => {
         const timeSeries = parseEuribor(data);
         client.set('euribor', JSON.stringify(timeSeries));
         res.status(200).send(timeSeries);
       })
       .catch((err) => {
         console.log('there was an error', err);
         res.status(400).send();
       })
    }
  })

})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
