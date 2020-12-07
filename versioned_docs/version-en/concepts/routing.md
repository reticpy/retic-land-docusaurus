---
id: routing
title: Routing
sidebar_label: Routing
description: Define application routing
slug: /concepts/routing
---


It refers to the definition of how an application responds to a request given by the client, using [HTTP methods](https://developer.mozilla.org/docs/Web/HTTP/Methods).

## Router class

The [class](https://retic.land/manual/glossary/#clase "Glosario de Términos") **Router** allows you to define the application paths.

**Parameters:**

- **strict_slashes**: It means that if a route ends with a slash (/), , but the corresponding URL does not, it is redirected to the final URL without a slash. By default the value of this is `True`. Otherwise, access to the route with or without the forward slash is allowed.

```python

# routes/routes.py

# Retic
from retic import Router

# Controllers
import controllers.users as users

"""Define the Router instance"""
router = Router(strict_slashes=False)

"""Define the rutes of the apliation - users"""
router.get("/users/:id", users.get_by_id)

```

```bash

# strict_slashes=False
# Both routes have the same result
http://localhost:1801/users/1/
http://localhost:1801/users/1

# strict_slashes=True
# The first route redirects to the second route
http://localhost:1801/users/1/
http://localhost:1801/users/1

```

## Access routes

Each route can have one or more controllers, which are executed when the route matches.

The definition of a route takes the following structure:

```python

router.METHOD(PATH, [HANDLER, ...])

```
Retic also has the ability to support the definition of routes with the following structure:

```python

router \
    .METHOD(PATH, [HANDLER, ...]) \
    .METHOD(PATH, [HANDLER, ...]) \
    .METHOD(PATH, [HANDLER, ...]) \
    .METHOD(PATH, [HANDLER, ...])

```

where:

- `router` is an [instance](https://retic.land/manual/glossary/#instancia "Glosario de Términos") of the [class](https://retic.land/manual/glossary/#clase "Glosario de Términos") `Router`.

- `METHOD` is a [method](https://retic.land/manual/glossary/#m%C3%A9todo "Glosario de Términos") HTTP, which must be in minusletters.

- `PATH` is a path on the server.

- `HANDLER` is the handler that runs when the path matches. Each route can have one or more controllers.

The following examples illustrate the definition of routes with the most used methods in a [CRUD](https://es.wikipedia.org/wiki/CRUD).

Response as `Hi world` in the home page.

```python

# routes/routes.py

# Retic
from retic import Router

# Controllers
import controllers.users as users

"""Definir la instancia Router"""
router = Router()

"""Define the paths of the application"""
router \
    .get("/", lambda req, res, next: res.ok({"msg": "Hello world! - HTTP GET"})) \
    .post("/", lambda req, res, next: res.ok({"msg": "Hello world! - HTTP POST"})) \
    .put("/", lambda req, res, next: res.send({"msg": "Hello world! - HTTP PUT"})) \
    .delete("/", lambda req, res, next: res.send({"msg": "Hello world! - HTTP DELETE"}))


"""Define application paths - users"""
router.get("/users/:id", users.get_by_id)

```

Create the main file to package the routes.

```python

# routes/__init__.py

from .routes import router

```
