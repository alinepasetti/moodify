import { useCurrentTime } from '../../hooks/useCurrentTime';
import { CurrentTimeContext } from './context';

export type CurrentTimeProviderProps = {
  children: React.ReactNode;
};

export const CurrentTimeProvider = ({ children }: CurrentTimeProviderProps) => {
  const {
    isPlaying,
    togglePlaying,
    duration,
    currentTime,
    audioPlayerRef,
    progressBarRef,
  } = useCurrentTime();

  return (
    <CurrentTimeContext.Provider
      value={{
        isPlaying,
        togglePlaying,
        duration,
        currentTime,
        audioPlayerRef,
        progressBarRef,
      }}
    >
      {children}
    </CurrentTimeContext.Provider>
  );
};
