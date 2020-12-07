---
id: architecture
title: Architecture
sidebar_label: Architecture
description: initial structure of the project.
slug: /concepts/architecture
---

Retic is a framework used to create **server-side applications**. Retic is written in Python, and uses Werkzeug as a server.

An app is define by **rutes, controlers and services**. Retic provides the [class](https://retic.land/manual/glossary/#clase "Glosario de Términos") **Router** that helps to define the access points of the app. 


Retic recommends the following directory structure for easier application stability and maintenance.

```bash

retic-restapi-example
│
└───apps
│   │   urls.py
│   │   ...
|
└───controllers
│   │   controller1.py
│   │   controller2.py
│   │   ...
│
└───models
│   │   __init__.py
│   │   model1.py
|   │   model2.py
|   │   ...
│
└───routes
│   │   routes.py
|   │   ...
│
└───services
│   │
│   └───service1
│       │   service1.py
│       │   service2.py
│       │   ...
|   │   ...
│
│   .env.development
│   .env.staging
│   .env.production
│   app.py
│   requirements.txt
│   settings.py

```
