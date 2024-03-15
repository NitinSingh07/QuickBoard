import "./App.css";
import Features from "./components/features/Features";
import FooterWithSocialLinks from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Tagline from "./components/tagline/Tagline";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tagline />
      <Features />
      <Services />
      <FooterWithSocialLinks />
    </>
  );
}

export default App;
w;
