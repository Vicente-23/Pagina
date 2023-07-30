import React from 'react'
import './App.css'

import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Consulta from './components/pages/Consulta';
import Radiofrecuencia from './components/pages/Radiofrecuencia';
import Cirugia from './components/pages/Cirugia-endoscópica-para-sinusitis';
import Cirugia2 from './components/pages/Cirugia-de-Tabique';
import Endoscopia from './components/pages/Endoscopia-Nasal';
import Otorrinologia from './components/pages/Otorrinolaringología-Pediátrica';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
import Mensaje from './components/pages/mensaje';



function App() {
  return (<>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Consulta' element={<Consulta />} />
        <Route path='/Radiofrecuencia' element={<Radiofrecuencia />} />
        <Route path='/Cirugia-endoscópica-para-sinusitis' element={< Cirugia />} />
        <Route path='/Cirugia-de-Tabique' element={< Cirugia2 />} />
        <Route path='/Endoscopia-Nasal' element={< Endoscopia />} />
        <Route path='/Otorrinolaringología-Pediátrica' element={<Otorrinologia />} />
      </Routes>
    </Router>
    <Mensaje/>
    <Footer />
  </>)
} export default App;
