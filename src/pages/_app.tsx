import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';
import { MoodProvider } from '../contexts/MoodProvider';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>moodify</title>
      </Head>
      <ThemeProvider theme={theme}>
        <MoodProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </MoodProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
