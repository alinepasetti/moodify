import { Heading } from 'components/Heading';
import { ActiveTrackContext } from 'contexts/ActiveTrackProvider/context';
import { useContext } from 'react';
import * as Styled from './styles';
import { RequestStatus } from 'hooks/useFetch';

function TrackDetail() {
  const { activeTrack, requestStatus } = useContext(ActiveTrackContext);

  return (
    <>
      {requestStatus === RequestStatus.ERROR && (
        <Heading>Artist is on rehab. Try again.</Heading>
      )}

      {(requestStatus === RequestStatus.LOADING ||
        requestStatus === RequestStatus.IDLE ||
        !activeTrack) && <Heading>LOADING...</Heading>}

      {requestStatus === RequestStatus.SUCCESS && (
        <Styled.Container>{activeTrack.name}</Styled.Container>
      )}
    </>
  );
}

export default TrackDetail;
