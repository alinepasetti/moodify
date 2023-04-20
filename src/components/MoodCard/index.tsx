import * as Styled from './styles';
import Text from '../Text';
import { MoodDetail } from '../../contexts/MoodProvider/types';
import { memo, useContext } from 'react';
import Link from 'next/link';
import { MoodContext } from '../../contexts/MoodProvider/context';
import { useButtonStatus } from '../../hooks/useButtonStatus';

type MoodCardProps = {
  mood: MoodDetail;
};

const MoodCard = ({ mood }: MoodCardProps) => {
  const { setMood, mood: currentMood } = useContext(MoodContext);
  const { active, activateButton } = useButtonStatus();
  return (
    <Link href={`/tracks/${mood.trackId}`}>
      <Styled.Container
        mood={currentMood}
        cardMood={mood.type}
        active={active}
        onClick={() => setMood(mood.type)}
        onTouchStart={() => activateButton(true)}
        onTouchEnd={() => activateButton(false)}
      >
        <Styled.Icon
          alt={mood.title}
          src={`./assets/mood-icons/${mood.icon}`}
        />
        <Text>{mood.title}</Text>
      </Styled.Container>
    </Link>
  );
};

export default memo(MoodCard);
