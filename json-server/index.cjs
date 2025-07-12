const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const timeout = 1000;

// Добавляем CORS middleware
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

// Добавляем парсинг JSON
server.use(jsonServer.bodyParser);

// Добавляем искусственную задержку
server.use(async (req, res, next) => {
  await new Promise(res => {
    setTimeout(res, timeout);
  });
  next();
});

// Используем стартные middleware
server.use(middlewares);

// Добавляем роутер
server.use(router);

// Запускаем сервер
server.listen(8000, () => {
  console.log('JSON Server is running on port 8000');
});
