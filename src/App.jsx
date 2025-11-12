import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSlider />
      <About />
      <Services />
      <Contact />
      <Footer />
      <SocialBar /> 
    </div>
  );
}
