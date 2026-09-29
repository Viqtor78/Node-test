const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route principale
app.get('/', (req, res) => {
  res.json({
    message: 'Serveur Node.js fonctionne correctement!',
    timestamp: new Date().toISOString()
  });
});

// Route de santé
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Démarrage du serveur
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

