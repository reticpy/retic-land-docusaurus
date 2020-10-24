---
id: app
title: Archivo principal
sidebar_label: Archivo principal
description: Archivo principal de la Aplicación
slug: /es/concepts/app
---


## Clase App

La clase **App** contiene la instancia principal de la aplicación.

**Parámetros:**

- **env**: Son las variables de entorno de la aplicación.

### Propiedades

#### apps

Contiene las referencias a las aplicaciones como: aplicaciones externas, entre otras.

```python

# apps/urls.py

# Retic
from retic import App as app

"""Define otras aplicaciones"""
BACKEND_EXAMPLE= {
    u"base_url": app.config.get('APP_BACKEND_EXAMPLE'),
    u"users": "/users",
}

"""Crea el objeto referencia de las apps"""
APP_BACKEND = {
    u"example": BACKEND_EXAMPLE,
}

"""Agrega las aplicaciones a Retic"""
app.use(APP_BACKEND, "backend")

```

El codigo anterior guarda la referencias a las aplicaciones externas utilizadas en la aplicación. A continuación se muestra como obtener los valores de esta.

```python

# services\users\users.py

"""Servicios para el controlador de usuarios"""

# Retic
from retic import App as app

# Requests
import requests

# Constants
URL_USERS = app.apps['backend']['example']['base_url'] + \
    app.apps['backend']['example']['users']

```

#### config

Es utilizada para guardar la configuración de la apliacción. Ver [Configuración](./settings) para más detalles.

#### router

Es la instancia de la clase [Router](./routing).

### Funciones

#### use(_item: any_, _name: str_ = "")

Es la configuración de los middlewares o las lógicas de intercambio de información de la apliacción, y permite importar otras configuraciones como rutas de acceso de la aplicación.

**Parámetros:**

- **item**: Es el elemento que se va a importar a la apliación. Si es de tipo **Router** será almacenada en la propiedad **router** de la aplicación. En caso contrario se almancena en la propiedad **apps**

- **name**: Especifica el nombre del elemento a guardar.

```python

# apps/urls.py

# Retic
from retic import App as app

"""Define otras aplicaciones"""
BACKEND_EXAMPLE= {
    u"base_url": app.config.get('APP_BACKEND_EXAMPLE'),
    u"users": "/users",
}

"""Crea el objeto referencia de las apps"""
APP_BACKEND = {
    u"example": BACKEND_EXAMPLE,
}

"""Agrega las aplicaciones a Retic"""
app.use(APP_BACKEND, "backend")

```

#### application(environ, start_response)

Es una aplicación utilizada para enviar una respuesta a las peticiones del cliente. También es utilizada en despliegues de la aplicación con [WSGI](https://en.wikipedia.org/wiki/Web_Server_Gateway_Interface).

**Parámetros:**

- **environ**: Define el [Request](../api/request) de la petición.

- **start_response**: Define el [Response](../api/response) de la petición.

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

# Agregar las rutas a la aplicación
app.use(router)


def application(req, res):
    """Despliegue de la aplicación

    Interface entre WSGI y la aplicación, utiliza passenger_wsgi.py
    """
    return app.application(req, res)


if __name__ == "__main__":
    # Create web server
    app.listen(
        # Obtener la variable de entorno APP_HOSTNAME en el formato por defecto (str)
        hostname=app.env("APP_HOSTNAME"),
        # Obtener la variable de entorno APP_PORT en formato númerico. De no existir, retorna 1801.
        port=app.env.int("APP_PORT", app.config.get("default_port"))
    )

```

#### clear()

Reinicia la aplicación a su estado inicial, borrando toda la configuración, las rutas y las apps.

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

# Eliminar información previa en la aplicación
app.clear()

# Agregar las rutas a la aplicación
app.use(router)

if __name__ == "__main__":
    # Create web server
    app.listen(
        # Obtener la variable de entorno APP_HOSTNAME en el formato por defecto (str)
        hostname=app.env("APP_HOSTNAME"),
        # Obtener la variable de entorno APP_PORT en formato númerico. De no existir, retorna 1801.
        port=app.env.int("APP_PORT", app.config.get("default_port"))
    )

```

#### listen(_hostname: str_ = "localhost", _port: int_ = 1801, _application: any_ = None, _use_reloader: bool_ = False, _use_debugger: bool_ = False, _use_evalex: bool_ = True, _extra_files: any_ = None, _reloader_interval: int_ = 1, _reloader_type: str_ = 'auto', _threaded: bool_ = False, _processes: int_ = 1, _request_handler: any_ = None, _static_files: any_ = None, _passthrough_errors=False_, _ssl_context: any_ = None)

Crea un servidor web basado en parametros de configuracion.

**Parámetros:**

- **environ**: Define el [Request](../api/request) de la petición.

- **hostname**: Define el host a enlazar, por ejemplo `localhost`. Si inicia con `unix://` se utiliza un socket de Unix en lugar de un socket de tipo TCP.
- **port**: Puerto del servidor. Ejemplo: `8080`.
- **application**: Aplicación WSGI a ejecutar.
- **use_reloader**: Reinicia el servidor automáticamente en caso de que se realicen cambios a la aplicación.
- **use_debugger**: Crea el servidor en modo debugger para la detección de errores.
- **use_evalex**: Habilita la evaluación de excepsiones de la aplicación.
- **extra_files**: Es una lista de archivos para ser cargados al inicio del servidor. Por ejemplo, una configuración extras del servidor.
- **reloader_interval**: Asigna el intervalo de reinico del servidor especificado en segundos.
- **reloader_type**: Es del tipo de reinicio, por defecto utiliza la detección automatica. Otros valores: `stat` y `watchdog`.
- **threaded**: Es utilizado para aislar las peticiones en hilos individuales.
- **processes**: En caso de ser mayor a 1, manejará cada solicitud en un nuevo proceso hasta llegar al número máximo de procesos concurrentes definidos.
- **request_handler**: Se trata de un parámetro opcional que puede ser utilizado para anular la clase **Request** predeterminada.
- **static_files**: Es una lista o diccionario de rutas para archivos estáticos.
- **passthrough_errors**: Es usado para deshabilitar el manejo de excepciones, lo cual significa que el servidor dejará de funcionar cuando suceda un error.
- **ssl_context**: Es un contexto SSL para la conexión. Puede ser una clase `ssl.SSLContext`, una tupla con el formato`(cert_file, pkey_file)`, una cadena o secuencia de carácteres ` 'adhoc'`, si el servidor debe crear uno automáticamente, o `None` para deshabilitar SSL (el cual se usa por defecto).

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

# Agregar las rutas a la aplicación
app.use(router)

if __name__ == "__main__":
    # Create web server
    app.listen(
        # Obtener la variable de entorno APP_HOSTNAME en el formato por defecto (str)
        hostname=app.env("APP_HOSTNAME"),
        # Obtener la variable de entorno APP_PORT en formato númerico. De no existir, retorna 1801.
        port=app.env.int("APP_PORT", app.config.get("default_port"))
    )

```
