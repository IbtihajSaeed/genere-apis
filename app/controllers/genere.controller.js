const db = require("../models/index.js");
const genere = db.genere;
const controller = {};
controller.addGenere = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    await genere.create({
      name: name,
      description: description,
    });
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};

controller.getGenere = async (req, res, next) => {
  try {
    const getAllGenere = await genere.findAll({
        where:{IsDeleted:0}
    });
    res.status(200).send(getAllGenere);
  } catch (error) {
    next(error);
  }
};

controller.getGenereById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Id is mandatory");
    }
    const getGenere = await genere.findOne({
      where: { id: id, IsDeleted:0},
    });
    res.status(200).send(getGenere);
  } catch (error) {
    next(error);
  }
};

controller.deleteGenere = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        throw new Error("Id is mandatory");
      }
      const isDelete = await genere.update({IsDeleted:1},{
        where: { id: id },
      });
      res.status(200).send({message:"successfully deleted"});
    } catch (error) {
      next(error);
    }
  };
  

module.exports = controller;
