import { createContext } from 'react';
import { MoodProps } from './types';

export const MoodContext = createContext<MoodProps>(null);
