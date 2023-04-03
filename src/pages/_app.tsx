import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { MoodProvider } from '../contexts/MoodProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MoodProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </MoodProvider>
    </ThemeProvider>
  );
}

export default MyApp;
