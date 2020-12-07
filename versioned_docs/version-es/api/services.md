---
id: services
title: Servicios
sidebar_label: Servicios
description: Servicios
slug: /api/services
---

Retic posee un gran conjunto de servicios para apoyarte en cierto tipo de funcionalidades necesarias para que tu aplicación funcione adecuadamente.

## Servicios de respuesta

Es importante definir un estandar de respuestas a las peticiones realizadas por el cliente, para el correcto mantenimiento de una aplicación. Retic recomienda seguir una estructura de 3 atributos.

```json
{
  "valid": bool,
  "msg": str,
  "data": dict
}
```

Donde:

- **valid**: Representa a una petición que se ha realizado correctamente cuando su valor es `True`, o en caso contrario donde contenga errores su valor es `False`.

- **msg**: Este es el mensaje que describe el resultado de la petición.

- **data**: Es la información de respuesta a la petición del cliente.

### success_response(*data: any* = None, *msg: str* = "")

Define la estructura de una respuesta para la petición del cliente en formato JSON e indica el hecho de que todo finalizó correctamente.

**Parámetros:**

- **data**: Información para ser enviada al cliente.

- **msg**: Es el mensaje que indica que la petición se completó correctamente.

```python

# Retic
from retic import Request, Response
from retic.services.responses import success_response

def upload(req: Request, res: Response):
    """Upload to Storage"""
    res.ok(success_response(
        data={u'msg': 'say hi!'},
        msg="The upload finishied."
    ))

```

A continuación se presentará el resulta de la petición en formato JSON:

```json
{
  "valid": true,
  "msg": "The upload finishied.",
  "data": {
    "msg": "say hi!"
  }
}
```

### error_response(*msg: str* = "")

Se utiliza para definir la estructura de una respuesta a una petición del cliente en formato JSON la cual contiene errores.

**Parámetros:**

- **msg**: Mensaje que indica que la petición no se completó correctamente debido a que contiene errores.

```python

# Retic
from retic import Request, Response
from retic.services.responses import error_response

def upload(req: Request, res: Response):

    """Return a error message."""
    return res.bad_request(
        error_response(
            "The param files is necesary."
        )
    )

```

A continuación se presenta el resultado de la petición en formato JSON.

```json
{
  "valid": false,
  "msg": "The param files is necesary."
}
```

## Servicios generales

Retic proporciona una gran variedad de servicios generalizados, con un enfoque destinado a la validación de los [parámetros](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos") obligatorios y otras funcionalidades.

### Servicios de URLs

#### urlencode(_url: str_)

Para esta [función](https://retic.land/manual/es/glossary/#funci%C3%B3n "Glosario de Términos") su uso suele ser conveniente cuando se codifica una cadena para usar parte de una URL para una consulta, como una forma conveniente de pasar variables a la siguiente página.

**Parámetros:**

- **url**: Esta es la URL a codificar.

```python

# Retic
from retic.services.general.urls import urlencode

def get_from_req(url):
    """Codificar la url"""
    url_encode = urlencode(url)

```

```sh
# Entrada
"http://example.com/"

# Salida
"http%3A%2F%2Fexample.com%2F"

```

#### slugify(_text: str_ = "")

Se utiliza para simplificar las cadenas feas o demasiado complejas en URL más amigables.

**Parámetros:**

- **text**: Texto destinado a simplificar, de tipo `str`.

```python

# Retic
from retic.services.general.urls import slugify

def get_slug_from_title(title):
    """Get slug from a title"""
    return slugify(title)

```

```sh
# Entrada
"This Alpha’s Pheromones Are Exploding"

# Salida
"this-alphas-pheromones-are-exploding"

```

### Servicios del Tiempo

#### sleep(_seconds: int_ = 0)

El [método](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") de tiempo Python sleep() suspende la ejecución por el número de segundos dado. El argumento puede ser un número de coma flotante(también llamado decimal) para indicar un tiempo de descanso más preciso.

**Parámetros:**

- **seconds**: Es el total de segundos que el programa estará en descanso o suspendido.

```python

# Retic
from retic.services.general.time import sleep

# Contantes
SLEEP_TIME=2

def download_from_url(url):
    """Dormir el programa durante un tiempo especifico"""
    sleep(SLEEP_TIME)

```

## Sericios de validación

Retic también ofrece la capacidad de validar ciertos requisitos en una petición de forma nativa. Por ejemplo, en el caso de que los [parámetros](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos") obligatorios en una petición sean válidos.

### validate_obligate_fields(*fields: any* = None)

La mayoría de las veces existen valores que son obligatorios. Retic ofrece el servicio `validate_obligate_fields(...)` el cual verifica si una lista de [parámetros](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos") obligatorios son validos.

**Parámetros:**

- **fields**: Es el diccionario que contiene todos los [parámetros](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos") que son obligatorios, estos valores pueden ser de tipo `list` o simples valores.

El siguiente ejemplo valida que exista el parametro `files` el cual se obtiene cuando se envía un archivo en una petición.

```python

# Retic
from retic import Request, Response

# Services
from retic.services.validations import validate_obligate_fields
from retic.services.responses import error_response

def upload(req: Request, res: Response):
    """Obtener una lsita desde la petición, si no existe, retorna una lista vacia por defecto.
    """

    _files = req.files.getlist('files') or list()

    """Validar si todos los campos obligatorios son validos"""
    _validate = validate_obligate_fields({
        u'files': _files,
        u'source': req.headers['source'] if "source" in req.headers else None
    })

    """Si existe algún campo invalido, retorna un mensaje de error y una respuesta de tipo 400 Bad request.
    """
    if _validate["valid"] is False:
        return res.bad_request(
            error_response(
                "The param {} is necesary.".format(_validate["error"])
            )
        )

```

## Servicios JSON

Son servicios utilizados para la manipulación de [objetos](https://retic.land/manual/es/glossary/#objeto "Glosario de Términos") del tipo JSON y su equivalente en otros formatos.

### jsonify(_object: any_)

Se usa para convertir un diccionario JSON a su equivalente en cadena de texto.

**Parámetros:**

- **object**: Es el objeto de respuesta del cliente, si el [objeto](https://retic.land/manual/es/glossary/#objeto "Glosario de Términos") es "str", se devuelve su valor sin transformación, de lo contrario crea una representación del objeto en formato JSON.

```python

# Retic
from retic import Request, Response
from retic.services.general.json import jsonify

def upload(req: Request, res: Response):
    text = jsonify({u'msg': 'say hi!'})

```

A continuación se presentará el resultado de la petición en una cadena de texto.

```sh

text: '{"msg": "say hi!"}'

```

### parse(_content: str_)

Deserializar (una [instancia](https://retic.land/manual/es/glossary/#instancia "Glosario de Términos") de str, bytes o bytearray que contiene un documento JSON) a un [objeto](https://retic.land/manual/es/glossary/#objeto "Glosario de Términos") Python.

**Parámetros:**

- **object**: Es el contenido de type str, bytes o bytearray que contiene un JSON válido.

```python

# Retic
from retic import Request, Response
from retic.services.general.json import parse

def upload(req: Request, res: Response):
    text_json = parse('{"msg": "say hi!"}')

```

A continuación se presenta el resultado de la petición en un formato JSON.

```sh

text_json: {"msg": "say hi!"}

```
