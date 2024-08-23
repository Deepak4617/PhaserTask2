import React, {
  useState,
  useEffect
} from 'react';
import {
  ToastContainer,
  toast
} from 'react-toastify';

import PhaserGame from '../components/phaserGame';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';  // Import Link component

import 'react-toastify/dist/ReactToastify.css';

const socket = io('http://localhost:4000');

const GuestPage = () => {
  const [pressedButtons, setPressedButtons] = useState([]);

  useEffect(() => {
    socket.emit('authenticate', 'guest');

    socket.on('buttonPress', (buttonId) => {
      setPressedButtons((prev) => [...new Set([...prev, buttonId])]);
      toast(`Button ${buttonId.replace('Button', '')} was pressed!`);
    });

    return () => {
      socket.off('buttonPress');
    };
  }, []);

  const showToast = () => {
    toast('not authorized')
  }

  return (
    <>
     {/* <div 
      style={{display:'flex', marginBottom:'4rem'}}
      >
      
      </div> */}
    <div className="app">
    <Link to="/admin" className="admin-link">
        Go to Admin Page
      </Link>
      <div className="button-container">
        <button className="button top-left" onClick={() => showToast()}>Button 1</button>
        <button className="button top-center" onClick={() => showToast()}>Button 2</button>
        <button className="button top-right" onClick={() => showToast()}>Button 5</button>
        <button className="button middle-left" onClick={() => showToast()}>Button 3</button>
        <button className="button middle-right" onClick={() => showToast()}>Button 4</button>
        <button className="button bottom-left" onClick={() => showToast()}>Button 6</button>
        <button className="button bottom-center" onClick={() => showToast()}>Button 7</button>
        <button className="button bottom-right" onClick={() => showToast()}>Button 8</button>
      </div>
      <div className="phaser-container">
        <PhaserGame direction={null} />
      </div>
      <ToastContainer />
    </div>
    </>
  );
};

export default GuestPage;
