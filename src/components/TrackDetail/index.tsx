import * as Styled from './styles';
import { memo, useContext } from 'react';
import { ActiveTrackContext } from '../../contexts/ActiveTrackProvider/context';
import AlbumImage from '../AlbumImage';
import Text from '../Text';
import Player from '../Player';
import TrackInfo from '../TrackInfo';
const TrackDetail = () => {
  const {
    activeTrack: { album },
  } = useContext(ActiveTrackContext);

  return (
    <Styled.Container>
      <div>
        <Text>{album}</Text>
        <AlbumImage />
      </div>
      <div>
        <TrackInfo />
        <Player />
      </div>
    </Styled.Container>
  );
};

export default memo(TrackDetail);
