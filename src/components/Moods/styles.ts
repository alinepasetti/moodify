import { MoodStyle } from 'contexts/MoodProvider/types';
import styled from 'styled-components';

export const Container = styled.div<MoodStyle>`
  width: 95%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: ${({ theme, mood }) => theme.colors[mood].text}
`;
