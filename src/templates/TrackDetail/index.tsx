import { ActiveTrackContext } from '../../contexts/ActiveTrackProvider/context';
import { useContext } from 'react';
import * as Styled from './styles';
import { RequestStatus } from '../../hooks/useFetch';
import Heading from '../../components/Heading';
import Track from '../../components/TrackDetail';

function TrackDetail() {
  const { requestStatus, activeTrack } = useContext(ActiveTrackContext);

  return (
    <Styled.Container>
      {requestStatus === RequestStatus.ERROR && (
        <Heading>Artist is on rehab. Try again.</Heading>
      )}

      {(requestStatus === RequestStatus.LOADING ||
        requestStatus === RequestStatus.IDLE ||
        !activeTrack) && <Heading>LOADING...</Heading>}

      {requestStatus === RequestStatus.SUCCESS && <Track />}
    </Styled.Container>
  );
}

export default TrackDetail;
