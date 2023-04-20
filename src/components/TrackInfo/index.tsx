import * as Styled from './styles';
import { memo, useContext } from 'react';
import { ActiveTrackContext } from '../../contexts/ActiveTrackProvider/context';
import Heading from '../Heading';
import Text from '../Text';

const TrackInfo = () => {
  const {
    activeTrack: { name, artists },
  } = useContext(ActiveTrackContext);

  return (
    <Styled.Container>
      <Heading>{name}</Heading>
      <Text>{artists.join(', ')}</Text>
    </Styled.Container>
  );
};

export default memo(TrackInfo);
