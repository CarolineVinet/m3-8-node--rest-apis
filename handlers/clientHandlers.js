const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

// write your handlers here...
const getClients = (req, res) => {
  res.status(200).send(clients);
};

const getClientById = (req, res) => {
  const clientId = req.params.id;
  const matchingClient = clients.find((client) => {
    return client.id === clientId;
  });
  res.status(200).send(matchingClient);
};

const addClient = (req, res) => {
  const newClient = req.params.email;
  const doesClientExist = clients.find((client) => {
    return client.email === newClient;
  });
  if (doesClientExist === undefined) {
    clients.push(req.body);
    res.status(201).send("New Client Added");
  } else {
    res.status(400).send("Client already exists");
  }
};

const deleteClient = (req, res) => {
  const clientId = req.params.id;
  const indexOfClient = clients.findIndex((client) => {
    return client.id === clientId;
  });
  clients.splice(indexOfClient, 1);
  res.status(200).send("Client has been deleted");
};

module.exports = { getClients, getClientById, addClient, deleteClient };
