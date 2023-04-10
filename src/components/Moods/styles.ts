import { Title } from '../Heading/styles';
import { MoodStyle } from '../../contexts/MoodProvider/types';
import styled from 'styled-components';

export const Container = styled.div<MoodStyle>`
  width: 95%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: ${({ theme, mood }) => theme.colors[mood].text};

  &> div {
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  ${Title} {
    font-size: 2.4rem;
    font-weight: 400;
    margin-bottom: 0;
  }
`;
