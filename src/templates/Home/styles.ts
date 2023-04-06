import { MoodStyle } from 'contexts/MoodProvider/types';
import styled from 'styled-components';

export const Wrapper = styled.div<MoodStyle>`
  background: ${({ theme, mood }) => theme.colors[mood].background};
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
