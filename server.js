// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const cors = require('cors');

// const app = express();
// app.use(cors({ origin: 'http://localhost:3000' }));

// const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST'],
//   },
// });

// io.on('connection', (socket) => {
//   console.log('New client connected');

//   socket.on('buttonPress', (buttonId) => {
//     io.emit('buttonPress', buttonId);
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// server.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();

// Update CORS settings to include Netlify domain
app.use(cors({
  // origin: 'https://deepak--phasertasktwo.netlify.app',
  origin:'*',
}));

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    // origin: 'https://deepak--phasertasktwo.netlify.app',
    origin:'*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('buttonPress', (buttonId) => {
    io.emit('buttonPress', buttonId);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
