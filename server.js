"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const clients = require("./data/clients");
const {
  getClients,
  getClientById,
  addClient,
  deleteClient,
} = require("./handlers/clientHandlers");
const { getWordObj, letterGuess } = require("./handlers/hangmanHandlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints

  .get("/clients", getClients)
  .get("/clients/:id", getClientById)
  .post("/clients/:email", addClient)
  .delete("/clients/:id", deleteClient)

  // .get("/hangman/word/:id") //only for testing, not for user in frontend
  .get("/hangman/word", getWordObj)
  .get("/hangman/guess/:id/:letter", letterGuess)

  .listen(8000, () => console.log(`Listening on port 8000`));
