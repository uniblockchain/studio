const express = require('express');
const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.listen(3000, () => {
  console.log('Server running - http://localhost:3000')
});
