//preliminary imports
import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';

//importing pages
import Home from './pages/home';
import Arrabiata from './pages/arrabiata';
import Ribollita from './pages/ribollita';
import Kapsalon from './pages/kapsalon';
import Hotpot from './pages/hotpot';
import Tofu from './pages/tofu';

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/arrabiata' element={<Arrabiata/>} />
          <Route path='/ribollita' element={<Ribollita/>} />
          <Route path='/kapsalon' element={<Kapsalon/>} />
          <Route path='/hotpot' element={<Hotpot/>} />
          <Route path='/tofu' element={<Tofu/>} />
      </Routes>
      </Router>
  );
}
    
export default App;