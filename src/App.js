
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Slider from './components/Slider';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Slider />
    <Services />
    <AboutUs />
    <ContactUs />
    </>
  );
}

export default App;
