const express = require('express');
const genere=require("./genere.js");

const router = express.Router();

/* GET home page. */
router.use("/genere",genere);
module.exports = router;
