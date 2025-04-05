import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [survivalTips, setSurvivalTips] = useState([]);
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    // Fetch survival tips from the backend
    const fetchTips = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tips');
        setSurvivalTips(response.data);
      } catch (error) {
        console.error('Error fetching survival tips:', error);
      }
    };

    // Fetch challenges from the backend
    const fetchChallenges = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/challenges');
        setChallenges(response.data);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    fetchTips();
    fetchChallenges();
  }, []);

  return (
    <div>
      <header>
        <h1>Survive the Situation is Live 🔥</h1>
      </header>
      <main>
        <h2>Survival Tips:</h2>
        <ul>
          {survivalTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
        <h2>Challenges:</h2>
        <ul>
          {challenges.map((challenge) => (
            <li key={challenge.id}>{challenge.description}</li>
          ))}
        </ul>
      </main>
      <footer>
        <p>&copy; 2025 Survive the Situation. All rights reserved.</p>
      </footer>
    </div>
  );
}
