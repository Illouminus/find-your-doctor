require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const dbConnectionCheck = require('./db/dbConnectCheck');

const { PORT, SESSION_SECRET } = process.env;

const app = express();
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
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

app.listen(PORT ?? 4000, () => {
  console.log('Сервер запущен!');
});
