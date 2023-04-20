import { Paragraph } from '../Text/styles';
import { MoodStyle } from '../../contexts/MoodProvider/types';
import styled, { css } from 'styled-components';

type TrackProgress = { trackProgress: number };

export const Container = styled.div<MoodStyle>`
  width: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &> div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  ${Paragraph} {
    font-size: 1.2rem;
    margin: 0px;
    color: ${({ theme, mood }) => theme.colors[mood].text};
  }
`;

export const Input = styled.div<MoodStyle>`${({ theme, mood }) => css`
  width: 100%;
  height: 0.9rem;
  margin-bottom: 1.2rem;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  border-radius: 10px;
  box-shadow: inset 3px 3px 15px  ${theme.colors[mood].secondary.darkest}, inset -3px -3px 15px ${theme.colors[mood].secondary.lightest};
  background: linear-gradient(180deg, ${theme.colors[mood].secondary.darkest} 0%, ${theme.colors[mood].secondary.darkest} 50%, ${theme.colors[mood].secondary.lightest} 100%);
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`}`;

export const SliderThumb = styled.span<TrackProgress & MoodStyle>`${({
  theme,
  mood,
  trackProgress,
}) => css`
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background-color: ${theme.colors[mood].secondary.colorLight};
  border: none;
  position: absolute;
  cursor: pointer;
  left: 0;
  left: ${trackProgress}%;
  margin: -2px 0 0 -2px;
  z-index: 3;
  border: solid 0.3px ${theme.colors[mood].secondary.colorDark};
  box-shadow: 3px 3px 7px ${theme.colors[mood].secondary.shadowDark}, -3px -3px 7px ${theme.colors[mood].secondary.shadowLight};

  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(180deg, ${theme.colors[mood].primary.colorDark} 0%, ${theme.colors[mood].primary.colorLight} 100%);
  }

  &:active {
    transform: scale(1.2);
    background: ${theme.colors[mood].logo};
  }
`}`;

export const Fill = styled.span<TrackProgress & MoodStyle>`${({
  theme,
  mood,
  trackProgress,
}) => css`
  height: 70%;
  width: ${trackProgress}%;
  position: absolute;
  left: 0;
  z-index: 2;
  border-radius: inherit;
  background: ${theme.colors[mood].logo};
`}`;
