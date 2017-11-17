'use strict';

// Get dependencies
const express = require('express');
const router = express.Router();
const path = require('path');
const http = require('http');
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const colors = require('colors');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.post('/', (req, res) => {
  let form = req.body;

  // SendGrid-NodeJS
  sgMail.setApiKey("XXXXXXXXXXXX"); // Prod
  sgMail.setSubstitutionWrappers('{{', '}}'); // Configure the substitution tag wrappers globally
  const emails = [
    {
      to: `${form.firstName} ${form.lastName} <${form.email}>`,
      from: `Sunny 🌞 Pets <noreply@sunnypetssd.com>`,
      subject: `Got your request!`,
      html: `<h2>Hi ${form.firstName},</h2>
      <p>Your request made its way through the interwebs to our inbox and we'll be getting back to you shortly</p>`,
      templateId: 'e8d72511-0108-45ad-8715-1453ee4c4a25',
      substitutions: {
        firstName: form.firstName,
        petName: form.petName
      },
    },
    {
      to: `Jon <jon@sunnypetssd.com>`,
      from: `${form.firstName} ${form.lastName} <${form.email}>`,
      subject: 'Quote Request',
      html: `
        ${form.firstName} ${form.lastName} in ${form.neighborhood} is interested in ${form.services} for their ${form.species}, ${form.petName}.
        <br>
        <br>Phone: ${form.tel}
        <br>Email: ${form.email}
        <br>
        <br>${form.message}
      `
    }
  ];
  sgMail.send(emails)
    .then(() => console.log('Mail sent successfully'))
    .catch(err => console.error(err));

});

module.exports = router;
