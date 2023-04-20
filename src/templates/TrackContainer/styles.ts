import { Title } from 'components/Heading/styles';
import { MoodStyle } from 'contexts/MoodProvider/types';
import styled, { css } from 'styled-components';

export const Container = styled.div<MoodStyle>`${({ theme, mood }) => css`
  background: ${theme.colors[mood].background};
  box-shadow: inset 15px 15px 25px ${theme.colors[mood].secondary.shadowDark}, inset -15px -15px 25px ${theme.colors[mood].secondary.shadowLight};
  display: flex;
  width: 100%;
  height: 100dvh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &> ${Title} {
    color: ${theme.colors[mood].text};
  }
`}`;
