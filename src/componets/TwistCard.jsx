import React, { useState } from 'react';

const TwistCard = ({ onApplyTwist }) => {
  const [twist, setTwist] = useState(null);

  const twists = [
    { id: 1, description: 'Double your points!', effect: (score) => score * 2 },
    { id: 2, description: 'Lose 50 points!', effect: (score) => score - 50 },
    { id: 3, description: 'Add 100 points!', effect: (score) => score + 100 },
    { id: 4, description: 'Halve your points!', effect: (score) => Math.floor(score / 2) },
  ];

  const drawTwist = () => {
    const randomTwist = twists[Math.floor(Math.random() * twists.length)];
    setTwist(randomTwist);
    if (onApplyTwist) {
      onApplyTwist(randomTwist.effect);
    }
  };

  return (
    <div>
      <h2>Twist Card</h2>
      <button onClick={drawTwist}>Draw a Twist</button>
      {twist && (
        <div>
          <p>{twist.description}</p>
        </div>
      )}
    </div>
  );
};

export default TwistCard;