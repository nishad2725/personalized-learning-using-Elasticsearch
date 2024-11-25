const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Client } = require('@elastic/elasticsearch');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Elasticsearch Client
const client = new Client({ node: 'http://localhost:9200' });

module.exports = client;

// Search Courses Endpoint
app.get('/search-courses', async (req, res) => {
  const { query } = req.query;

  try {
    const response = await client.search({
      index: 'courses',
      body: {
        query: {
          multi_match: {
            query: query,
            fields: ['title', 'description', 'tags'], // Fields to search in
          },
        },
      },
    });

    // Check the response structure based on Elasticsearch client version
    const hits = response.hits?.hits || response.body?.hits?.hits;

    if (hits && hits.length > 0) {
      const results = hits.map(hit => hit._source);
      res.json(results);
    } else {
      res.status(404).json({ error: 'No results found' });
    }
  } catch (error) {
    console.error('Elasticsearch Error:', error);
    res.status(500).json({ error: 'An error occurred while querying Elasticsearch.' });
  }
});

// Start the Server
const PORT = 3000; // Set the backend port to 3000
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
