import { Image } from '../AlbumImage/styles';
import { MoodStyle } from '../../contexts/MoodProvider/types';
import styled, { css } from 'styled-components';
import { Paragraph } from '../Text/styles';

export const Container = styled.div<MoodStyle>`${({ theme, mood }) => css`
  height: 100vh;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors[mood].text};

  &> div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & > div > ${Paragraph} {
    font-size: 1.2rem;
  }

  ${Image} {
    margin-top: 7%;
    width: 75%;
    border: solid 10px ${theme.colors[mood].secondary.colorLight};
    border-radius: 25px;
    box-shadow: 7px 7px 15px ${theme.colors[mood].secondary.shadowDark}, -7px -7px 15px ${theme.colors[mood].secondary.shadowLight};


    @media screen and (min-width: 400px) {
    max-height: 44vh;
    max-width: 44vh;
    margin-top: 0;
    }
  }
`}`;
