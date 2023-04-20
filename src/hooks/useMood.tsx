import { Mood } from 'contexts/MoodProvider/types';
import { useState } from 'react';

export const useMood = () => {
  const [mood, setMood] = useState<Mood>(Mood.MIND_THE_GAP);
  return { mood, setMood };
};
