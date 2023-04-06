import * as Styled from './styles';
import { memo } from 'react';
import MoodCard from '../MoodCard';
import { moods } from '../../contexts/MoodProvider/types';
import Heading from '../Heading';

const Moods = () => {
  return (
    <Styled.Container>
      <Heading>Select your mood:</Heading>
      {moods.map((mood) => (
        <MoodCard mood={mood} key={mood.type} />
      ))}
    </Styled.Container>
  );
};

export default memo(Moods);
