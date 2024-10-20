const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routers/users'); // Путь к вашему файлу маршрутов

const app = express();
const port = 5000;

// Middleware для парсинга тела запроса
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Используйте маршруты
app.use('/users', usersRouter);

// Запустите сервер
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
