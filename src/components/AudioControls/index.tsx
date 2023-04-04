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
import { useButtonStatus } from 'hooks/useButtonStatus';

const AudioControls = () => {
  const { isPlaying, togglePlaying, audioPlayerRef } =
    useContext(CurrentTimeContext);
  const {
    activeTrack: { audioSrc },
  } = useContext(ActiveTrackContext);
  const { mood } = useContext(MoodContext);
  const { active: backButtonActive, activateButton: activateBackButton } =
    useButtonStatus();
  const { active: forwardButtonActive, activateButton: activateForwardButton } =
    useButtonStatus();
  const { active: playButtonActive, activateButton: activatePlayButton } =
    useButtonStatus();

  return (
    <Styled.Container>
      <Styled.AudioPlayer
        ref={audioPlayerRef}
        src={audioSrc}
        preload="metadata"
      />
      <Styled.ForwardBackwardButton
        mood={mood}
        active={backButtonActive}
        onTouchStart={() => activateBackButton(true)}
        onTouchEnd={() => activateBackButton(false)}
      >
        <BsArrowLeftShort />
      </Styled.ForwardBackwardButton>
      <Styled.PlayPauseButton
        mood={mood}
        onClick={togglePlaying}
        active={playButtonActive}
        onTouchStart={() => activatePlayButton(true)}
        onTouchEnd={() => activatePlayButton(false)}
      >
        {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
      </Styled.PlayPauseButton>
      <Styled.ForwardBackwardButton
        mood={mood}
        active={forwardButtonActive}
        onTouchStart={() => activateForwardButton(true)}
        onTouchEnd={() => activateForwardButton(false)}
      >
        <BsArrowRightShort />
      </Styled.ForwardBackwardButton>
    </Styled.Container>
  );
};

export default memo(AudioControls);
