---
id: middlewares
title: Middlewares
sidebar_label: Middlewares
description: Middlewares de la Aplicación
slug: /api/middlewares
---

Retic proporciona servicios que funcionan como logica de intercambio de la aplicación, ésta se aplica a una o varias rutas **especificadas**.

## cors(*methods: str*,*has_credentials: bool*,*origin: str*, *headers: str*, *expose_headers: str*)

El intercambio de recursos de origen cruzado o "CORS" por sus siglas en ingles, le permitirá como lo indica su nombre, compartir recursos de una gran variedad de fuentes.

**Los parámetros utilizados por CORS son:**

* **methods**: Al utilizar el encabezado de respuesta "Access-Control-Allow-Methods", se podrá indicar qué métodos HTTP están permitidos en el intercambio de recursos de origen cruzado. Esto servirá como punto final particular para solicitudes de origen CORS.

* **has_credentials**: El encabezado de respuesta "Access-Control-Allow-Credentials" le dice el navegador que el servidor da consentimiento y permite credenciales para la solicitud de CORS o de origen cruzado.

* **origin**: "Access-Control-Allow-Origin" en el caso de éste encabezado de respuesta, se indica si los recursos en la respuesta se pueden compartir con el origen del recurso dado.

* **headers**: El uso del encabezado de respuesta "Access-Control-Allow-Headers" es usado como respuesta a una solicitud de verificación previa. Esta incluye los encabezados para la solicitud de control de acceso e indicar qué encabezados HTTP pueden ser utilizados durante la solicitud real.

* **expose_headers**: Ahora en el caso del encabezado de respuesta "Access-Control-Expose-Headers", indicará qué encabezados se pueden utilizar para mostrarse como parte de la respuesta al enumerar.

Para más seguridad, Retic protege las rutas con el [método](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") ``options`` contra accesos no autorizados. Es por ello que se debe definir las rutas de acceso con el mismo método (``option``) bien especificadas. También pueden utilizarse expresiones regulares como se muestra en el siguiente ejemplo.

```python

# Retic
from retic import Router
from retic.lib.api.middlewares import cors

# Controllers
import controllers.files as files

"""Definir la instancia de Router"""
router = Router()

"""Define CORS"""
_cors = cors(
    headers="Content-Type,source",
    expose_headers="Content-Type,source"
)

"""Agergar las cabeceras que proporciona la función cors a todas las rutas"""
router.use(_cors)

"""Define el metodo options para todas las rutas que comiencen con /"""
router.options("/*", _cors)

```
