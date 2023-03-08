"use strict";
const nodemailer = require("nodemailer");
const emailmicroservice = require("/emailmicroservice/index.js");
const startConsumer = require("./streams/kafka")


// async..await is not allowed in global scope, must use a wrapper
async function main() {
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
          from: `"Mr Bean" <HAHHHAHA@email.com>`, // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "user created " + key, // Subject line
          text: "User " + data + " has been created", // plain text body
          html: `<b>User ${data} has been created</b>`, // html body
        });

      case "userObtained":
        let userObtained = await transporter.sendMail({
          from: `"Mr Bean" <bar@example.com>`, // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "user created " + key, // Subject line
          text: "Users: \n" + data + "\n have been retreived", // plain text body
          html: `<b>User ${data} has been retreived</b>`, // html body
      });

        console.log("Message sent: %s", userObtained.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(userObtained));
        //Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    break;

      case "userDeleted":
      // send mail with defined transport object
      let userDeleted = await transporter.sendMail({
        from: `"THE DELETOR" <deletusthefetus@example.com>`, // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "book deleted " + key, // Subject line
        text: "book " + data + " has been deleted", // plain text body
        html: `<b>book ${data} has been deleted</b>`, // html body
      });

      console.log("Message sent: %s", userDeleted.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(userDeleted));
      //Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      break;


        console.log("Message sent: %s", userObtained.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Message URL: %s", nodemailer.getTestMessageUrl(userObtained));
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