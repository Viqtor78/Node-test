# Test Node Server

Serveur Node.js simple utilisant Express et Docker.

## Architecture

Application Node.js minimaliste servant de base pour le développement Docker.

## Démarrage rapide

### Sans Docker
```bash
npm install
npm start
```

Le serveur sera accessible sur `http://localhost:3000`

### Avec Docker

Construire l'image:
```bash
docker build -f dockerfile.yml -t test-node-server .
```

Lancer le conteneur:
```bash
docker run -p 3000:3000 test-node-server
```

## Endpoints

- `GET /` - Message de bienvenue avec timestamp
- `GET /health` - État de santé du serveur

## Technologies

- Node.js 18
- Express.js
- Docker

