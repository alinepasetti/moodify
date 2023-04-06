import { Paragraph } from 'components/Text/styles';
import styled, { css } from 'styled-components';

export const Container = styled.div`${({ theme }) => css`
  width: 45%;
  min-height: 157.72px;
  padding: 5%;
  margin: 2.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${theme.colors.white};

  ${Paragraph} {
    color: ${theme.colors.white};
    margin: 0;
    text-align: center;
  }
`}`;

export const Icon = styled.img`
  width: 50%;
`;
