import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import Clients from "@/components/Clients";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Home />
    <Clients />
    <Community />
    <Footer />
    <Component {...pageProps} />;
  </>
}
