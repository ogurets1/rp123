const express = require('express');
const router = express.Router();
const pool = require('../data/config');

// Получение всех пользователей
router.get('/', (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) return res.status(500).send(error);
        res.send(results);
    });
});

// Получение пользователя по ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
        if (error) return res.status(500).send(error);
        res.send(results);
    });
});

// Добавление нового пользователя
router.post('/', (req, res) => {
    pool.query('INSERT INTO users SET ?', req.body, (error, result) => {
        if (error) return res.status(500).send(error);
        res.status(201).send(`Пользователь добавлен с идентификатором: ${result.insertId}`);
    });
});

// Обновление пользователя по ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    pool.query('UPDATE users SET ? WHERE id = ?', [req.body, id], (error, result) => {
        if (error) return res.status(500).send(error);
        res.send('Пользователь успешно обновлен.');
    });
});

// Удаление пользователя по ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM users WHERE id = ?', [id], (error, result) => {
        if (error) return res.status(500).send(error);
        res.send('Пользователь удалён.');
    });
});

module.exports = router;
