import { ActiveTrackProps } from '../contexts/ActiveTrackProvider/types';
import { RequestStatus } from '../hooks/useFetch';
import { ActiveTrackContext } from '../contexts/ActiveTrackProvider/context';

export const TRACK_MOCK = {
  id: '1',
  name: 'Alien in London',
  artists: ['Sting'],
  album: 'No name',
  imgUrl: 'png.com',
  audioSrc: 'www.music.com',
  duration_ms: 230,
};

export const buildActiveTrackProviderValueMock = (
  activeTrack = TRACK_MOCK,
  requestStatus = RequestStatus.SUCCESS,
): ActiveTrackProps => {
  return {
    activeTrack,
    requestStatus,
  };
};

export const createActiveTrackProviderWrapper = (children: React.ReactNode) => (
  <ActiveTrackContext.Provider value={buildActiveTrackProviderValueMock()}>
    {children}
  </ActiveTrackContext.Provider>
);
