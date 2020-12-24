---
id: app
title: Principal file
sidebar_label: Principal file
description: Principal file of the app
slug: /concepts/app
---


## App class

The [class](https://retic.land/manual/glossary/#class "Glossary of Terms") **App** contains the principal [instance](https://retic.land/manual/glossary/#instance "Glossary of Terms") of the app.

**Parameters:**

- **env**: They are the application environment variables.

### Properties
#### apps

Contains references to applications such as: external applications, among others.

```python

# apps/urls.py

# Retic
from retic import App as app

"""Define other apps"""
BACKEND_EXAMPLE= {
    u"base_url": app.config.get('APP_BACKEND_EXAMPLE'),
    u"users": "/users",
}

"""Creates the reference object of the apps"""
APP_BACKEND = {
    u"example": BACKEND_EXAMPLE,
}

"""Add the applications to Retic"""
app.use(APP_BACKEND, "backend")

```

The above code saves references to external applications used in the application. Below is how to obtain the values ​​of this.

```python

# services\users\users.py

"""Services for the user controller"""

# Retic
from retic import App as app

# Requests
import requests

# Constants
URL_USERS = app.apps['backend']['example']['base_url'] + \
    app.apps['backend']['example']['users']

```

#### config

It is used to save the configuration of the application. See [settings](./settings) for more datails.

#### router

In the [instance](https://retic.land/manual/glossary/#instance "Glossary of Terms") of the [class](https://retic.land/manual/glossary/#class "Glossary of Terms") [Router](./routing).

### Functions

#### use(_item: any_, _name: str_ = "")

It is the configuration of the middleware or the information exchange logic of the application, and it allows importing other configurations such as application paths.

**Parameters:**

- **item**: It is the element to be imported into the application. If it's type **Router** it will be restored in the **router** property of the app. Otherwise it is stored in the  **apps** property.

- **name**: Specifies the name of the element to save.

```python

# apps/urls.py

# Retic
from retic import App as app

"""Defines others apps."""
BACKEND_EXAMPLE= {
    u"base_url": app.config.get('APP_BACKEND_EXAMPLE'),
    u"users": "/users",
}

"""Creates the reference object of the apps"""
APP_BACKEND = {
    u"example": BACKEND_EXAMPLE,
}

"""Add the applications to Retic"""
app.use(APP_BACKEND, "backend")

```

#### application(environ, start_response)

It is an application used to send a response to customer requests. It is also used in application deployments with  [WSGI](https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface).

**Parameters:**

- **environ**: define the[Request](../api/request) of the request.

- **start_response**: Define the [Response](../api/response) of the request.

```python

# app.py

"""Main app"""

# Retic
from retic import App as app

# Settings
import settings

# Apps
from apps import urls

# Routes
from routes import router

# Add the rutes of the app.
app.use(router)


def application(req, res):
    """Despliegue de la aplicación

    Interface entre WSGI y la aplicación, utiliza passenger_wsgi.py
    """
    return app.application(req, res)


if __name__ == "__main__":
    # Create web server
    app.listen(
        # Get the environment variable APP_HOSTNAME in the format by default (str)
        hostname=app.env("APP_HOSTNAME"),
        # Get the environment variable APP_PORT in numeric format. if it doesn't exist, returns 1801.
        port=app.env.int("APP_PORT", app.config.get("default_port"))
    )

```

#### clear()

Restart the application to its initial state, erasing all the settings, routes and apps.

```python

# app.py

"""Main app"""

# Retic
from retic import App as app

# Settings
import settings

# Apps
from apps import urls

# Routes
from routes import router

# Delete previous information in the application
app.clear()

# Add the routes to the application
app.use(router)

if __name__ == "__main__":
    # Create web server
    app.listen(
        # Get the environment variable APP_HOSTNAME in the format by default n(str)
        hostname=app.env("APP_HOSTNAME"),
        # Get the environment variable APP_PORT in numeric format. If it doesn't exist, returns 1801.
        port=app.env.int("APP_PORT", app.config.get("default_port"))
    )

```

#### listen(_hostname: str_ = "localhost", _port: int_ = 1801, _application: any_ = None, _use_reloader: bool_ = False, _use_debugger: bool_ = False, _use_evalex: bool_ = True, _extra_files: any_ = None, _reloader_interval: int_ = 1, _reloader_type: str_ = 'auto', _threaded: bool_ = False, _processes: int_ = 1, _request_handler: any_ = None, _static_files: any_ = None, _passthrough_errors=False_, _ssl_context: any_ = None)

Create a web server based on configuration [parameters](https://retic.land/manual/glossary/#parameters "Glossary of Terms") 

**Parameters:**

- **environ**: dfines the [Request](../api/request) of the request.

- **hostname**: Defines the host to bind, for example `localhost`. If it start with `unix://` a Unix socket is used instead of  TCP type.
- **port**: Server port. Ecample: `8080`.
- **application**: App WSGI to run.
- **use_reloader**: Automatically restart the server in case changes are made to the application.
- **use_debugger**: Creates the server in debugger mode for error detection.
- **use_evalex**: Enables evaluation of application exceptions.
- **extra_files**: It is a list of files to be loaded at the start of the server. For example, an extra server configuration.
- **reloader_interval**: Assigns the specified server restart interval in seconds.
- **reloader_type**: It is the reboot type, by default it uses automatic detection. Other values: `stat` y `watchdog`.
- **threaded**: It is used to isolate requests in individual threads.
- **processes**: If it is greater than 1, it will handle each request in a new process until it reaches the maximum number of concurrent processes defined.
- **request_handler**: This is an optional parameter that can be used to override the default Request [class](https://retic.land/manual/glossary/#class "Glossary of Terms") **Request**
- **static_files**: It is a list or dictionary of paths for static files.
- **passthrough_errors**: It is used to disable exception handling, which means that the server will stop working when an error occurs.
- **ssl_context**: it is a SSL context for the connection. It can be a class `ssl.SSLContext`, a [tupla](https://retic.land/manual/glossary/#tupla "Glossary of Terms") with the`(cert_file, pkey_file)` format, a string or a sequence of characters ` 'adhoc'`, if the server should create one automatically, or `None` to disable SSL (which is used by default)
```python

# app.py

"""Main app"""

# Retic
from retic import App as app

# Settings
import settings

# Apps
from apps import urls

# Routes
from routes import router

# Add the app rutes
app.use(router)

if __name__ == "__main__":
    # Create web server
    app.listen(
        # Get the environment variable APP_HOSTNAME in the default format (str)
        hostname=app.env("APP_HOSTNAME"),
        # Get the APP_PORT environment variable in numeric format. If it does not exist, it returns 1801.
        port=app.env.int("APP_PORT", app.config.get("default_port"))
    )

```
