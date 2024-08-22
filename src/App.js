import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './router/appRoutes';

function App() {
  
  return (
    <>
    <Router>
      <AppRoute />
    </Router>
    </>
  );
}

export default App;
