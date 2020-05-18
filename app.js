
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
require("dotenv").config();

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html")
})

app.post("/failure", function(req, res) {
  res.redirect("/")
})

app.post("/", function(req, res) {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }

  jsonData = JSON.stringify(data)

  const audienceId = process.env.AUDIENCE_ID;
  const APIKey = process.env.API_KEY;
  const url = "https://us8.api.mailchimp.com/3.0/lists/" + audienceId;
  const options = {
    auth : APIKey,
    method: "POST"
  }

  // request a secure connection with the api
  const requestConnection = https.request(url, options, function(response) {

    if(response.statusCode === 200) {
      // res.send("nice job")
      res.sendFile(__dirname + "/success.html")
    } else {
      // res.send("go away loser")
      res.sendFile(__dirname + "/failure.html")
    }

    response.on("data", function(data) {
      // console.log(JSON.parse(data))
    })

  })

  requestConnection.write(jsonData)
  requestConnection.end()

  // res.write("<h1>Yuhooo you are now subscribed</h1>")
  // res.send()

})


app.listen(process.env.PORT || 3000, function(){
  console.log("Server up, listening on 3000")
})


// API Key
// 8e4e63a4067f42b2c4493f56ce77415d-us8

// Audience id
// d76e43a732
