import * as Styled from './styles';
import { memo } from 'react';
import ProgressBar from '../ProgressBar';
import AudioControls from '../AudioControls';
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
