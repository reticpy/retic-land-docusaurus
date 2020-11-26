---
id: services
title: Servicios
sidebar_label: Servicios
description: Crear servicios de la aplicación
slug: /es/tutorial/services
---

_Estructura de carpetas utilizada:_

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

Para hacer los servicios de la aplicación se debe crear un archivo `/services/users/users.py`, éste archivo contiene en su interior la logica de los controladores para el usuario de nuestra aplicación.

```python

# services/users/users.py

"""Servicios para el controlador de usuarios"""


def get_by_id_db(user_id):
    """Encontrar un usuario en base a un identificador

    :param user_id: Identificador del usuario
    """

    """Realizar la busqueda"""
    user = {
        u"username": "Retic",
        u"id": user_id
    }

    """Retornar información"""
    return user

```

Se debe actualizar el controlador `controllers/users.py` y agrega el servicio creado:

```python

# controllers/users.py

# Retic
from retic import Request, Response, Next

# Services
from services.users import users


def get_by_id(req: Request, res: Response, next: Next):
    """Obtener un usuario por su identificador"""

    """Obtener usuario en base a su id"""
    user = users.get_by_id_db(req.param("id"))

    """Transformar información de respuesta"""
    response = {
        u"valid": True,
        u"msg": "Usuario encontrado.",
        u"data": user
    }

    """Retornar una respuesta al cliente"""
    res.ok(response)

```

Visita el siguiente enlace [http://localhost:1801/users/1234](http://localhost:1801/users/1234) para ver el resultado.

![alt text](../../../static/img/api_rest_app_4.png "API REST")

Si deseas ver más detalles sobre esto puedes visitar la [guía de servicios](../concepts/services).
