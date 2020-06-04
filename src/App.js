import React from 'react';
import Siteholder from '../src/components/siteholder'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <>
      <Siteholder />
    </>
  );
}

export default App;
