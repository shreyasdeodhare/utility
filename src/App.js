

import './App.css';
import Education from './components/Education';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Projects/>
      <Education/>
      <Technologies/>

      <Footer/>
    </div>
  );
}

export default App;
