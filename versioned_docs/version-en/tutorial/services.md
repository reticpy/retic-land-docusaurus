---
id: services
title: Services
sidebar_label: Services
description: Create app services
slug: /tutorial/services
---

_/ en / tutorial / services

Folder structure used:_

```bash

retic-restapi-example
│   ...
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
│   app.py
│   requirements.txt

```

To make the application services, a file  `/services/users/users.py`, must be created, this file contains inside the logic of the controllers for the user of our application.

```python

# services/users/users.py

"""Services for the user controller"""


def get_by_id_db(user_id):
    """Find a user based on an identifier

    :param user_id: Identificador del usuario
    """

    """Perform the search"""
    user = {
        u"username": "Retic",
        u"id": user_id
    }

    """Return the information"""
    return user

```

You must update the controller `controllers/users.py` and add the created service:
```python

# controllers/users.py

# Retic
from retic import Request, Response, Next

# Services
from services.users import users


def get_by_id(req: Request, res: Response, next: Next):
    """Get a user by her identifier"""

    """Get user based on her id"""
    user = users.get_by_id_db(req.param("id"))

    """Transform response information"""
    response = {
        u"valid": True,
        u"msg": "Usuario encontrado.",
        u"data": user
    }

    """Return a response to the client"""
    res.ok(response)

```

Visit the following link [http://localhost:1801/users/1234](http://localhost:1801/users/1234) to see the result.

![alt text](../../../static/img/api_rest_app_4.png "API REST")

Si deseas ver más detalles sobre esto puedes visitar la [guía de servicios](../concepts/services).
