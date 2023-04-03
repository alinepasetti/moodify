export enum Mood {
  ABDUCT_ME,
  RELAX_AND_COME,
  NAMASTE,
  NATURE,
  GIRLS_WANNA_HAVE_FUN,
  VIBRANT_SPIRIT,
}

export type MoodStyle = {
  mood: Mood;
};

export type MoodProps = {
  mood: Mood;
  setMood: (mood: Mood) => void;
};
