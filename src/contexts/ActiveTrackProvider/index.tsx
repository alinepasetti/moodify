import useActiveTrack from 'hooks/useActiveTrack';
import { ActiveTrackContext } from './context';

export type ActiveTrackProviderProps = {
  children: React.ReactNode;
  id: string;
};

export const ActiveTrackProvider = ({
  children,
  id,
}: ActiveTrackProviderProps) => {
  const { activeTrack, requestStatus } = useActiveTrack(id);

  return (
    <ActiveTrackContext.Provider
      value={{
        activeTrack,
        requestStatus,
      }}
    >
      {children}
    </ActiveTrackContext.Provider>
  );
};
