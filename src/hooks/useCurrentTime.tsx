import { useState, useCallback, useEffect, useRef } from 'react';

export const useCurrentTime = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime] = useState<number>(0);
  const audioPlayerRef = useRef<HTMLMediaElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  const togglePlaying = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayerRef.current.play();
    } else {
      audioPlayerRef.current.pause();
    }
  };

  const calculateTime = useCallback((secs: number): string => {
    if (isNaN(secs)) return '';
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60).toFixed(0);
    const returnedSeconds = Number(seconds) < 10 ? `0${seconds}` : seconds;
    return `${returnedMinutes}:${returnedSeconds}`;
  }, []);

  useEffect(() => {
    const seconds = Math.floor(audioPlayerRef.current.duration);
    setTimeout(() => {
      setDuration(seconds);
      progressBarRef.current.max = seconds.toString();
    }, 1000);
  }, [
    audioPlayerRef?.current?.onloadedmetadata,
    audioPlayerRef?.current?.readyState,
  ]);

  return {
    isPlaying,
    togglePlaying,
    duration: calculateTime(duration),
    currentTime: calculateTime(currentTime),
    audioPlayerRef,
    progressBarRef,
  };
};
