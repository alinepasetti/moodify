import * as Styled from './styles';
import { useContext } from 'react';
import Heading from '../../components/Heading';
import { MoodContext } from '../../contexts/MoodProvider/context';
import Moods from '../../components/Moods';

function Home() {
  const { mood } = useContext(MoodContext);

  return (
    <Styled.Wrapper mood={mood}>
      <Heading>moodify.</Heading>
      <Moods />
    </Styled.Wrapper>
  );
}

export default Home;
