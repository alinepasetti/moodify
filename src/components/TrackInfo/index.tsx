import * as Styled from './styles';
import { memo, useContext } from 'react';
import { ActiveTrackContext } from '../../contexts/ActiveTrackProvider/context';
import Heading from '../../components/Heading';
import Text from '../Text';

const TrackInfo = () => {
  const {
    activeTrack: { name, artist },
  } = useContext(ActiveTrackContext);

  return (
    <Styled.Container>
      <Heading>{name}</Heading>
      <Text>{artist}</Text>
    </Styled.Container>
  );
};

export default memo(TrackInfo);
