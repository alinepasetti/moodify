import { useState, useCallback, useEffect, useRef } from 'react';

export const useCurrentTime = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(NaN);
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const audioPlayerRef = useRef<HTMLMediaElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const sliderThumbRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef(null);

  const togglePlaying = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    const seconds = Math.floor(audioPlayerRef.current.duration);
    setDuration(seconds);

    if (!prevValue) {
      audioPlayerRef.current.play();
      startAnimation();
    } else {
      audioPlayerRef.current.pause();
      stopAnimation();
    }
  };

  const startAnimation = useCallback(() => {
    // Animation using requestAnimationFrame

    const playAnimation = () => {
      const range =
        (audioPlayerRef.current.currentTime / audioPlayerRef.current.duration) *
        100;
      setCurrentTime(audioPlayerRef.current.currentTime);
      setTrackProgress(range);

      animationRef.current = requestAnimationFrame(playAnimation);
    };
    requestAnimationFrame(playAnimation);
  }, []);

  const stopAnimation = useCallback(
    () => cancelAnimationFrame(animationRef.current),
    [],
  );

  const calculateTime = useCallback((secs: number): string => {
    if (isNaN(secs)) return '';
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const seconds = Math.floor(secs % 60).toFixed(0);
    const returnedSeconds = Number(seconds) < 10 ? `0${seconds}` : seconds;
    return `${returnedMinutes}:${returnedSeconds}`;
  }, []);

  useEffect(() => {
    console.log(audioPlayerRef.current.duration);
    const durationInterval = setInterval(() => {
      if (!isNaN(audioPlayerRef.current.duration)) {
        setDuration(audioPlayerRef.current.duration);
        clearInterval(durationInterval);
      }
    }, 1000);
  }, [
    audioPlayerRef?.current?.onloadedmetadata,
    audioPlayerRef?.current?.readyState,
  ]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return {
    isPlaying,
    togglePlaying,
    duration: calculateTime(duration),
    currentTime: calculateTime(currentTime),
    audioPlayerRef,
    progressBarRef,
    sliderThumbRef,
    trackProgress,
  };
};
