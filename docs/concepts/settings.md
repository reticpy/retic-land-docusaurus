---
id: settings
title: Setting
sidebar_label: Setting
description: Setting of the app.
slug: /concepts/settings
---

## Config class

the [class](https://retic.land/manual/glossary/#class "Glossary of Terms") **Config** allows you to set values in the application that allow them to be used in its different sections.

### Functions

the [class](https://retic.land/manual/glossary/#class "Glossary of Terms") **Config** uses the following functions to manipulate its information.

#### set(_key: str_, _value: dict_)

Retic allows you to define the configuration settings for your application in a more dynamic way.

**Parametros:**

- **key**: It is the name of the variable to assign.

- **value**: The value to assign.

```python

# settings.py

# Retic
from retic import App as app

"""Map environment variable path"""
app.env.read_env('.env.development', override=True)

"""Assign configuration variables"""
app.config.set("default_port", 1801)

```

#### get(_key: str_, _default_value: dict_ = None, _callback: any_ = None)

The configuration variables can be used in any part of the application using the app [instance](https://retic.land/manual/glossary/#instance "Glossary of Terms") `app`.

**Parameters:**

- **key**: It is the name of the variable to search.

- **default_value**: Defines the default value in case the variable does not exist.

- **callback**: is the [function](https://retic.land/manual/glossary/#function "Glossary of Terms") that is executed after obtaining the value.

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

# add the rutes of the app
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

#### from_object(*settings: dict*)

Sets the configuration based on a dictionary.

**Parameters:**

- **settings**: is a dictionary type [object](https://retic.land/manual/glossary/#object "Glossary of Terms") which contains the settings.

```python

# settings.py

# Retic
from retic import App as app

"""Map environment variable path"""
app.env.read_env('.env.development', override=True)

"""Create congfiguration dictionary"""
config = {
    u"default_port": 1801
}

"""Configuration based on an object"""
app.config.from_object(config)

```

#### clear()

It is used to clear all configuration variables, however environment variables are not removed.

```python

# settings.py

# Retic
from retic import App as app

"""Map environment variable path"""
app.env.read_env('.env.development', override=True)

"""Create congfiguration dictionaryn"""
config = {
    u"default_port": 1801
}

"""Configuration based on an object"""
app.config.from_object(config)

"""Delete configuration variables"""
app.config.clear()

```

## Environment Variables

Retic also provides easy access to system variables. The `Env` [class](https://retic.land/manual/glossary/#class "Glossary of Terms") from the `environs` library is used to define its routes in the app. see the [official documentation ](https://github.com/sloria/environs)for all possible combinations and how to access environment variables in the best way.

### Env class functions

#### env.read_env(*path: str* = None, _recurse: bool_ = True, _verbose: bool_ = False, _override: bool_)

By default, variables are searched in the .env file if it exists. However, sometimes it is necessary to have more than one environment file.  This [funtion](https://retic.land/manual/glossary/#function "Glossary of Terms") allows you to read as many environment files as you indicate.

```bash

# .env.development

#App
APP_HOSTNAME                    =localhost
APP_PORT                        =1801
APP_ENV                         =development

```

**Parameters:**

- **path**: Directory where the environment file is located.

- **recurse**: Perform a search recursively from the root.


- **verbose**: It is used to define if warnings should be shown in case a file does not exist. Its default value is`False`.

- **override**: This overrides the current variables in the operating system. Its default value is `False`.

```python

# settings.py

# Retic
from retic import App as app

"""Asignar ruta de variables de entorno"""
app.env.read_env('.env.development', override=True)

```

##### Tipos soportados

By default Retic will return the value in `str` format, however, it is allowed to automatically cast environment variables to a specific type. Following are the possible output formats that are displayed when querying an environment variable:

- env.str
- env.bool
- env.int
- env.float
- env.decimal
- env.list (accepts optional subcast keyword argument)
- env.dict (accepts optional subcast keyword argument)
- env.json
- env.datetime
- env.date
- env.timedelta (assumes value is an integer in seconds)
- env.url
- env.uuid
- env.log_level
- env.path (casts to a pathlib.Path)

##### basic use

The search for an environment variable is carried out by means of its name, if it does not exist, a default value can be assigned, otherwise it will return an exception indicating that the variable does not exist in the system.

```bash

# .env.development

#App
APP_HOSTNAME                    =localhost
APP_PORT                        =1801
APP_ENV                         =development

```

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

# add the rutes to the app.
app.use(router)

if __name__ == "__main__":
    # Create web server
    app.listen(
        # Get the environment variable APP_HOSTNAME in the default format (str)
        hostname=app.env("APP_HOSTNAME"),
        # Get the APP_PORT environment variable in numeric format. If it does not exist, it returns 1801.
        port=app.env.int("APP_PORT", 1801),
    )

```
