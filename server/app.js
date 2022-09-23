require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { version, validate } = require('uuid');

const { PORT, SESSION_SECRET } = process.env;

const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const FileStore = require('session-file-store')(session);

const dbConnectionCheck = require('./db/dbConnectCheck');

dbConnectionCheck();

const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));

// тут импорты всех роутов, если нужно

const userRouter = require('./src/routers/regRouter');
const docRouter = require('./src/routers/regDoc');
const doctorRouter = require('./src/routers/doctorRouter');
const searchRouter = require('./src/routers/searchRouter');
const appointmentRouter = require('./src/routers/appointmentRouter');
const ratingRouter = require('./src/routers/ratingRouter');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './uploads/')));
app.use(express.static(path.resolve(process.env.PWD, '..', 'client', 'build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const ACTIONS = {
  JOIN: 'join',
  LEAVE: 'leave',
  SHARE_ROOMS: 'share_rooms',
  ADD_PEER: 'add_peer',
  REMOVE_PEER: 'remove_peer',
  RELAY_SDP: 'relay_sdp',
  RELAY_ICE: 'relay_ice',
  ICE_CANDIDATE: 'ice_candidate',
  SESSIONS_DESCRIPTION: 'session_description',
};

function getClientRooms() {
  const { rooms } = io.sockets.adapter;

  return Array.from(rooms.keys()).filter((roomID) => validate(roomID) && version(roomID) === 4);
}

function shareRoomsInfo() {
  io.emit(ACTIONS.SHARE_ROOMS, {
    rooms: getClientRooms(),
  });
}

io.on('connection', (socket) => {
  shareRoomsInfo();

  socket.on(ACTIONS.JOIN, (config) => {
    const { room: roomID } = config;
    const { rooms: joinedRooms } = socket;

    if (Array.from(joinedRooms).includes(roomID)) {
      return console.warn(`Already joined to ${roomID}`);
    }

    const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

    clients.forEach((clientID) => {
      io.to(clientID).emit(ACTIONS.ADD_PEER, {
        peerID: socket.id,
        createOffer: false,
      });

      socket.emit(ACTIONS.ADD_PEER, {
        peerID: clientID,
        createOffer: true,
      });
    });

    socket.join(roomID);
    shareRoomsInfo();
  });

  function leaveRoom() {
    const { rooms } = socket;

    Array.from(rooms)
      // LEAVE ONLY CLIENT CREATED ROOM
      .filter((roomID) => validate(roomID) && version(roomID) === 4)
      .forEach((roomID) => {
        const clients = Array.from(io.sockets.adapter.rooms.get(roomID) || []);

        clients
          .forEach((clientID) => {
            io.to(clientID).emit(ACTIONS.REMOVE_PEER, {
              peerID: socket.id,
            });

            socket.emit(ACTIONS.REMOVE_PEER, {
              peerID: clientID,
            });
          });

        socket.leave(roomID);
      });

    shareRoomsInfo();
  }

  socket.on(ACTIONS.LEAVE, leaveRoom);
  socket.on('disconnecting', leaveRoom);

  socket.on(ACTIONS.RELAY_SDP, ({ peerID, sessionDescription }) => {
    io.to(peerID).emit(ACTIONS.SESSION_DESCRIPTION, {
      peerID: socket.id,
      sessionDescription,
    });
  });

  socket.on(ACTIONS.RELAY_ICE, ({ peerID, iceCandidate }) => {
    io.to(peerID).emit(ACTIONS.ICE_CANDIDATE, {
      peerID: socket.id,
      iceCandidate,
    });
  });
});
// КОНФИГ ДЛЯ КУКИ
// const sessionConfig = {
//   name: 'DoctorCookie', // * Название куки
//   store: new FileStore(), // * подключение стора (БД для куки) для хранения
//   secret: SESSION_SECRET ?? 'gkp5o34kg5j094gk940', // * ключ для шифрования куки
//   resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
//   saveUninitialized: false, // * Если false, куки появляются только при установке req.session
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
//     httpOnly: true, // * куки только по http
//   },
// };
// подключение мидлвара для куки
// app.use(session(sessionConfig));

// ссылки на роуты

app.use('/api', userRouter);
app.use('/api/doc', docRouter);
app.use('/', doctorRouter);
app.use('/', searchRouter);
app.use('/', appointmentRouter);
app.use('/api/rating', ratingRouter);

server.listen(PORT ?? 4000, () => {
  console.log('Сервер запущен!');
});
// const wsServer = new io.webSocketServer({ server: htttpServer });
