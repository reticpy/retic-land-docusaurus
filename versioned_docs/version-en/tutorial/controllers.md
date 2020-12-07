---
id: controllers
title: Controllers
sidebar_label: Controllers
description: Create application controllers
slug: /tutorial/controllers
---

_Folder structure used:_

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
│   ...
│   app.py
│   requirements.txt

```
These manage incoming HTTP requests and decide which services should perform the work, this is done to give the client a correct response.

A file `/controllers/users.py` must be created which can manage the logic of the user services of our application.

```python

# controllers/users.py

# Retic
from retic import Request, Response, Next


def get_by_id(req: Request, res: Response, next: Next):
    """Get a user by her identifier"""

    response = {
        u"valid": True,
        u"msg": "User found.",
        u"data": {
            u"username": "Retic",
            u"id": req.param("id")
        }
    }

    res.ok(response)

```

Update the main routes `routes/routes.py`/ file of the application and add the application controllers:
```python

# routes/routes.py

# Retic
from retic import Router

# Controllers
import controllers.users as users

"""Define the Router instance"""
router = Router()

"""Define the app routes"""
router\
    .get("/", lambda req, res, next: res.ok({"msg": "Hello world! - HTTP GET"})) \
    .post("/", lambda req, res, next: res.ok({"msg": "Hello world! - HTTP POST"}))

"""Define the app-users rutes"""
router.get("/users/:id", users.get_by_id)

```
Visit the following link [http://localhost:1801/users/123](http://localhost:1801/users/123) para ver el resultado.

![alt text](../../../static/img/api_rest_app_3.png "API REST")

If you wish to look for more details go visit the [drivers guide](../concepts/controllers).
