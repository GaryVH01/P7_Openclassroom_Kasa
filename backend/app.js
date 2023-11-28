const express = require("express"); // importation du module express
const app = express(); // Création de l'application express
app.use(express.json()); // middleware pour extraire le corps des requêtes en format JSON
const connectDB = require("./dataBase");
require("dotenv").config(); // Importation de la variable d'environnement
const path = require("path"); //
const usersModel = require("./models/user");

//  Installation du package "cors" pour contourner les problèmes de CORS rencontrés lors des requêtes,
var cors = require("cors");
app.use(cors());

connectDB(); // connexion à la database

// Ajout des headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// fonction pour se loger en récupérant le mail de l'utilisateur et en le comparant à celui du formulaire
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  usersModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("No client found");
    }
  });
});

// fonction pour créer un user
app.post("/signup", (req, res) => {
  usersModel
    .create(req.body)
    .then(() => res.status(201).json({ message: "utilisateur créé !" }))
    .catch((err) => res.json(err));
});

app.use(express.static(__dirname));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = app; // Export de l'application express
