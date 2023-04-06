import Text from '../Text';
import * as Styled from './styles';
import { memo, useContext } from 'react';
import { CurrentTimeContext } from '../../contexts/CurrentTimeProvider/context';
import { MoodContext } from '../../contexts/MoodProvider/context';

const ProgressBar = () => {
  const { duration, currentTime, progressBarRef } =
    useContext(CurrentTimeContext);
  const { mood } = useContext(MoodContext);
  return (
    <Styled.Container>
      <Styled.Input mood={mood} ref={progressBarRef}>
        <Styled.SliderThumb mood={mood} />
        <Styled.Fill mood={mood} />
      </Styled.Input>
      <div>
        <Text>{currentTime}</Text>
        <Text>{duration}</Text>
      </div>
    </Styled.Container>
  );
};

export default memo(ProgressBar);
