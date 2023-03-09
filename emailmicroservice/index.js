"use strict";
const nodemailer = require("nodemailer");
const emailmicroservice = require("/emailmicroservice/index.js");
const startConsumer = require("./streams/kafka")
const database = require("./database");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  let testAccount = await nodemailer.createTestAccount();
  startConsumer(handleEvent)

  async function handleEvent(eventMessage) {
    var key = eventMessage.key.toString(); //looks like byte stream in the stream
    var data = JSON.parse(eventMessage.value);

    console.log(`KEY: ${key}`);
    console.log(`DATA: ${eventMessage.value.toString()}`);

    //var parseData = JSON.stringify(data);
    switch (key) {
      case "userCreated":
        let userCreated = await transporter.sendMail({
          from: "Your favorite bookstore <bookdaddy@booking.org>",
          to: `${data.email}`, 
          subject: key, 
          text: "Thank you for joining out team!\n Now you can create books in our bookstore :)",
          html: `<b> Thank you for joining out team!\n Now you can create books in our bookstore :)</b>`, 
        });

        console.log("Message sent: %s", userCreated.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(userCreated));
    break;


      case "userObtained":
        //database.query(`SELECT FROM users where username=${} and email=${} `, function(err, results){});

        let userObtained = await transporter.sendMail({
          from: "Your favorite bookstore <bookdaddy@booking.org>",
          to: `${data.email}`, 
          subject: key, 
          text: data + " has been created",
          html: `<b> ${data} has been created</b>`, 
        });

        console.log("Message sent: %s", userObtained.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(userObtained));
    break;

      case "userDeleted":
          let userDeleted = await transporter.sendMail({
            from: `"THE DELETOR" <deletusthefetus@example.com>`, // sender address
            to: `${data.email}`, // list of receivers
            subject: "We're sad to see you go :( ", // Subject line
            text: "Bye bestie", // plain text body
            html: `<b>bye bestie</b>`, // html body
          });

          console.log("Message sent: %s", userDeleted.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(userDeleted));
          //Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        break;

      case "bookCreated":
          let bookCreated = await transporter.sendMail({
            from: "Your favorite bookstore <bookdaddy@booking.org>",
            to: `${data.title}'s author"`, 
            subject: key, 
            text: "Thank you for joining out team!\r\n Now you can create books in our bookstore :)",
            html: `<b> Thank you for joining out team!\r\n Now you can create books in our bookstore :)</b>`, 
          });
  
          console.log("Message sent: %s", bookCreated.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(bookCreated));
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