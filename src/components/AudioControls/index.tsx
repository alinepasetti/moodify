import { CurrentTimeContext } from 'contexts/CurrentTimeProvider/context';
import * as Styled from './styles';
import { memo, useContext } from 'react';
import {
  BsArrowRightShort,
  BsArrowLeftShort,
  BsFillPlayFill,
  BsFillPauseFill,
} from 'react-icons/bs';

const AudioControls = () => {
  const { isPlaying } = useContext(CurrentTimeContext);

  return (
    <Styled.Container>
      <Styled.AudioPlayer />
      <Styled.ForwardBackwardButton>
        <BsArrowLeftShort />
      </Styled.ForwardBackwardButton>
      <Styled.PlayPauseButton>
        {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
      </Styled.PlayPauseButton>
      <Styled.ForwardBackwardButton>
        <BsArrowRightShort />
      </Styled.ForwardBackwardButton>
    </Styled.Container>
  );
};

export default memo(AudioControls);
