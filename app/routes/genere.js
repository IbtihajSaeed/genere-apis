var express = require('express');
const genere =require("../controllers/genere.controller");
const postValidator=require("../middlewares/validation.js");
const router = express.Router();

// add genere  (/genere)
router.post("/",postValidator, genere.addGenere);
// get all genere (/genere)
router.get("/", genere.getGenere);
// get genere by id (/genere/:id)
router.get("/:id",genere.getGenereById);
// delete genere (/genere/:id)
router.delete("/:id",genere.deleteGenere);

module.exports = router;
