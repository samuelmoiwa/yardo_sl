import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/NavBar';

function App() {
  return (
      <>
          <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

      </>
  );
}

export default App;
