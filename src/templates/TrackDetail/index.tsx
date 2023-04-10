import { useContext, lazy, Suspense } from 'react';
import * as Styled from './styles';
import { ActiveTrackContext } from '../../contexts/ActiveTrackProvider/context';
import { MoodContext } from '../../contexts/MoodProvider/context';
import { RequestStatus } from '../../hooks/useFetch';
import Heading from '../../components/Heading';
import Head from 'next/head';
const Track = lazy(async () => await import('../../components/TrackDetail'));

function TrackDetail() {
  const { requestStatus, activeTrack } = useContext(ActiveTrackContext);
  const { mood } = useContext(MoodContext);

  return (
    <Styled.Container mood={mood}>
      {requestStatus === RequestStatus.ERROR && (
        <Heading>Artist is on rehab. Try again.</Heading>
      )}

      {(requestStatus === RequestStatus.LOADING ||
        requestStatus === RequestStatus.IDLE ||
        !activeTrack) && <Heading>LOADING...</Heading>}

      {requestStatus === RequestStatus.SUCCESS && (
        <>
          <Head>
            <title>
              moodify - {activeTrack.name} - {activeTrack.artists[0]}
            </title>
          </Head>
          <Suspense fallback={<Heading>LOADING...</Heading>}>
            <Track />
          </Suspense>
        </>
      )}
    </Styled.Container>
  );
}

export default TrackDetail;
