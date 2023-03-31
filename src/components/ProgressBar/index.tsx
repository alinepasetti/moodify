import Text from '../Text';
import * as Styled from './styles';
import { memo, useContext } from 'react';
import { CurrentTimeContext } from 'contexts/CurrentTimeProvider/context';

const ProgressBar = () => {
  const { duration, currentTime, progressBarRef } =
    useContext(CurrentTimeContext);
  return (
    <Styled.Container>
      <Styled.Input
        type="range"
        className="progressBar"
        defaultValue="0"
        ref={progressBarRef}
      ></Styled.Input>
      <div>
        <Text>{currentTime}</Text>
        <Text>{duration}</Text>
      </div>
    </Styled.Container>
  );
};

export default memo(ProgressBar);
