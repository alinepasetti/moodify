import { Image } from 'components/AlbumImage/styles';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &> div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${Image} {
    width: 90%;
  }
`;
