import type { AppProps } from 'next/app';
import { StoreProvider } from '../hooks/useStore';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
