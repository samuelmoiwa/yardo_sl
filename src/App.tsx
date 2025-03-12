import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/about';

function App() {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-white dark:bg-slate-900'>
      <div className='w-full max-w-[110rem] flex flex-col justify-center items-center'>
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
