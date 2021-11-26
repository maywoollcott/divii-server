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

const getCardByNumber = async (req, res) => {
  try {
    const { deckNumber } = req.params;
    console.log(deckNumber);
    const card = await Card.findOne({ deckNumber: deckNumber });
    res.status(200).send({ card });
  } catch (error) {
    res.status(500).send({
      error,
      message: `Could not successfully fetch card. See following problems: ${error}`,
    });
  }
};

module.exports = { createCard, getCardByNumber };
