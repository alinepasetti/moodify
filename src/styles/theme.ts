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
        darkest: '#000000',
        lightest: '#646464',
      },
      innerColor: '#FFFFFF',
    },
    [Mood.MIND_THE_GAP]: {
      logo: '#B87EFB',
      background: '#E4EBF5',
      text: '#3fa256',
      primary: {
        colorLight: '#D491FF',
        colorDark: '#9C6BD5',
        shadowLight: '#C989FF',
        shadowDark: '#A773E4',
      },
      secondary: {
        colorLight: '#FFFFFF',
        colorDark: '#C2C8D0',
        shadowLight: '#F9FFFF',
        shadowDark: '#CFD6DF',
        darkest: '#adadad',
        lightest: '#FFFFFF',
      },
      innerColor: '#410A3B',
    },
    [Mood.RELAX_AND_COME]: {
      logo: '#410A3B',
      background: '#E34747',
      text: '#FFFFFF',
      primary: {
        colorLight: '#4B0C44',
        colorDark: '#370932',
        shadowLight: '#4f0c48',
        shadowDark: '#31072d',
      },
      secondary: {
        colorLight: '#C13C3C',
        colorDark: '#FF5252',
        shadowLight: '#f75959',
        shadowDark: '#c03030',
        darkest: '#adadad',
        lightest: '#FFFFFF',
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
