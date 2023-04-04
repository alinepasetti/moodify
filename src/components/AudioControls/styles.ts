import { MoodStyle } from 'contexts/MoodProvider/types';
import styled, { css } from 'styled-components';

type ButtonStyle = MoodStyle & {
  active: boolean;
};

const forwardBackwardButtonActive = (active: boolean, theme, mood) => {
  if (active) {
    return css`
      color:  ${theme.colors[mood].primary.color};
      box-shadow: inset 3px 3px 15px  ${theme.colors[mood].primary.shadowOne}, inset -3px -3px 15px ${theme.colors[mood].primary.shadowTwo};
      transform: scale(0.98);
      background: linear-gradient(180deg,  ${theme.colors[mood].primary.shadowOne} 0%, ${theme.colors[mood].primary.shadowTwo} 100%);
    `;
  }
};
const playButtonActive = (active: boolean, theme, mood) => {
  if (active) {
    return css`
      /* box-shadow: inset 3px 3px 15px  ${theme.colors[mood].primary.shadowOne}, inset -3px -3px 15px ${theme.colors[mood].primary.shadowTwo}; */
      transform: scale(0.98);
      background: linear-gradient(145deg, #11863B, #1DDF62);
    `;
  }
};

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
    border-radius: 100%;
    cursor: pointer;
    -webkit-appearance: none;
    outline: none;
  }
`;
export const AudioPlayer = styled.audio``;

export const PlayPauseButton = styled.button<ButtonStyle>`${({
  theme,
  mood,
  active,
}) => css`
  background: ${theme.colors[mood].primary.color};
  border: none;
  height: 55px;
  width: 55px;
  font-size: 32px;
  color: ${theme.colors[mood].innerColor};
  background: linear-gradient(145deg, #1DDE61, #11863B);
  box-shadow: 3px 3px 5px ${
    theme.colors[mood].primary.shadowOne
  }, -3px -3px 5px ${
  theme.colors[mood].primary.shadowTwo
}, inset 9.91px 9.91px 15px #139240, inset -9.91px -9.91px 15px #1BD25C;
  ${playButtonActive(active, theme, mood)}
`}`;

export const ForwardBackwardButton = styled.button<ButtonStyle>`${({
  theme,
  mood,
  active,
}) => css`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  font-family: monospace;
  font-size: 26px;
  height: 45px;
  width: 45px;
  color:  ${theme.colors[mood].innerColor};
  border: none;
  box-shadow: 3px 3px 5px ${
    theme.colors[mood].primary.shadowOne
  }, -3px -3px 5px ${theme.colors[mood].primary.shadowTwo};
  background: linear-gradient(160deg, ${
    theme.colors[mood].primary.shadowOne
  } 0%, ${theme.colors[mood].primary.shadowTwo} 100%);

  &:active {
    color:  ${theme.colors[mood].primary.color};
    box-shadow: inset 3px 3px 15px  ${
      theme.colors[mood].primary.shadowOne
    }, inset -3px -3px 15px ${theme.colors[mood].primary.shadowTwo};
    transform: scale(0.98);
    background: linear-gradient(180deg,  ${
      theme.colors[mood].primary.shadowOne
    } 0%, ${theme.colors[mood].primary.shadowTwo} 100%);
  }

  ${forwardBackwardButtonActive(active, theme, mood)}

`}`;
