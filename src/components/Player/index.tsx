import ProgressBar from 'components/ProgressBar';
import * as Styled from './styles';
import { memo } from 'react';
import AudioControls from 'components/AudioControls';
import { CurrentTimeProvider } from '../../contexts/CurrentTimeProvider';

const Player = () => {
  return (
    <CurrentTimeProvider>
      <Styled.Container>
        <ProgressBar />
        <AudioControls />
      </Styled.Container>
    </CurrentTimeProvider>
  );
};

export default memo(Player);
