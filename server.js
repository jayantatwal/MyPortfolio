//This file is used on the submit button on the contact.js file 
//When a user will press send using this file the message will be sent to my mail

const express = require("express"); //A library for creating a server.
const router = express.Router();
const cors = require("cors"); //Allows cross-origin requests (e.g., from a different domain).
const nodemailer = require("nodemailer"); //A library to send emails.

// server used to send emails
const app = express();
app.use(cors()); //Allows your server to accept requests from other domains.
app.use(express.json()); //Parses JSON data in requests.
app.use("/", router); //Uses the router to handle routes.
app.listen(5000, () => console.log("Server Running")); //Starts the server on port 5000.

const contactEmail = nodemailer.createTransport({
  service: 'gmail', //Configures how to send the email. In this case, using Gmail.
  auth: {
    user: "*******@gmail.com", //The email address that will send the email.
    pass: "" //The password for the email account
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => { //Handles POST requests to the /contact endpoint.
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email; //Contains the form data sent from the client (e.g., name, email, message).
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = { //Defines the email that will be sent (who it's from, who it's to, subject, and content).
    from: name,
    to: "ghostgaming2k4@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => { 
    // Sends the email. If there's an error, it returns the error; otherwise, it confirms the message was sent.
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
