import { createContext } from 'react';
import { CurrentTimeProps } from './types';

export const CurrentTimeContext = createContext<CurrentTimeProps>(null);
