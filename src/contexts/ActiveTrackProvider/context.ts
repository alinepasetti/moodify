import { createContext } from 'react';
import { ActiveTrackProps } from './types';

export const ActiveTrackContext = createContext<ActiveTrackProps>(null);
