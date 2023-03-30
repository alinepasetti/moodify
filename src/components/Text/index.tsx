import * as Styled from './styles';
import { memo } from 'react';

export type TextProps = {
  children: React.ReactNode | string;
};

const Text = (props: TextProps) => {
  return <Styled.Paragraph>{props.children}</Styled.Paragraph>;
};

export default memo(Text);
