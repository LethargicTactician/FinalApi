"use strict";
const nodemailer = require("nodemailer");
const emailmicroservice = require("/emailmicroservice/index.js");
//const { request } = require("../bookapi/app.js");
// const games = require("../testretro/api/paths/games");
const startConsumer = require("./streams/kafka")

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // booksObtained

  startConsumer(handleEvent)

  async function handleEvent(eventMessage) {
    var key = eventMessage.key.toString(); //looks like byte stream in the stream
    var data = JSON.parse(eventMessage.value);

    console.log(`KEY: ${key}`);
    console.log(`DATA: ${eventMessage.value.toString()}`);

    switch (key) {
      case "userCreated":
        let info = await transporter.sendMail({
          from: `"Mr Bean" <${request.body.email}>`, // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "user created " + key, // Subject line
          text: "User " + data + " has been created", // plain text body
          html: `<b>User ${data} has been created</b>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        //Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        break;

      case "bookCreated":
        let booksCreated = await transporter.sendMail({
          from: `"Mr Bean" <bkah>`, // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "user created " + key, // Subject line
          text: "User " + data + " has been created", // plain text body
          html: `<b>User ${data} has been created</b>`, // html body
        });

        console.log("Message sent: %s", booksCreated.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(booksCreated));
        //Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      break;

      case "booksObtained":
        let booksObtained = await transporter.sendMail({
          from: `"Mr Bean" <bar@example.com>`, // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "user created " + key, // Subject line
          text: "User " + data + " has been created", // plain text body
          html: `<b>User ${data} has been created</b>`, // html body
      });

        console.log("Message sent: %s", booksObtained.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(booksObtained));
        //Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      break;

      case "bookDeleted":
        // send mail with defined transport object
        let bookDeleted = await transporter.sendMail({
          from: `"THE DELETOR" <deletusthefetus@example.com>`, // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "book deleted " + key, // Subject line
          text: "book " + data + " has been deleted", // plain text body
          html: `<b>book ${data} has been deleted</b>`, // html body
        });

        console.log("Message sent: %s", bookDeleted.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(bookDeleted));
        //Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        break;


    }

  }

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);