require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('.'));

app.get('/api/gif', async (req, res) => {
  const query = req.query.q || 'cats';
  const apiKey = process.env.GIPHY_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Missing API key' });
  }

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=1`
    );
    const data = await response.json();

    if (!data.data.length) {
      return res.status(404).json({ error: 'No GIFs found' });
    }

    res.json(data.data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch GIF' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
