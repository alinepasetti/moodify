import ProgressBar from 'components/ProgressBar';
import * as Styled from './styles';
import { memo } from 'react';
import AudioControls from 'components/AudioControls';

const Player = () => {
  return (
    <Styled.Container>
      <ProgressBar />
      <AudioControls />
    </Styled.Container>
  );
};

export default memo(Player);
