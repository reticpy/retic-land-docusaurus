---
id: routing
title: Enrutamiento
sidebar_label: Enrutamiento
description: Definir rutas de la aplicación
slug: /es/concepts/routing
---


Se refiere a la definición de cómo una aplicación responde a una solicitud dada por el cliente, utilizando [metodos HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Methods).

## Clase Router

La [clase](https://retic.land/manual/es/glossary/#clase "Glosario de Términos") **Router** permite definir las rutas de acceso de la aplicación.

**Parámetros:**

- **strict_slashes**: Se refiere a que si una ruta termina con una barra inclinada (/), pero la URL correspondiente no lo hace, se redirige a la URL final sin barra inclinada. Por defecto el valor de esta es `True`. En caso contrario, se permite el acceso a la ruta con o sin la barra inclinada.

```python

# routes/routes.py

# Retic
from retic import Router

# Controllers
import controllers.users as users

"""Definir la instancia Router"""
router = Router(strict_slashes=False)

"""Definir las rutas de la apliación - users"""
router.get("/users/:id", users.get_by_id)

```

```bash

# strict_slashes=False
# Ambas rutas tienen el mismo resultado
http://localhost:1801/users/1/
http://localhost:1801/users/1

# strict_slashes=True
# La primera ruta redirije a la segunda ruta
http://localhost:1801/users/1/
http://localhost:1801/users/1

```

## Rutas de acceso

Cada ruta puede tener uno o más controladores, los cuales se ejecutan cuando la ruta coincide.

La definición de una ruta toma la siguiente estructura:

```python

router.METHOD(PATH, [HANDLER, ...])

```

Retic también tiene la capacidad de soportar la definición de rutas con la siguiente estructura:

```python

router \
    .METHOD(PATH, [HANDLER, ...]) \
    .METHOD(PATH, [HANDLER, ...]) \
    .METHOD(PATH, [HANDLER, ...]) \
    .METHOD(PATH, [HANDLER, ...])

```

Dónde:

- `router` es una instancia de la [clase](https://retic.land/manual/es/glossary/#clase "Glosario de Términos") `Router`.

- `METHOD` es un [método](https://retic.land/manual/es/glossary/#m%C3%A9todo "Glosario de Términos") HTTP, el cual debe estar expresado en minúsculas.

- `PATH` es una ruta en el servidor.

- `HANDLER` es el controlador que se ejecuta cuando la ruta coincide. Cada ruta puede poseer uno o más controladores.

Los siguientes ejemplos ilustran la definición de rutas con los metodos más utilizados en un [CRUD](https://es.wikipedia.org/wiki/CRUD).

Responde con `Hola mundo` en la página de inicio:

```python

# routes/routes.py

# Retic
from retic import Router

# Controllers
import controllers.users as users

"""Definir la instancia Router"""
router = Router()

"""Definir las rutas de la apliación"""
router \
    .get("/", lambda req, res, next: res.ok({"msg": "Hello world! - HTTP GET"})) \
    .post("/", lambda req, res, next: res.ok({"msg": "Hello world! - HTTP POST"})) \
    .put("/", lambda req, res, next: res.send({"msg": "Hello world! - HTTP PUT"})) \
    .delete("/", lambda req, res, next: res.send({"msg": "Hello world! - HTTP DELETE"}))


"""Definir las rutas de la apliación - users"""
router.get("/users/:id", users.get_by_id)

```

Crea el archivo principal para empaquetar las rutas.

```python

# routes/__init__.py

from .routes import router

```
