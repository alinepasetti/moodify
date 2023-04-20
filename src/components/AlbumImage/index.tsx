import { memo, useContext } from 'react';
import { ActiveTrackContext } from '../../contexts/ActiveTrackProvider/context';
import * as Styled from './styles';

const AlbumImage = () => {
  const {
    activeTrack: { imgUrl, album },
  } = useContext(ActiveTrackContext);

  return <Styled.Image src={imgUrl} alt={album} />;
};

export default memo(AlbumImage);
