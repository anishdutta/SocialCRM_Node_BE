const express = require("express");
var bodyParser = require("body-parser");
const db = require("./config/db");
const app = express();
require("dotenv").config();
const debug = require('debug')('myapp:server');

const cors = require("cors");
const nodemailer = require("nodemailer");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req,res) {
    return res.send("hello from my app express server!")
})

app.get("/api/getUserDetails/:id", (req, res) => {
    const UserId = req.params.id;
    db.query(`SELECT * FROM SocialCRM.UserDetails where UserId="${UserId}";`, (err, result) => {
      if (err) {
        res.status(400).send(err.sqlMessage);

      }
      else{
        console.log(result);
        res.send(result);
      }
  
      
    });
});
app.post("/api/createUser", (req, res) => {
    const UserId = req.body.UserId;
    const emailId = req.body.emailId;
    const displayImg = req.body.displayImg;
    const orgName = req.body.orgName;
    
  
  
    db.query(
      `insert into UserDetails (UserId,emailId,displayImg,orgName ) values ('${UserId}', '${emailId}', '${displayImg}', '${orgName}');`,
      (err, result) => {
        if (err) {
            res.status(400).send(err.sqlMessage);
        }
        else{
            console.log(result);res.send("Succefully added to db");
        }
        
      }
    );
    
});
app.get("/api/getUserSocials/:id", (req, res) => {
    const UserId = req.params.id;
    db.query(`SELECT * FROM SocialCRM.socialToken where UserId="${UserId}";`, (err, result) => {
      if (err) {
        res.status(400).send(err.sqlMessage);

      }
      else{
        console.log(result);
        res.send(result);
      }
  
      
    });
});
app.post("/api/createSocialToken", (req, res) => {
    const userId = req.body.userId;
    const fbToken = req.body.fbToken;
    const instaToken = req.body.instaToken;
    const linkedinToken = req.body.linkedinToken;
    
  
  
    db.query(
      `insert into socialToken (userId,fbToken,instaToken,linkedinToken ) values ('${userId}', '${fbToken}', '${instaToken}', '${linkedinToken}');`,
      (err, result) => {
        if (err) {
            res.status(400).send(err.sqlMessage);
        }
        else{
            console.log(result);res.send("Succefully added to db");
        }
        
      }
    );
    
});
app.post("/api/createCustomReply", (req, res) => {
    const userId = req.body.userId;
    const message = req.body.message;
    
  
  
    db.query(
      `insert into customReply (userId,message ) values ('${userId}', '${message}');`,
      (err, result) => {
        if (err) {
            res.status(400).send(err.sqlMessage);
        }
        else{
            console.log(result); res.send("Succefully added to db");
        }
        
      }
    );
   
});
app.post("/api/deleteCustomReply", (req, res) => {
    const userId = req.body.userId;
    const Id = req.body.Id;
    
  
  
    db.query(
      `delete from customReply where userId="${userId}" and Id = "${Id}";`,
      (err, result) => {
        if (err) {
            res.status(400).send(err.sqlMessage);
        }
        else{
            console.log(result);
            if(result.affectedRows === 0){
                res.status(400).send("Could not delete");
    
            }
            else{
                res.send(result);
            }
        }
        
      }
    );
    
});
app.get("/api/getCustomReply/:id", (req, res) => {
    const UserId = req.params.id;
    db.query(`SELECT * FROM SocialCRM.customReply where UserId="${UserId}";`, (err, result) => {
      if (err) {
        res.status(400).send(err.sqlMessage);

      }
      else{
        console.log(result.affectedRows);
        if(result.affectedRows === 0){
            res.status(400).send("Could not delete");

        }
        else{
            res.send(result);
        }
        
      }
  
      
    });
});
app.post("/send_mail", cors(), async (req, res) => {
	const Message = req.body.Message;
	const Subject = req.body.Subject;
	const To = req.body.To;
    const from = `${req.body.from} <anish2000.ad@gmail.com>`

	const transport = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "sociophin.services@gmail.com",
			pass: "socioPhin@services123"
		}
	})

	await transport.sendMail({
		from: from,
		to: To,
		subject: Subject,
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>${Message}</p>
    
        <p>All the best man</p>
         </div>
    `
	})

	res.send('Email Sent');
})
app.listen(process.env.PORT || 4000, () => {
    console.log(`Example app listening at http://localhost: 4000`);
  });