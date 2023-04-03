import { useMood } from 'hooks/useMood';
import { MoodContext } from './context';

export type MoodProviderProps = {
  children: React.ReactNode;
};

export const MoodProvider = ({ children }: MoodProviderProps) => {
  const { mood, setMood } = useMood();

  return (
    <MoodContext.Provider
      value={{
        mood,
        setMood,
      }}
    >
      {children}
    </MoodContext.Provider>
  );
};
