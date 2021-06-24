import '../styles/business.min.css';
import '../styles/sfx.min.css';
import '../styles/fuds.css';

// state
import VatProvider from '../state/vat';

function MyApp({ Component, pageProps }) {
  return (
    <VatProvider>
      <Component {...pageProps} />
    </VatProvider>
  );
}

export default MyApp;
