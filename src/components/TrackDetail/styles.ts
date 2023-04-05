import { Image } from '../AlbumImage/styles';
import { MoodStyle } from '../../contexts/MoodProvider/types';
import styled from 'styled-components';

export const Container = styled.div<MoodStyle>`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};

  &> div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${Image} {
    width: 90%;
    max-height: 40vh;
  }
`;
