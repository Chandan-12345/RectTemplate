import Header from './components/head/Header';
import HeroSection from './components/Hero/HeroSection';
import BuildSection from './components/Build/BuildSection';
import Insights from './components/Insight/Insights';
import Testimonial from './components/Testimonial/Testimonials';
import Footer from './components/Footer/Footer';
import IconSection from './components/iconSection/IconSection';


import './App.css';

function App() {
  return (
    <div className="App">
   <Header />
  <HeroSection />
  <BuildSection />
  <Insights />
  <Testimonial />
  <Footer />
  <IconSection />
    </div>
  );
}

export default App;
