import { MoodStyle } from 'contexts/MoodProvider/types';
import styled from 'styled-components';

export const Container = styled.div<MoodStyle>`
  background: ${({ theme, mood }) => theme.colors[mood].secondary.colorOne};
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
