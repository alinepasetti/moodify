import { MoodStyle } from 'contexts/MoodProvider/types';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3.5rem;

  &> button {
    margin: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
    border-radius: 150px;
    cursor: pointer;
  }
`;
export const AudioPlayer = styled.audio``;

export const PlayPauseButton = styled.button<MoodStyle>`${({
  theme,
  mood,
}) => css`
  background: ${theme.colors[mood].primaryColor};
  border: none;
  height: 55px;
  width: 55px;
  font-size: 32px;
  color: ${theme.colors[mood].innerColor};
  background: #17b24e;
`}`;

export const ForwardBackwardButton = styled.button<MoodStyle>`${({
  theme,
  mood,
}) => css`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  font-family: monospace;
  font-size: 26px;
  height: 45px;
  width: 45px;
  background: ${theme.colors[mood].secondaryColor};
  color:  ${theme.colors[mood].innerColor};

  &:hover {
    color:  ${theme.colors[mood].primaryColor};
  }
`}`;
