import { Title } from 'components/Heading/styles';
import { Paragraph } from 'components/Text/styles';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Paragraph}, ${Title} {
    margin: 0;
  }
`;
