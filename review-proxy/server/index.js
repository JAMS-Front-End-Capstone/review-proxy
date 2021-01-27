const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(express.static(PUBLIC_DIR));
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/api/reviews', (req, res) => {
  axios.get('http://localhost:3003/api/reviews')
  .then((result) => res.send(result.data));
})

app.get('/api/ratings', (req, res) => {
  axios.get('http://localhost:3003/api/ratings')
  .then((result) => res.send(result.data));
})


const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});