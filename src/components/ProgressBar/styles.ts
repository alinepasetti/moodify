import { Paragraph } from '../Text/styles';
import { MoodStyle } from '../../contexts/MoodProvider/types';
import styled, { css } from 'styled-components';

export const Container = styled.div`
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
    font-size: 16px;
    margin: 0px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Input = styled.input<MoodStyle>`${({ theme, mood }) => css`
  width: 100%;

  appearance: none;
  background: linear-gradient(180deg,  ${theme.colors[mood].primary.shadowOne} 0%, ${theme.colors[mood].primary.shadowTwo} 100%);
  box-shadow: inset 3px 3px 15px  ${theme.colors[mood].primary.shadowOne}, inset -3px -3px 15px ${theme.colors[mood].primary.shadowTwo};
  border-radius: 10px;
  height: 11px;
  outline: none;

    &::before {
    content: "";
    height: 11px;
    width: ${theme.colors[mood].primary.colorOne};
    background-color: ${theme.colors[mood].primary.colorOne};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: none;
    background-color: ${theme.colors[mood].primary.colorOne};
    cursor: pointer;
    position: relative;
    margin: -2px 0 0 0;
    z-index: 3;
    box-sizing: border-box;
  }
  &:active::-webkit-slider-thumb {
    transform: scale(1.2);
    background: ${theme.colors.white};
  }
`}`;
