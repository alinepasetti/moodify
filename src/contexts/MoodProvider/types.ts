export enum Mood {
  ABDUCT_ME,
  RELAX_AND_COME,
  MIND_THE_GAP,
  PACHA_MAMA,
  GIRLS_WANNA_HAVE_FUN,
  VIBRANT_SPIRIT,
}

export type MoodDetail = {
  title: string;
  icon: string;
  type: Mood;
  trackId: string;
};

export const moods: MoodDetail[] = [
  {
    type: Mood.ABDUCT_ME,
    title: 'abduct me',
    icon: 'abduct-me.png',
    trackId: '6tDDoYIxWvMLTdKpjFkc1B',
  },
  {
    type: Mood.RELAX_AND_COME,
    title: 'relax and come',
    icon: 'relax-and-come.png',
    trackId: '6tDDoYIxWvMLTdKpjFkc1B',
  },
  {
    type: Mood.MIND_THE_GAP,
    title: 'mind the gap',
    icon: 'mind-the-gap.png',
    trackId: '6tDDoYIxWvMLTdKpjFkc1B',
  },
  {
    type: Mood.PACHA_MAMA,
    title: 'pacha mama',
    icon: 'pacha-mama.png',
    trackId: '6tDDoYIxWvMLTdKpjFkc1B',
  },
  // {
  //   type: Mood.GIRLS_WANNA_HAVE_FUN,
  //   title: 'gurls wanna have fun',
  //   icon: 'gurls-wanna-have-fun.png',
  // },
  // { type: Mood.VIBRANT_SPIRIT, title: 'vibrant spirit', icon: '' },
];

export type MoodStyle = {
  mood: Mood;
};

export type MoodProps = {
  mood: Mood;
  setMood: (mood: Mood) => void;
};
