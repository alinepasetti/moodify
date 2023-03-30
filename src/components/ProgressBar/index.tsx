import Text from '../Text';
import * as Styled from './styles';
import { memo } from 'react';

const ProgressBar = () => {
  return (
    <Styled.Container>
      <Styled.Input
        type="range"
        className="progressBar"
        defaultValue="0"
      ></Styled.Input>
      <div>
        <Text>current time</Text>
        <Text>duration</Text>
      </div>
    </Styled.Container>
  );
};

export default memo(ProgressBar);
