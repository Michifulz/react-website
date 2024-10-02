import './App.css';
import React from 'react'; //had to import react
import ReactDOM from 'react-dom'; //had to also import reactDOM
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import ItemOne from './components/pages/ItemOne';
import ItemTwo from './components/pages/ItemTwo';
import ItemThree from './components/pages/ItemThree';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes >
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Shop' element={<Shop/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/ItemOne' element={<ItemOne/>} />
      <Route path='/ItemTwo' element={<ItemTwo/>} />
      <Route path='/ItemThree' element={<ItemThree/>} />

      </Routes >
    </Router>
    </>
  );
}

export default App;
