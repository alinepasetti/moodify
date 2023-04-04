import { Mood } from 'contexts/MoodProvider/types';

export const theme = {
  colors: {
    [Mood.ABDUCT_ME]: {
      primaryColor: '#17b24e',
      secondaryColor: '#212121',
      shadowOne: '#1b1a1a',
      shadowTwo: '#2b2b2b',
      innerColor: '#FFFFFF',
      gray: '#D3D3D3',
    },
    white: '#FFFFFF',
    black: '#000000',
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
