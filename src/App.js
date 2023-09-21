import './Components/NavBar/Navbar';
import './App.css';

import Navbar from './Components/NavBar/Navbar';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';



function App() {
 
  return (
    
      <div className="App">
     <Navbar/>
      <AboutMe/>
      <br/>
      <Skills/>
      
      <Footer/>
      
      
    </div>
    
    
  );
}

export default App;
