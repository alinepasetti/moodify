import * as Styled from './styles';
import { memo, useContext } from 'react';
import MoodCard from '../MoodCard';
import { moods } from '../../contexts/MoodProvider/types';
import Heading from '../Heading';
import { MoodContext } from 'contexts/MoodProvider/context';

const Moods = () => {
  const { mood } = useContext(MoodContext);
  return (
    <Styled.Container mood={mood}>
      <Heading>Select your mood:</Heading>
      <div>
        {moods.map((mood) => (
          <MoodCard mood={mood} key={mood.type} />
        ))}
      </div>
    </Styled.Container>
  );
};

export default memo(Moods);
