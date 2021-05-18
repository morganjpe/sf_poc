// import '../styles/globals.css'
import "../styles/business.min.css";
import "../styles/sfx.min.css";
import "../styles/fuds.css";

import Header from "../components/layout/header";
import Nav from "../components/layout/nav";
import Fuds from "../components/layout/fuds";
import Footer from "../components/layout/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Nav />
      <Fuds />
      <main id="container-main" className="wrp">
        <Component {...pageProps} />;
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
