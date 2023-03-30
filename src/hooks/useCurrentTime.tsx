import { useState, useCallback } from 'react';

export const useCurrentTime = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // const [duration, setDuration] = useState<number>(0);
  // const [currentTime, setCurrentTime] = useState<number>(0);
  const togglePlaying = useCallback(
    () => setIsPlaying((prevStatus) => !prevStatus),
    [],
  );
  return { isPlaying, togglePlaying };
};
