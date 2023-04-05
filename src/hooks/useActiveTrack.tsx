import { data } from 'contexts/ActiveTrackProvider/mockData';
import { useEffect, useState, useCallback, useRef } from 'react';
import { RequestStatus, useFetch, useMock } from './useFetch';
import { parseSpotifyResponse } from 'services/tracks';
import { Track } from 'contexts/ActiveTrackProvider/types';

const useActiveTrack = (id: string) => {
  const [activeTrack, setActiveTrack] = useState<Track>(null);
  const { setEndPoint, result, requestStatus, setRequestStatus } =
    useFetch('ActiveTrack');
  const idRef = useRef<string>('');

  const delay = useCallback(
    async (ms: number) => new Promise((res) => setTimeout(res, ms)),
    [],
  );

  const getMockData = useCallback(async () => {
    console.log('useActiveTrack > getMock data callback > delay');

    await delay(0);
    const activeTrack = parseSpotifyResponse(data);
    setActiveTrack(activeTrack);
    setRequestStatus(RequestStatus.SUCCESS);
    console.log('useActiveTrack > getMock data callback > mock data set!');
  }, [delay, setRequestStatus]);

  const setResult = useCallback(() => {
    if (useMock) return getMockData();

    console.log('useActiveTrack > result useEffect > request result changed');
    const track = parseSpotifyResponse(result);
    setActiveTrack(track);
    setRequestStatus(RequestStatus.SUCCESS);
    console.log(
      'useActiveTrack > result useEffect > result set, status set to success!',
    );
  }, [setRequestStatus, getMockData, result]);

  const getTrackById = useCallback(
    (id: string) => {
      console.log(
        'useActiveTrack > getTrackById > new track detail, fetching info.',
      );
      setEndPoint(`tracks/${id}`);
    },
    [setEndPoint],
  );

  useEffect(() => {
    if (result) {
      setResult();
    }
  }, [result, setResult]);

  useEffect(() => {
    const validId = id && idRef.current !== id;
    async function asyncDelay() {
      if (validId) {
        idRef.current = id;
        setRequestStatus(RequestStatus.LOADING);
        console.log(
          'useActiveTrack > get id useEffect > received id - loading',
          id,
        );
        getTrackById(id);
      }
    }
    asyncDelay();
  }, [id, setRequestStatus, getTrackById]);

  return { activeTrack, requestStatus };
};

export default useActiveTrack;
