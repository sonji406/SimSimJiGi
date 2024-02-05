import React, { useState } from 'react';

export default function Emotions() {
  const [mood, setMood] = useState<string>('');

  const handleMoodChange = (newMood: string) => {
    setMood(newMood);
  };

  return (
    <main>
      <h1>오늘의 기분은 어떤가요?</h1>
      <button onClick={() => handleMoodChange('행복')}>행복</button>
      <button onClick={() => handleMoodChange('슬픔')}>슬픔</button>
      <button onClick={() => handleMoodChange('분노')}>분노</button>
      <button onClick={() => handleMoodChange('피곤')}>피곤</button>
      <p>선택한 기분: {mood}</p>
    </main>
  );
}
