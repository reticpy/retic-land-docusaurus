---
id: controllers
title: Controllers
sidebar_label: Controllers
description: Controllers of the proyect
slug: /es/concepts/controllers
---

Controllers are tied to your application paths. They manage incoming HTTP requests and decide which services should do the work to give a correct response to the client.

For example, the rute GET `/users/:id` in your application could be bound to a controller like:
```python

# controllers/users.py

# Retic
from retic import Request, Response, Next

# Services
from services.users import users


def get_by_id(req: Request, res: Response, next: Next):
    """Get a user by her identifier"""

    user = users.get_by_id_db(req.param("id", callback=int))

    """Transform response information"""
    if user:
        """Returns a response to the client"""
        res.ok({
            u"valid": True,
            u"msg": "Usuario encontrado.",
            u"data": user
        })
    else:
        """Returns an error message to the client"""
        res.not_found({
            u"valid": False,
            u"msg": "User not found."
        })


```
By default, the controller returns a response with status code 200.

```python

# controllers/users.py

# Retic
from retic import Request, Response, Next

# Services
from services.users import users


def get_by_id(req: Request, res: Response, next: Next):
    """Get a user by her identifier"""

    print("Controlador sin respuesta especifica.")

```

Each controller receives the following [parameters](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos"):

- [Request](../api/request): Represents an HTTP request to the server.
- [Response](../api/response): Represents a response to the client from the server.
- [Next](../api/next): Allows control of the request to be passed to the next controller.
