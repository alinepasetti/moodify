export type CurrentTimeProps = {
  isPlaying: boolean;
  duration: string;
  currentTime: string;
  audioPlayerRef: React.RefObject<HTMLAudioElement>;
  progressBarRef: React.RefObject<HTMLInputElement>;
  togglePlaying: () => void;
};
