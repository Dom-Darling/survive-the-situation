const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Example route to fetch survival tips
app.get('/api/tips', (req, res) => {
  const tips = [
    'Stay hydrated.',
    'Keep calm and assess the situation.',
    'Always have a backup plan.',
  ];
  res.json(tips);np
});

// New route to fetch challenges
app.get('/api/challenges', (req, res) => {
  const challenges = [
    { id: 1, description: 'Find clean water in 30 minutes.' },
    { id: 2, description: 'Build a shelter before sunset.' },
    { id: 3, description: 'Start a fire without matches.' },
  ];
  res.json(challenges);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});