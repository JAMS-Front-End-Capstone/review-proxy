const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(express.static(PUBLIC_DIR));
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/api/reviews', (req, res) => {
  axios.get('http://localhost:3003/api/reviews/1')
    .then((result) => res.send(result.data));
})

app.get('/api/ratings', (req, res) => {
  axios.get('http://localhost:3003/api/ratings/1')
    .then((result) => res.send(result.data));
})

// app.get('/api/retrieve', (req, res) => {
//   axios.get('http://localhost:3004/api/retrieve')
//     .then((result) => res.send(result.data));
// })

// app.get('/API/retrieve', (req, res) => {
//   axios.get('http://localhost:3005/API/retrieve')
//     .then((result) => res.send(result.data));
// })



const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});