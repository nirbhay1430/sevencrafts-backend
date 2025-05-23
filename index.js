const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.get('/', (req, res) => {
  res.send('SevenCrafts backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});