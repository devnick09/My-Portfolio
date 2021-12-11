import "../styles/globals.css";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <LeftNav />
      <RightNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
