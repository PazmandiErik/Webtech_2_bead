const db = require("../models");
const Lista = db.lista;
// Hozzáadás
exports.create = (req, res) => {
 // Validálás
 if (!req.body.title) {
    res.status(400).send({ message: "A tartalom nem lehet üres!" });
    return;
  }
  // Létrehozás
  const lista = new Lista({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });
  // Mentés
  lista
    .save(lista)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Hiba történt létrehozás közben."
      });
    });  
};

// Listázás
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Lista.find(condition)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Hiba történt kilistázás közben."
        });
     });
};