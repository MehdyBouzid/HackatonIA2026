# TechCorp AI Chat

## Présentation

TechCorp AI Chat est une application web permettant de communiquer avec un modèle d'intelligence artificielle exécuté localement via Ollama.

Ce projet a été réalisé individuellement dans le cadre du Hackathon IA TechCorp.

Le projet a été développé par un étudiant en **Mastère 1 Développement Full Stack (M1)**.

L'objectif principal était de déployer un serveur d'inférence local, de développer une interface web de chat et d'assurer une communication en temps réel avec un modèle d'intelligence artificielle.

---

# Fonctionnalités

- Interface web de chat
- Communication temps réel avec Ollama
- Historique des conversations
- Validation des entrées utilisateur
- Gestion des erreurs
- Architecture modulaire
- Tests de robustesse

---

# Technologies utilisées

## Frontend

- HTML5
- CSS3
- JavaScript ES Modules

## Intelligence Artificielle

- Ollama
- Modèle Phi-3

## Communication

- API REST
- Fetch API

---

# Architecture

Le projet suit une architecture **Feature-Based** permettant de séparer clairement les responsabilités.

```
techcorp-ai-chat/

├── features/
│   └── chat/
│       ├── chat.component.js
│       ├── chat.service.js
│       ├── chat.repository.js
│       └── chat.model.js
│
├── shared/
│   ├── dom.js
│   └── httpClient.js
│
├── src/
│   └── app.js
│
├── styles/
│   └── main.css
│
├── config.js
├── index.html
├── package.json
└── README.md
```

---

# Fonctionnement

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

# Développement Web

## Objectif

Développer une interface web permettant de communiquer avec un modèle d'intelligence artificielle via une API locale.

## Réalisations

- Développement d'une interface de chat
- Communication avec l'API Ollama
- Affichage des réponses en temps réel
- Historique des conversations
- Gestion des erreurs
- Validation des entrées utilisateur
- Désactivation du formulaire pendant les requêtes
- Architecture modulaire

---

# Infrastructure

## Objectif

Déployer un serveur d'inférence local accessible depuis l'application.

## Réalisations

- Installation d'Ollama
- Téléchargement du modèle Phi-3
- Configuration du serveur local
- Résolution des problèmes CORS
- Communication entre le navigateur et Ollama
- Vérification du bon fonctionnement du serveur

---

# Cybersécurité

## Objectif

Évaluer la robustesse de l'application face à différentes entrées utilisateur.

## Validation des entrées

- Champ obligatoire
- Limitation des messages à 500 caractères

## Tests réalisés

- Message vide
- Message très long
- Caractères spéciaux
- Injection HTML

```html
<script>alert("hack")</script>
```

```html
<img src=x onerror=alert(1)>
```

- Prompt Injection

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

- validation des données d'entrée ;
- analyse d'un dataset médical ;
- nettoyage des données ;
- préparation des données pour un fine-tuning LoRA.

## Réalisations

Les données utilisateur sont validées avant leur envoi vers le modèle grâce aux contrôles implémentés dans l'application :

- champ obligatoire ;
- limitation de longueur ;
- validation des messages avant appel de l'API.

Le dataset médical fourni dans le projet n'a pas été exploité dans le temps imparti du hackathon.

---

# Intelligence Artificielle

Le modèle utilisé est exécuté localement via Ollama.

Le projet communique avec le modèle Phi-3 via l'API REST exposée par Ollama.

L'architecture retenue permet de remplacer facilement le modèle actuel par une version fine-tunée (LoRA) sans modifier l'interface web.

Le fine-tuning LoRA demandé dans le brief n'a pas été réalisé durant le hackathon.

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

---

## Installation du projet

Installer les dépendances :

```bash
npm install
```

Lancer l'application :

```bash
npm start
```

Ouvrir :

```
http://127.0.0.1:8081
```

---

# Résultat

L'application permet :

- de communiquer avec un modèle d'intelligence artificielle local ;
- d'échanger en temps réel avec Ollama ;
- de conserver l'historique des conversations ;
- de sécuriser les entrées utilisateur ;
- de tester la robustesse de l'application.

---

# Pistes d'amélioration

- Intégration d'un modèle fine-tuné LoRA
- Analyse complète du dataset médical
- Persistance de l'historique des conversations
- Authentification utilisateur
- Export des conversations

---

# Auteur

Projet réalisé individuellement dans le cadre du Hackathon IA TechCorp.

**Mehdy Bouzid**  
Étudiant en **Mastère 1 Développement Full Stack (M1)**.
