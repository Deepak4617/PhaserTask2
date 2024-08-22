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

import 'react-toastify/dist/ReactToastify.css';

const socket = io('http://localhost:4000');

const AdminPage = () => {
  const [direction, setDirection] = useState(null);
  const [pressedButtons, setPressedButtons] = useState([]);

  useEffect(() => {
    socket.emit('authenticate', 'admin');

    socket.on('buttonPress', (buttonId) => {
      setPressedButtons((prev) => [...new Set([...prev, buttonId])]);
      toast(`Button ${buttonId.replace('Button', '')} clicked`);
    });

    return () => {
      socket.off('buttonPress');
    };
  }, []);

  const handleButtonClick = (buttonId) => {
    setDirection(buttonId);
    socket.emit('buttonPress', buttonId);
  };

  return (
    <>
    <div className="app">
      <div className="button-container">
        <button className="button top-left" onClick={() => handleButtonClick('Button1')}>Button 1</button>
        <button className="button top-center" onClick={() => handleButtonClick('Button2')}>Button 2</button>
        <button className="button top-right" onClick={() => handleButtonClick('Button5')}>Button 5</button>
        <button className="button middle-left" onClick={() => handleButtonClick('Button3')}>Button 3</button>
        <button className="button middle-right" onClick={() => handleButtonClick('Button4')}>Button 4</button>
        <button className="button bottom-left" onClick={() => handleButtonClick('Button6')}>Button 6</button>
        <button className="button bottom-center" onClick={() => handleButtonClick('Button7')}>Button 7</button>
        <button className="button bottom-right" onClick={() => handleButtonClick('Button8')}>Button 8</button>
      </div>
      <div className="phaser-container">
        <PhaserGame direction={direction} />
      </div>
      <ToastContainer />
    </div>
    </>
  );
};

export default AdminPage;
