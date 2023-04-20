import { Paragraph } from '../Text/styles';
import { Mood, MoodStyle } from '../../contexts/MoodProvider/types';
import styled, { css } from 'styled-components';

type CardStyle = MoodStyle & {
  active: boolean;
  cardMood: Mood;
};

export const Container = styled.div<CardStyle>`${({
  theme,
  cardMood,
  mood: currentMood,
  active,
}) => css`
  width: 45%;
  min-height: 157.72px;
  padding: 5%;
  margin: 2.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(145deg, ${
    theme.colors[cardMood].secondary.colorDark
  } 0%, ${theme.colors[cardMood].secondary.colorLight} 100%);
  box-shadow: 7px 7px 15px ${
    theme.colors[currentMood].secondary.shadowDark
  }, -7px -7px 15px ${
  theme.colors[currentMood].secondary.shadowLight
}, inset 6px 6px 15px ${
  theme.colors[cardMood].secondary.shadowDark
}, inset -6px -6px 15px ${theme.colors[cardMood].secondary.shadowLight};
  border-radius: 25px;
  border: solid 3px ${theme.colors[cardMood].background};

  ${
    active &&
    css`
      transform: scale(0.98);
      box-shadow: inset 3.2px 3.2px 15px ${theme.colors[cardMood].secondary.shadowDark}, inset -3.2px -3.2px 15px ${theme.colors[cardMood].secondary.shadowLight};
    `
  }

  ${Paragraph} {
    color: ${theme.colors[cardMood].logo};
    font-weight: 600;
    margin: 0;
    text-align: center;
  }
`}`;

export const Icon = styled.img`
  width: 50%;
`;
