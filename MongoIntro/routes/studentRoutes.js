const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Home Page");
});

// students routes
router.get('/students', (req, res) => {
    res.send("All Students");
});

router.get('/students/new', (req, res) => {
    res.send("New Student");
});

router.get('/students/:id', (req, res) => {
    res.send(`Student with id: ${req.params.id}`);
});

router.post('/students', (req, res) => {
    res.send("Create Student");
});

module.exports = router;