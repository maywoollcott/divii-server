const Spread = require('../models/spread.model');

const createSpread = async (req, res) => {
  try {
    const spread = new Spread(req.body);
    const newSpread = await spread.save();
    res.status(200).send({ newSpread });
  } catch (error) {
    res.status(500).send({
      error,
      message: `Could not successfully create spread. See following problems: ${error}`,
    });
  }
};

const getSpreadByNumber = async (req, res) => {
  try {
    const { spreadNumber } = req.params;
    const spread = await Spread.findOne({ spreadNumber: spreadNumber });
    res.status(200).send({ spread });
  } catch (error) {
    res.status(500).send({
      error,
      message: `Could not successfully fetch spread. See following problems: ${error}`,
    });
  }
};

const getAllSpreads = async (req, res) => {
  try {
    const spreads = await Spread.find();
    res.status(200).send({ spreads });
  } catch (error) {
    res.status(500).send({
      error,
      message: `Could not successfully fetch spreads. See following problems: ${error}`,
    });
  }
};

module.exports = { createSpread, getSpreadByNumber, getAllSpreads };
