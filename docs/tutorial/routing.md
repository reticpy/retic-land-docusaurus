---
id: routing
title: Routing
sidebar_label: Routing
description: Create app routes
slug: /tutorial/routing
---

_/ en / tutorial / routing

Folder structure used:_

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

This command allows you to define new paths for the server.

For this, a file`/routes/routes.py` must be created in which the routes of our application can be found. 

```python

# routes/routes.py

# Retic
from retic import Router

"""Define the instance Router"""
router = Router()

"""Define the app routes"""
router.get("/", lambda req, res, next: res.ok({u"msg": "Hello world!"}))

```

Create the main file to store and package the routes.


```python

# routes/__init__.py

from .routes import router

```

Update the main app.py file for the app and add the app paths:

```python

# app.py

"""Main app"""

# Retic
from retic import App as app

# Routes
from routes import router

# Add the app routes
app.use(router)

if __name__ == "__main__":
    # Create web server
    app.listen(
        hostname="localhost",
        port=1801,
    )

```

To finish you must restart the web server with the following command:

```bash

python app.py

```

Visit the following link [http://localhost:1801/](http://localhost:1801/) to see the result.

![alt text](../../static/img/api_rest_app_2.png "API REST")

For more details visit the [routing guide](../concepts/routing).
