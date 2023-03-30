import { useCurrentTime } from 'hooks/useCurrentTime';
import { CurrentTimeContext } from './context';

export type CurrentTimeProviderProps = {
  children: React.ReactNode;
};

export const CurrentTimeProvider = ({ children }: CurrentTimeProviderProps) => {
  const { isPlaying, togglePlaying } = useCurrentTime();

  return (
    <CurrentTimeContext.Provider
      value={{
        isPlaying,
        togglePlaying,
      }}
    >
      {children}
    </CurrentTimeContext.Provider>
  );
};
