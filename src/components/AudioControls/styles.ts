import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3.5rem;

  &> button {
    margin: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
    border-radius: 150px;
    cursor: pointer;
  }
`;
export const AudioPlayer = styled.audio``;

export const PlayPauseButton = styled.button`${({ theme }) => css`
  background: ${theme.colors.primaryColor};
  border: none;
  height: 55px;
  width: 55px;
  font-size: 32px;
  color: ${theme.colors.secondaryColor};
  background: #17b24e;
`}`;

export const ForwardBackwardButton = styled.button`${({ theme }) => css`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  font-family: monospace;
  font-size: 26px;
  height: 45px;
  width: 45px;
  background: #202227;

  &:hover {
    color:  ${theme.colors.primaryColor};
  }
`}`;
