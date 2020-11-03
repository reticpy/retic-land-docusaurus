---
id: settings
title: "Archivo de configuración"
sidebar_label: "Archivo de configuración"
description: "Archivo de configuración"
slug: /es/tutorial/settings
---

_Estructura de carpetas utilizada:_

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
|
└───services
│   │
│   └───users
│       │   users.py
│       │   ...
│   ...
│   .env.development
│   .env.staging
│   .env.production
│   app.py
│   requirements.txt
│   settings.py

```

Muchas veces es necesario declarar valores constantes al inicio de cada archivo `.py`. Estos pueden depender de otras variables dentro de la aplicación, los valores que se obtienen del archivo de variables de entorno (.env) son un ejemplo de lo dicho anteriormente.

Por esta razón, Retic recomienda utilizar un archivo `settings.py`, en el cual se importen todas éstas variables y sean agregadas a la configuración de Retic. De ésta manera se podrán utilizar dentro de toda la aplicación.

Crea un archivo `settings.py` y agrega la carga del archivo de variables de entorno de la siguiente manera:

```python

# settings.py

# Retic
from retic import App as app

"""Set environment file path"""
app.env.read_env('.env.development', override=True)

```

Por defecto, la [función](https://retic.land/manual/es/glossary/#funci%C3%B3n "Glosario de Términos") `read_env()` realiza una busqueda del archivo `.env`, sin embargo, la ruta del archivo podría ser diferente. Se recomienda cargar las variables desde el sistema directamente y en un entorno de producción.

Crea el archivo de variables de entorno de desarrollo `.env.development`.

```bash

# .env.development

#App
APP_HOSTNAME                    =localhost
APP_PORT                        =1801
APP_ENV                         =development

```

Luego crea el archivo de variables de entorno de staging `.env.staging`.

```bash

# .env.staging

#App
APP_HOSTNAME                    =localhost
APP_PORT                        =1801
APP_ENV                         =staging

```

Finalmente crea el archivo de variables de entorno de producción `.env.production`.

```bash

# .env.production

#App
APP_HOSTNAME                    =localhost
APP_PORT                        =1801
APP_ENV                         =production

```

Por último actualiza el archivo principal `app.py` y agrega el archivo de configuración:

```python

# app.py

"""Main app"""

# Retic
from retic import App as app

# Settings
import settings

# Routes
from routes import router

# Agregar las rutas a la aplicación
app.use(router)

if __name__ == "__main__":
    # Crear servidor web
    app.listen(
        # Obtener la variable de entorno APP_HOSTNAME en el formato por defecto (str)
        hostname=app.env("APP_HOSTNAME"),
        # Obtener la variable de entorno APP_PORT en formato númerico. De no existir, retorna 1801.
        port=app.env.int("APP_PORT", 1801),
    )


```

Si estás buscando más información puedes visitar la sección de [configuración](../concepts/settings).
