const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'mysql-container', // Имя контейнера или 127.0.0.1
    user: 'root', // Имя пользователя
    password: '12345', // Пароль
    database: 'mydatabase',// Имя базы данных
    port: 33060 // порт // порт
});

// Пример запроса к базе данных
pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
        return console.error('Ошибка при выполнении запроса:', error);
    }
    console.log('Результаты:', results);
});

// Закрытие пула соединений
pool.end((err) => {
    if (err) {
        return console.error('Ошибка при закрытии пула соединений:', err);
    }
    console.log('Пул соединений закрыт.');
});

module.exports = pool;
