import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import AppRouter from './Components/AppRouter'
import Navbar from './Components/Navbar'


function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
