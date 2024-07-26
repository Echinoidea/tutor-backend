require('dotenv').config();
const express = require('express');
const cors = require('cors')
const classRoutes = require('./routes/classRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()) // This fixes failed to fetch error
app.use('/api', classRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});