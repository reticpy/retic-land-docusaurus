---
id: app
title: Principal file
sidebar_label: Principal file
description: Principal app file
slug: /tutorial/app
---

_folder strcture used:_

```bash

retic-restapi-example
│   ...
│   app.py
│   requirements.txt
│   ...

```

The main file is used to unify drivers, routes and services, in turn creates the application server.

Create a file  `app.py` in which the server of our application will be located.

```python

# app.py

"""Main app"""

# Retic
from retic import App as app

if __name__ == "__main__":
    # create a web server
    app.listen(
        hostname="localhost",
        port=1801,
    )

```

Our web server must be started with the following command:


```bash

python app.py

```
Visit the following link  [http://localhost:1801/](http://localhost:1801/) to see the result.

![alt text](../../static/img/api_rest_app.png "API REST")
