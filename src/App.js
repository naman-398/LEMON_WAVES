
import { useEffect } from 'react';
import './App.css';
import Backtotop from './Components/Backtotop';
import Footer from './Components/Footer';
import Herosection from './Components/Herosection';
import Loadersection from './Components/Loadersection';
import REalstorysection from './Components/REalstorysection';
import Readysection from './Components/Readysection';
import Truesection from './Components/Truesection';
import Wearesection from './Components/Wearesection';
import Weservesection from './Components/Weservesection';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    }
    );
  }, [])
  return (
    <div >
      <Backtotop/>
      <Loadersection/>
   <Herosection/>
   <Truesection/>
   <Readysection/>
   <REalstorysection/>
   <Weservesection/>
   <Wearesection/>
   <Footer/>
    </div>
  );
}

export default App;
