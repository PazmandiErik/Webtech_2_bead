exports.allAccess = (req, res) => {
    res.status(200).send("Nyílvános tartalom.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("Felhasználói tartalom.");
  };
