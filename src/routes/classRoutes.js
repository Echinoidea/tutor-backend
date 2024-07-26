const express = require('express');
const { getAllClasses } = require("../controllers/classController");

const router = express.Router();

router.get('/class', getAllClasses);

module.exports = router;