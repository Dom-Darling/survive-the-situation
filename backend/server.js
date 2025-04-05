const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


// Middleware to parse JSON
app.use(express.json());

// Example route to fetch survival tips
// The challenges can be shared on social media or with friends.
// The challenges can be used to create a community of survival enthusiasts.
// The challenges can be used to promote teamwork and collaboration.
// The challenges can be used to create a leaderboard or a point system.
// The challenges can be used to create a sense of achievement and accomplishment.
// The challenges can be used to create a sense of adventure and exploration.
// The challenges can be used to create a sense of urgency and excitement.
// The challenges can be used to create a sense of fun and enjoyment.
// The challenges can be used to create a sense of learning and growth.
// The challenges can be used to create a sense of competition and rivalry
app.get('/api/tips', (req, res) => {
  const tips = [
    'Stay hydrated.',
    'Keep calm and assess the situation.',
    'Always have a backup plan.',
  ];
  res.json(tips);np
});

// New route to fetch challenges that users can complete
// This route will provide a list of challenges for users to complete
// and earn points or rewards.
// The challenges can be related to survival skills, teamwork, or problem-solving.
// Each challenge can have a unique ID and a description.
// The challenges can be randomized or selected based on user preferences.
// The challenges can be stored in a database or a JSON file.
// The challenges can be fetched from the backend using an API endpoint.
// The challenges can be displayed in the frontend using React components.
// The challenges can be completed by users and submitted for review.
// The challenges can be graded based on criteria such as creativity, effectiveness, and teamwork.
// The challenges can be used to gamify the survival experience and encourage users to learn new skills.
app.get('/api/challenges', (req, res) => {
  const challenges = [
    { id: 1, description: 'Find clean water in 30 minutes.' },
    { id: 2, description: 'Build a shelter before sunset.' },
    { id: 3, description: 'Start a fire without matches.' },
    { id: 4, description: 'Identify three edible plants.' },
    { id: 5, description: 'Navigate to a specific location using only a map and compass.' },
    { id: 6, description: 'Signal for help using natural materials.' },
    { id: 7, description: 'Create a makeshift fishing rod.' },
    { id: 8, description: 'Construct a trap for small game.' },
    { id: 9, description: 'Identify and avoid poisonous plants.' },
    { id: 10, description: 'Find your way back to camp using the stars.' },
  ];
  res.json(challenges);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});