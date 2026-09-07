const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from my Dockerized Node.js app!',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Health check route (useful for verifying container is alive)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// A simple extra route to show the app is "functional"
app.get('/api/info', (req, res) => {
  res.json({
    app: 'nodejs-docker-demo',
    version: '1.0.0',
    node_version: process.version,
    platform: process.platform
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
