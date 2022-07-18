const Mailjet = require('node-mailjet');
const User = require('../models/user.model');

const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

const sendResetEmail = async (req, res) => {
  const { email, code } = req.body;

  const existingUser = await User.findOne({ email: email });

  if (!existingUser) {
    return res
      .status(409)
      .send('That email is not connected to a user. Please try again.');
  }

  if (existingUser) {
    try {
      mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'may@diviitarot.com',
              Name: 'May at Divii',
            },
            To: [
              {
                Email: existingUser.email,
                Name: existingUser.name,
              },
            ],
            Subject: 'Your Divii reset code',
            TextPart: code,
            HTMLPart: `<h3>${code}</h3><br />Hi, ${existingUser.name}! Use this code to reset your password within the app.`,
          },
        ],
      });

      return res.status(200).send();
    } catch (error) {
      return res.status(500).send();
    }
  }
};

module.exports = { sendResetEmail };
