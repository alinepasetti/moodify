import * as Styled from './styles';
import Text from '../Text';
import { MoodDetail } from '../../contexts/MoodProvider/types';
import { memo, useContext } from 'react';
import Link from 'next/link';
import { MoodContext } from 'contexts/MoodProvider/context';

type MoodCardProps = {
  mood: MoodDetail;
};

const MoodCard = ({ mood }: MoodCardProps) => {
  const { setMood } = useContext(MoodContext);
  return (
    <Link href="tracks/id">
      <Styled.Container onClick={() => setMood(mood.type)}>
        <Styled.Icon src={`./assets/mood-icons/${mood.icon}`} />
        <Text>{mood.title}</Text>
      </Styled.Container>
    </Link>
  );
};

export default memo(MoodCard);
