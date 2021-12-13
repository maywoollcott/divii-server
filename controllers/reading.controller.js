const Reading = require('../models/reading.model');

const createReading = async (req, res) => {
  try {
    console.log(req.body);
    const reading = new Reading(req.body);
    const { id } = await reading.save();
    res.status(200).send({ reading, id });
  } catch (error) {
    res.status(500).send({
      error,
      message: `Could not successfully create reading. See following problems: ${error}`,
    });
  }
};

const getReadingsById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const readings = await Reading.find({ userId: id });
    res.status(200).send({ readings });
  } catch (error) {
    res.status(500).send({
      error,
      message: `Could not successfully fetch readings. See following problems: ${error}`,
    });
  }
};

module.exports = { createReading, getReadingsById };
