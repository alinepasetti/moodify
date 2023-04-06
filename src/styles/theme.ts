import { Mood } from '../contexts/MoodProvider/types';

export const theme = {
  colors: {
    [Mood.ABDUCT_ME]: {
      logo: '#17b24e',
      background: '#212121',
      text: '#FFFFFF',
      primary: {
        colorLight: '#1BD35D',
        colorDark: '#13913F',
        shadowLight: '#1BD25C',
        shadowDark: '#139240',
      },
      secondary: {
        colorLight: '#2b2b2b',
        colorDark: '#1b1a1a',
        shadowLight: '#2b2b2b',
        shadowDark: '#1b1a1a',
      },
      innerColor: '#FFFFFF',
    },
    white: '#FFFFFF',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
