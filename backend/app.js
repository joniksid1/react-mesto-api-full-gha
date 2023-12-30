const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { errors } = require('celebrate');
const cors = require('cors');
const { router } = require('./routes/root');
const { NotFoundError } = require('./utils/errors/not-found-error');
const error = require('./middlewares/error');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = '3000', MONGO_URL = 'mongodb://localhost:27017/mestodb' } = process.env;

const app = express();

app.use(cors({
  origin: ['http://localhost:3001', 'https://mixer0000.nomoredomainsmonster.ru'],
  credentials: true,
  maxAge: 60,
}));

app.use(express.json());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/', router);

app.use('*', () => {
  throw new NotFoundError({ message: 'Страница не найдена' });
});

app.use(errorLogger);

// Обработчик ошибок celebrate

app.use(errors());

// Централизованный middleware-обработчик

app.use(error);

mongoose.connect(MONGO_URL);

mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port ${PORT}`);
  });
});
