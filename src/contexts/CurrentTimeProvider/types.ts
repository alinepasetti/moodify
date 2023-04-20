export type CurrentTimeProps = {
  isPlaying: boolean;
  duration: string;
  currentTime: string;
  trackProgress: number;
  audioPlayerRef: React.RefObject<HTMLAudioElement>;
  progressBarRef: React.RefObject<HTMLDivElement>;
  sliderThumbRef: React.RefObject<HTMLSpanElement>;
  togglePlaying: () => void;
};
