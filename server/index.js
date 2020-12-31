const express = require('express');
const app = express();
const port = 3010;

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
