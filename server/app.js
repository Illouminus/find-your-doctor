require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
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
// const regRouter = require('./routes/regRouter');
const searchRouter = require('./src/routers/searchRouter')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// КОНФИГ ДЛЯ КУКИ
const sessionConfig = {
  name: 'DoctorCookie', // * Название куки
  store: new FileStore(), // * подключение стора (БД для куки) для хранения
  secret: SESSION_SECRET ?? 'gkp5o34kg5j094gk940', // * ключ для шифрования куки
  resave: false, // * если true, пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // * Если false, куки появляются только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10, // * время жизни в ms (10 дней)
    httpOnly: true, // * куки только по http
  },
};
// подключение мидлвара для куки
app.use(session(sessionConfig));

// ссылки на роуты
// app.use('/register', regRouter);
app.use('/', searchRouter)

app.listen(PORT ?? 3100, () => {
  console.log('Сервер запущен!');
});
