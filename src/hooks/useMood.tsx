import { Mood } from 'contexts/MoodProvider/types';
import { useState } from 'react';

export const useMood = () => {
  const [mood, setMood] = useState<Mood>(Mood.ABDUCT_ME);
  return { mood, setMood };
};
