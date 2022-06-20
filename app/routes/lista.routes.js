module.exports = app => {
    const lista = require("../controllers/lista.controller.js");
    var router = require("express").Router();
    // Hozzáadás
    router.post("/", lista.create);
    // Listázás
    router.get("/", lista.findAll);

    app.use('/api/lista', router);
  };