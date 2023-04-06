import { MoodStyle } from '../../contexts/MoodProvider/types';
import styled, { css } from 'styled-components';

type ButtonStyle = MoodStyle & {
  active: boolean;
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4.5rem;

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
  border: none;
  height: 55px;
  width: 55px;
  font-size: 32px;
  color: ${theme.colors[mood].innerColor};
  border: solid 3px ${theme.colors[mood].logo};
  box-shadow: 5px 5px 9.6px ${
    theme.colors[mood].secondary.shadowDark
  }, -5px -5px 9.6px ${
  theme.colors[mood].secondary.shadowLight
}, inset 6px 6px 15px ${
  theme.colors[mood].primary.shadowDark
}, inset -6px -6px 15px ${theme.colors[mood].primary.shadowLight};

  background: linear-gradient(180deg, ${
    theme.colors[mood].primary.colorDark
  } 0%, ${theme.colors[mood].primary.colorLight} 100%);

  transition: transform 200ms ease;

  &:active {
    transform: scale(0.98);
    box-shadow: inset 3.2px 3.2px 15px ${
      theme.colors[mood].primary.shadowDark
    }, inset -3.2px -3.2px 15px ${theme.colors[mood].primary.shadowLight};
  }

  ${
    active &&
    css`
      transform: scale(0.98);
      box-shadow: inset 3.2px 3.2px 15px ${theme.colors[mood].primary.shadowDark}, inset -3.2px -3.2px 15px ${theme.colors[mood].primary.shadowLight};
    `
  }
`}`;

export const ForwardBackwardButton = styled.button<ButtonStyle>`${({
  theme,
  mood,
  active,
}) => css`
  border: none;
  width: 45px;
  height: 45px;
  font-size: 26px;
  display: flex;
  align-items: center;
  color: ${theme.colors[mood].innerColor};
  border: solid 1.5px ${theme.colors[mood].secondary.colorDark};

  box-shadow: 3px 3px 9.6px ${
    theme.colors[mood].secondary.shadowDark
  }, -3px -3px 9.6px ${theme.colors[mood].secondary.shadowLight};

  background: linear-gradient(180deg,${theme.colors[mood].secondary.colorDark}
   0%, ${theme.colors[mood].secondary.colorLight} 100%);

  transition: color 200ms ease, transform 200ms ease;

  &:active {
    color:  ${theme.colors[mood].logo};
    transform: scale(0.98);
    box-shadow: inset 3.2px 3.2px 15px ${
      theme.colors[mood].secondary.shadowDark
    }, inset -3.2px -3.2px 15px ${theme.colors[mood].secondary.shadowLight};
  }

  ${
    active &&
    css`
      color: ${theme.colors[mood].logo};
      transform: scale(0.98);
      box-shadow: inset 3.2px 3.2px 15px ${theme.colors[mood].secondary.shadowDark}, inset -3.2px -3.2px 15px ${theme.colors[mood].secondary.shadowLight};
    `
  }
`}`;
