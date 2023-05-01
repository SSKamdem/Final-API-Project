import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages/home';
import Recipes from './pages/recipes';
import About from './pages/about';

function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/recipes' element={<Recipes/>} />
      </Routes>
      </Router>
  );
}
    
export default App;