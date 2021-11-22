const Card = require('../models/card.model');

const createCard = async (req, res) => {
  try {
    console.log(req.body);
    const card = new Card(req.body);
    const { id } = await card.save();
    res.status(200).send({ card, id });
  } catch (error) {
    res.status(500).send({
      error,
      message: `Could not successfully create card. See following problems: ${error}`,
    });
  }
};

module.exports = { createCard };
