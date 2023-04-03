import { CurrentTimeContext } from 'contexts/CurrentTimeProvider/context';
import * as Styled from './styles';
import { memo, useContext } from 'react';
import {
  BsArrowRightShort,
  BsArrowLeftShort,
  BsFillPlayFill,
  BsFillPauseFill,
} from 'react-icons/bs';
import { ActiveTrackContext } from 'contexts/ActiveTrackProvider/context';
import { MoodContext } from 'contexts/MoodProvider/context';

const AudioControls = () => {
  const { isPlaying, togglePlaying, audioPlayerRef } =
    useContext(CurrentTimeContext);
  const {
    activeTrack: { audioSrc },
  } = useContext(ActiveTrackContext);
  const { mood } = useContext(MoodContext);

  return (
    <Styled.Container>
      <Styled.AudioPlayer
        ref={audioPlayerRef}
        src={audioSrc}
        preload="metadata"
      />
      <Styled.ForwardBackwardButton mood={mood}>
        <BsArrowLeftShort />
      </Styled.ForwardBackwardButton>
      <Styled.PlayPauseButton mood={mood} onClick={togglePlaying}>
        {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
      </Styled.PlayPauseButton>
      <Styled.ForwardBackwardButton mood={mood}>
        <BsArrowRightShort />
      </Styled.ForwardBackwardButton>
    </Styled.Container>
  );
};

export default memo(AudioControls);
