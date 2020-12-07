---
id: middlewares
title: Middlewares
sidebar_label: Middlewares
description: Middlewares of the App
slug: /api/middlewares
---

Retic provides services that function as the application's exchange logic, it's applied to one or more **specified** routes.

## cors(*methods: str*,*has_credentials: bool*,*origin: str*, *headers: str*, *expose_headers: str*)

Cross-origin resource sharing, or "CROSS," will allow you, as the name implies, to share resources from a wide variety of sources.

**The parameters used by CROSS are:**

* **methods**: By using the "Access-Control-Allow-Methods" response header, you can indicate which HTTP methods are allowed in cross-origin's resource exchange. This will serve as a particular end point for CROSS origin requests.

* **has_credentials**: The "Access-Control-Allow-Credentials" response header tells the browser that the server gives consent and allows credentials for the CORS or cross-origin request.

* **origin**: "Access-Control-Allow-Origin" in the case of this response header, indicates whether the resources in the response can be shared with the origin of the given resource.

* **headers**: The use of the "Access-Control-Allow-Headers" response header is used in response to a preflight request. This includes the headers for the access control request and indicates which HTTP headers can be used during the actual request.

* **expose_headers**: Now in the case of the "Access-Control-Expose-Headers" response header, it will indicate which headers can be used to display as part of the response when enumerating.

For more security, Retic protects routes with the options [method](https://retic.land/manual/glossary#m%C3%A9todo "Glosario de Términos") ``options`` against unauthorized access. That is why the access paths must be defined with the same method (``option``) well specified. Regular expressions can also be used as shown in the following example.

```python

# Retic
from retic import Router
from retic.lib.api.middlewares import cors

# Controllers
import controllers.files as files

"""Define the Router instance"""
router = Router()

"""Define CORS"""
_cors = cors(
    headers="Content-Type,source",
    expose_headers="Content-Type,source"
)

"""Add the headers provided by the cors function to all routes"""
router.use(_cors)

"""Define the options method for all routes that start with /"""
router.options("/*", _cors)

```
