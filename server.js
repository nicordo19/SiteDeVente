const express = require("express");

const connection = require("./mysql"); // Importer la connexion à la base de données

const app = express();
const PORT = 3000; // Port où le serveur sera démarré

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Route principale pour tester le serveur
app.get("/", (req, res) => {
  res.send("<h1>Bienvenue dan smon cite EcoFashion</h2>");
});

// Route pour récupérer le produit
app.get("/produit", (req, res) => {
  connection.query("SELECT * FROM produit", (err, result) => {
    if (err) {
      console.error("erreur de la recuperation des produit", err);
      res.status(500).send("Erreur serveur");
      return;
    } else {
      res.json(result); // Renvoyer les résultats en JSON
    }
  });
});
// app.post("/produit", (req, res) => {
//   const { nom, prix, image, description } = req.body;

//   // Requête SQL pour insérer un produit
//   const sql = "INSERT INTO produits(nom,pris,image,description)VALUE(?,?,?,?)";
// connection.query(sql, [nom, prix, image, description], (err, results) => {
//   if (err) {
//       console.error('Erreur lors de l\'insertion du produit :', err);
//       res.status(500).send('Erreur serveur');
//       return;
//   }
//   res.send('Produit ajouté avec succès.');
// });
// });

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
