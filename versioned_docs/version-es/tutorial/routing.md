---
id: routing
title: Enrutamiento
sidebar_label: Enrutamiento
description: Crear rutas de la aplicación
slug: /tutorial/routing
---

_Estructura de carpetas utilizada:_

```bash

retic-restapi-example
│   ...
└───routes
│   │   __init__.py
│   │   routes.py
|   │   ...
│   ...
│   app.py
│   requirements.txt

```

Este comando permite definir nuevas rutas para el servidor.

Para esto se debe crear un archivo `/routes/routes.py` en el cual se encuentran las rutas de nuestra aplicación.

```python

# routes/routes.py

# Retic
from retic import Router

"""Definir la instancia Router"""
router = Router()

"""Definir las rutas de la apliación"""
router.get("/", lambda req, res, next: res.ok({u"msg": "Hello world!"}))

```

Crea el archivo principal para almacenar y empaquetar las rutas.

```python

# routes/__init__.py

from .routes import router

```

Actualiza el archivo principal `app.py` de la aplicación y agrega las rutas de la aplicación:

```python

# app.py

"""Main app"""

# Retic
from retic import App as app

# Routes
from routes import router

# Agregar las rutas a la aplicación
app.use(router)

if __name__ == "__main__":
    # Crear servidor web
    app.listen(
        hostname="localhost",
        port=1801,
    )

```

Para terminar debes reiniciar el servidor web con el siguiente comando:

```bash

python app.py

```

Visita el siguiente enlace [http://localhost:1801/](http://localhost:1801/) para ver el resultado.

![alt text](../../../static/img/api_rest_app_2.png "API REST")

Para más detalles visita la [guía de enrutamiento](../concepts/routing).
