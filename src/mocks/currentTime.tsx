import { CurrentTimeContext } from '../contexts/CurrentTimeProvider/context';
import { CurrentTimeProps } from '../contexts/CurrentTimeProvider/types';
import { vi } from 'vitest';

export const buildCurrentTimeProviderValueMock = (
  isPlaying = false,
  duration = '2:30',
  currentTime = '0',
  trackProgress = 0,
): CurrentTimeProps => {
  return {
    isPlaying,
    duration,
    currentTime,
    trackProgress,
    togglePlaying: vi.fn(),
    audioPlayerRef: null,
    progressBarRef: null,
    sliderThumbRef: null,
  };
};

export const createCurrentTimeProviderWrapper = (children: React.ReactNode) => (
  <CurrentTimeContext.Provider value={buildCurrentTimeProviderValueMock()}>
    {children}
  </CurrentTimeContext.Provider>
);
