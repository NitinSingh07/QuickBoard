import "./App.css";
import Abouts from "./components/about/About";
import TrainBookingPage from "./components/booking/TrainBookingPage";
import TrainCancelPage from "./components/cancel/TrainCancelPage";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Tagline from "./components/tagline/Tagline";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Hero />
              <Tagline />
              <Features />
              <Services />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route exact path="" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<Abouts />} />
        <Route exact path="/trainbooking" element={<TrainBookingPage />} />
        <Route exact path="/traincancel" element={<TrainCancelPage />} />
      </Routes>
    </>
  );
}

export default App;
