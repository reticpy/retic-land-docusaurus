---
id: settings
title: Configuración
sidebar_label: Configuración
description: Configuración de la aplicación
slug: /es/concepts/settings
---

## Clase Config

La [clase](https://retic.land/manual/es/glossary/#clase "Glosario de Términos") **Config** permite establecer valores en la aplicación que permiten ser utilizados en las diferentes secciones de la misma.

### Funciones

La [clase](https://retic.land/manual/es/glossary/#clase "Glosario de Términos") **Config** utiliza las siguientes funciones para la manipulación de su información.

#### set(_key: str_, _value: dict_)

Retic permite definir los valores de configuración para la aplicación de una forma más dinámica.

**Parámetros:**

- **key**: Es el nombre de la variable a asignar.

- **value**: El valor a asignar.

```python

# settings.py

# Retic
from retic import App as app

"""Asignar ruta de variables de entorno"""
app.env.read_env('.env.development', override=True)

"""Asignar variables de configuracion"""
app.config.set("default_port", 1801)

```

#### get(_key: str_, _default_value: dict_ = None, _callback: any_ = None)

Las variables de configuración pueden ser utilizadas en cualquier parte de la aplicación haciendo uso de la [instancia](https://retic.land/manual/es/glossary/#instancia "Glosario de Términos") `app`.

**Parámetros:**

- **key**: Es el nombre de la variable a buscar.

- **default_value**: Define el valor por defecto en caso de que la variable no exista.

- **callback**: Es la [función](https://retic.land/manual/es/glossary/#funci%C3%B3n "Glosario de Términos") que se ejecuta luego de obtener el valor.

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

#### from_object(*settings: dict*)

Establece la configuración basándose en un diccionario.

**Parámetros:**

- **settings**: Es un [objeto](https://retic.land/manual/es/glossary/#objeto "Glosario de Términos") de tipo diccionario el cual contiene la configuración.

```python

# settings.py

# Retic
from retic import App as app

"""Asignar ruta de variables de entorno"""
app.env.read_env('.env.development', override=True)

"""Crear diccionario de congfiguración"""
config = {
    u"default_port": 1801
}

"""Configuración basada en un objeto"""
app.config.from_object(config)

```

#### clear()

Se utiliza para borrar todas las variables de configuración, sin embargo, las variables de entorno no son eliminadas.

```python

# settings.py

# Retic
from retic import App as app

"""Asignar ruta de variables de entorno"""
app.env.read_env('.env.development', override=True)

"""Crear diccionario de congfiguración"""
config = {
    u"default_port": 1801
}

"""Configuración basada en un objeto"""
app.config.from_object(config)

"""Eliminar variables de configuracion"""
app.config.clear()

```

## Variables de entorno

Retic proporciona además un fácil acceso a las variables del sistema. Se utiliza la [clase](https://retic.land/manual/es/glossary/#clase "Glosario de Términos") `Env` de la biblioteca `environs` para definir sus rutas en la aplicación. Consulte la [documentación oficial](https://github.com/sloria/environs) para conocer todas las posibles combinaciones y la manera de acceder a las variables de entorno de la mejor manera.

### Funciones de la clase Env

#### env.read_env(*path: str* = None, _recurse: bool_ = True, _verbose: bool_ = False, _override: bool_)

Por defecto se buscan variables en el archivo `.env` en caso de que éste exista. Sin embargo, en algunas ocaciones es necesario tener más de un archivo de entorno. Esta [función](https://retic.land/manual/es/glossary/#funci%C3%B3n "Glosario de Términos") permite leer tantos archivos de entorno como se le indique.

```bash

# .env.development

#App
APP_HOSTNAME                    =localhost
APP_PORT                        =1801
APP_ENV                         =development

```

**Parámetros:**

- **path**: Directorio donde se encuentra el archivo de entorno.

- **recurse**: Realiza una busqueda de forma recursiva desde la raiz.

- **verbose**: Se utiliza para definir si se deben mostar las advertencias en caso de que un archivo no exista. Su valor predeterminado es `False`.

- **override**: Este sobreescribe las variables actuales en el sistema operativo. Su valor predeterminado es `False`.

```python

# settings.py

# Retic
from retic import App as app

"""Asignar ruta de variables de entorno"""
app.env.read_env('.env.development', override=True)

```

##### Tipos soportados

Por defecto Retic retornará el valor en formato `str`, sin embargo, es permitido realizar el casteo automático de las variables de entorno a un tipo específico. A continuación se presentan los posibles formatos de salida que se muestran al consultar una variable de entorno:

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

##### Uso básico

La busqueda de una variable de entorno se realiza por medio de su nombre, en caso de no existir, se puede asignar un valor por defecto, en el caso contrario devolverá una excepción que indicará que la variable no existe en el sistema.

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

# Agregar las rutas a la aplicación
app.use(router)

if __name__ == "__main__":
    # Create web server
    app.listen(
        # Obtener la variable de entorno APP_HOSTNAME en el formato por defecto (str)
        hostname=app.env("APP_HOSTNAME"),
        # Obtener la variable de entorno APP_PORT en formato númerico. De no existir, retorna 1801.
        port=app.env.int("APP_PORT", 1801),
    )

```
