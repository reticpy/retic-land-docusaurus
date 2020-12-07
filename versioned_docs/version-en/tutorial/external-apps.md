---
id: external-apps
title: External apps
sidebar_label: External apps
description: External apps
slug: /tutorial/external-apps
---

_Folder strcture used:_

```bash

retic-restapi-example
│
└───apps
│   │   urls.py
│   │   ...
|
└───controllers
│   │   users.py
│   │   ...
│
└───routes
│   │   __init__.py
│   │   routes.py
|   │   ...
|
└───services
│   │
│   └───users
│       │   users.py
│       │   ...
│   ...
│   .env.development
│   .env.staging
│   .env.production
│   app.py
│   requirements.txt
│   settings.py

```

Retic recommends making a file for external application paths, in this way ensures the maintenance and scalability of the application. In the same way, the information should be saved in Retic to facilitate use throughout the application.

The environment variables file should be updated as follows:

```bash

# .env.development

#App
APP_HOSTNAME                     =localhost
APP_PORT                         =1801
APP_ENV                          =development

#Apps
APP_BACKEND_EXAMPLE      =https://jsonplaceholder.typicode.com

```

Create an `apps/urls.py` to add your external app path settings.

```python

# apps/urls.py

# Retic
from retic import App as app

"""Define others apps"""
BACKEND_EXAMPLE = {
    u"base_url": app.config.get('APP_BACKEND_EXAMPLE'),
    u"users": "/users",
}

"""Create the reference object of the apps """
APP_BACKEND = {
    u"example": BACKEND_EXAMPLE,
}

"""Add the Retic apps"""
app.use(APP_BACKEND, "backend")

```

Update the main `app.py` file and then add the configuration file:
```python

# app.py

"""Main app"""

# Retic
from retic import App as app

# Settings
import settings

# Apps
from apps.urls import APP_BACKEND

# Routes
from routes import router

# Agregar las rutas a la aplicación
app.use(router)

if __name__ == "__main__":
    # Create the web server
    app.listen(
        # Get the environment variable APP_HOSTNAME in the default format (str)
        hostname=app.env("APP_HOSTNAME"),
        # Get the APP_PORT environment variable in numeric format. If it does not exist, it returns 1801.
        port=app.env.int("APP_PORT", 1801),
    )


```

Install the packaged `requests` to make HTTP calls.

```bash

# requiremets.txt

retic==0.1.1
requests==2.24.0

```

To install the dependencies you must use the following command:

```bash

pip install -r requirements.txt

```

Update the `services/users/users.py` service doing the external app consume.

```python

# services/users/users.py

"""Servicios para el controlador de usuarios"""

# Retic
from retic import App as app

# Requests
import requests

# Constants
URL_USERS = app.apps['backend']['example']['base_url'] + \
    app.apps['backend']['example']['users']


def get_by_id_db(user_id):
    """Find a user based on an identifier

    :param user_id: user identifier
    """

    """Declarar variables"""
    user = None

    """Declare variables"""
    users_req = requests.get(URL_USERS)

    """Transform in json"""
    users = users_req.json()

    """make the search"""
    for _user in users:
        if _user["id"] == user_id:
            user = _user

    """Return information"""
    return user

```

Update the controller `controllers/users.py`,doing so must apply a validation that specifies the existence of the user:

```python

# controllers/users.py

# Retic
from retic import Request, Response, Next

# Services
from services.users import users


def get_by_id(req: Request, res: Response, next: Next):
    """Obtener un usuario por su identificador"""

    user = users.get_by_id_db(req.param("id", callback=int))

    """Transform response information"""
    if user:
        """Return an error message to the client"""
        res.ok({
            u"valid": True,
            u"msg": "User found.",
            u"data": user
        })
    else:
        """Retornar un mensaje de error al cliente"""
        res.not_found({
            u"valid": False,
            u"msg": "Usuario no encontrado."
        })

```
Visite the following liink [http://localhost:1801/users/1](http://localhost:1801/users/1) para ver el resultado.

![alt text](../../../static/img/api_rest_app_5.png "API REST")
