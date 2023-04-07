import { Paragraph } from 'components/Text/styles';
import { Mood, MoodStyle } from 'contexts/MoodProvider/types';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ cardMood: Mood } & MoodStyle>`${({
  theme,
  cardMood,
  mood: currentMood,
}) => css`
  width: 45%;
  min-height: 157.72px;
  padding: 5%;
  margin: 2.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(145deg, ${theme.colors[cardMood].primary.colorDark} 0%, ${theme.colors[cardMood].primary.colorLight} 100%);
  box-shadow: 7px 7px 15px ${theme.colors[currentMood].secondary.shadowDark}, -7px -7px 15px ${theme.colors[currentMood].secondary.shadowLight}, inset 6px 6px 15px ${theme.colors[cardMood].primary.shadowDark}, inset -6px -6px 15px ${theme.colors[cardMood].primary.shadowLight};

  border-radius: 25px;

  ${Paragraph} {
    color: ${theme.colors[cardMood].text};
    margin: 0;
    text-align: center;
  }
`}`;

export const Icon = styled.img`
  width: 50%;
`;
