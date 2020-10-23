---
id: architecture
title: Arquitectura
sidebar_label: Arquitectura
description: Estructura inicial del proyecto
slug: /es/concepts/architecture
---

Retic es un marco de trabajo que se utiliza para crear **aplicaciónes del lado del servidor**. Retic está escrito en Python, y utiliza Werkzeug como servidor.

Una aplicación se define por **rutas, controladores y servicios**. Retic provee la clase **Router** que ayuda a definir los puntos de acceso de la aplicación.

Retic recomienda la siguiente estructura de directorios para que la estabilidad y mantenimiento de la plicación resulte más facil de realizar.

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
