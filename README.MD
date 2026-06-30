# TechCorp AI Chat

## Présentation

TechCorp AI Chat est une application web permettant de communiquer avec un modèle d'intelligence artificielle exécuté localement via Ollama.

Ce projet a été réalisé dans le cadre du Hackathon IA TechCorp.

L'objectif principal était de déployer un modèle d'intelligence artificielle accessible via une interface web tout en respectant les différents rôles proposés dans le brief (Infrastructure, Développement Web, Data, IA et Cybersécurité).

Le projet a été réalisé individuellement.

---

# Fonctionnalités

- Interface web de chat.
- Communication avec un modèle d'intelligence artificielle via Ollama.
- Historique des conversations.
- Validation des entrées utilisateur.
- Gestion des erreurs.
- Communication temps réel avec l'API REST d'Ollama.
- Architecture modulaire.

---

# Technologies utilisées

## Frontend

- HTML5
- CSS3
- JavaScript (ES Modules)

## Intelligence Artificielle

- Ollama
- Modèle Phi-3

## Communication

- API REST
- Fetch API

---

# Architecture

Le projet est organisé selon une architecture **Feature-Based** avec une séparation des responsabilités.

```
techcorp-ai-chat/

features/
└── chat/
    ├── chat.component.js
    ├── chat.service.js
    ├── chat.repository.js
    └── chat.model.js

shared/
├── dom.js
└── httpClient.js

src/
└── app.js

styles/
└── main.css

config.js
index.html
package.json
README.md
```

---

# Développement Web

## Objectif

Développer une interface web permettant de communiquer avec un modèle d'intelligence artificielle via Ollama.

## Réalisations

- Développement d'une interface de chat.
- Communication avec l'API Ollama.
- Affichage des réponses en temps réel.
- Historique des conversations.
- Gestion des erreurs.
- Validation des entrées utilisateur.
- Désactivation du formulaire pendant le traitement des requêtes.
- Architecture modulaire permettant une meilleure maintenabilité.

Le flux de communication est le suivant :

```
Utilisateur

↓

Interface Web

↓

Chat Component

↓

Chat Service

↓

Chat Repository

↓

HTTP Client

↓

API Ollama

↓

Modèle Phi-3

↓

Réponse JSON

↓

Affichage dans le navigateur
```

---

# Infrastructure

## Objectif

Déployer un serveur d'inférence permettant d'exposer le modèle via une API.

## Réalisations

- Installation d'Ollama.
- Téléchargement du modèle Phi-3.
- Configuration du serveur local.
- Résolution des problèmes liés au CORS.
- Communication entre l'application web et Ollama.
- Vérification du bon fonctionnement du serveur.

---

# Cybersécurité

## Objectif

Vérifier la robustesse de l'application face à différentes entrées utilisateur.

## Tests réalisés

### Validation des entrées

- Champ obligatoire.
- Limitation des messages à 500 caractères.

### Tests de robustesse

- Test de message vide.
- Test de message très long.
- Test de caractères spéciaux.
- Test XSS avec :

```html
<script>alert("hack")</script>
```

- Test HTML Injection avec :

```html
<img src=x onerror=alert(1)>
```

- Test de Prompt Injection.

## Résultats

Les différents tests montrent que :

- les entrées utilisateur sont correctement validées ;
- les scripts HTML ne sont pas exécutés ;
- l'application reste stable lors des différents scénarios de test ;
- les erreurs sont correctement gérées.

---

# Data

## Objectif

Le brief prévoyait :

- l'analyse du dataset médical ;
- le nettoyage des données ;
- la préparation du dataset pour un fine-tuning LoRA.

## État du projet

Le projet contient un dossier `medical_dataset`, mais celui-ci était vide au moment du développement.

La commande suivante ne retourne aucun fichier :

```bash
find medical_dataset -type f
```

En conséquence, il n'a pas été possible de :

- analyser le dataset médical ;
- nettoyer les données ;
- préparer les données pour un fine-tuning.

En revanche, les données utilisateur échangées avec le modèle sont validées avant leur envoi grâce aux contrôles mis en place dans l'application.

---

# Intelligence Artificielle

Le modèle utilisé est exécuté localement via Ollama.

Le fine-tuning LoRA demandé dans le brief n'a pas été réalisé.

Ce choix s'explique par deux raisons :

- le dataset médical nécessaire n'était pas disponible dans le projet ;
- le développement a été réalisé seul, avec une priorité donnée à la mise en place d'une application complète, fonctionnelle et documentée.

L'architecture retenue reste compatible avec l'intégration future d'un modèle fine-tuné.

---

# Installation

## Installation d'Ollama

Télécharger Ollama :

https://ollama.com/download

Télécharger le modèle :

```bash
ollama pull phi3
```

Lancer Ollama :

```bash
ollama serve
```

Installer les dépendances :

```bash
npm install
```

Lancer l'application :

```bash
npm start
```

Accéder à l'application :

```
http://127.0.0.1:8081
```

---

# Conclusion

L'objectif principal du projet a été atteint.

L'application permet de communiquer avec un modèle d'intelligence artificielle local via une interface web, avec une architecture modulaire, des validations d'entrées et plusieurs tests de robustesse.

Le développement a été réalisé individuellement. Les parties liées au dataset médical et au fine-tuning LoRA n'ont pas pu être menées à terme en raison de l'absence du dataset dans les ressources disponibles du projet.

---

# Auteur

Projet réalisé individuellement dans le cadre du Hackathon IA TechCorp.