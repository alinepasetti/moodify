import { Paragraph } from 'components/Text/styles';
import { MoodStyle } from 'contexts/MoodProvider/types';
import styled from 'styled-components';

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
    font-size: 16px;
    margin: 0px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Input = styled.input`
  width: 100%;
`;
