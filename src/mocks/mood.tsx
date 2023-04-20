import { Mood, MoodProps } from '../contexts/MoodProvider/types';
import { MoodContext } from '../contexts/MoodProvider/context';
import { vi } from 'vitest';

export const buildMoodProviderValueMock = (
  mood = Mood.ABDUCT_ME,
): MoodProps => {
  return {
    mood,
    setMood: vi.fn(),
  };
};

export const createMoodProviderWrapper = (children: React.ReactNode) => (
  <MoodContext.Provider value={buildMoodProviderValueMock()}>
    {children}
  </MoodContext.Provider>
);
