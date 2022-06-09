import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import theme from '../UI/Themes/Theme';
import Header from '../UI/components/header/Header';
import HeaderAdmin from '../UI/components/HeaderAdmin/HeaderAdmin';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      {router.pathname === '/' ? <Header /> : <HeaderAdmin />};
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
