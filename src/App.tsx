// main sections
import Navbar from '../src/components/Navbar';
import Banner from '../src/components/Banner';
import PersonalBio from '../src/components/PersonalBio';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

import './App.css'

function App() {
  return (

    <div className="App">
      <Navbar />
      <Banner />
      <PersonalBio />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
