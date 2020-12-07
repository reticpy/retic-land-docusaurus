---
id: response
title: Response
sidebar_label: Response
description: Response
slug: /api/response
---

## Clase Response

La [clase](https://retic.land/manual/es/glossary#clase "Glosario de Términos") **Response** representa la respuesta a una petición HTTP realizada por un cliente.

### Propiedades

A continuación se presentan las principales propiedades de la [clase](https://retic.land/manual/es/glossary#clase "Glosario de Términos") `Response` y su funcionalidad:

#### default_mimetype

Todas las respuestas tendrán por defecto un mimetype `text/plain`.

```python

# Valor actual de default_mimetype
res.default_mimetype: 'text/plain'

```

#### default_status

Todas las respuestas tienen por defecto un codigo de estado de respuesta `status 200`.

```python

# Valor actual de default_status
res.default_status: 200

```

#### headers

Esta es la lista de todas las cabeceras o encabezados de la respuesta. Por defecto, todas las peticiones tienen la cabecera. `'content-type': 'application/json'`

```python

# Valor actual de headers
Headers([('content-type', 'application/json'), ('Access-Control-Allow-Methods', 'True'), ('Access-Control-Allow-Credentials', 'GET,POST,DELETE,PUT,OPTIONS'), ('Access-Control-Allow-Origin', '*'), ('Access-Control-Allow-Headers', 'Content-Type'), ('Access-Control-Expose-Headers', 'Content-Type')])

```

#### status

Es el código de estado de la respuesta en formato de cadena de texto.

```python

# Valor actual de status
res.status: '200 OK'

```

#### status_code

Este es el código de estado de la respuesta en un formato númerico.

```python

# Valor actual de status_code
res.status_code: 200

```

### Funciones

La [clase](https://retic.land/manual/es/glossary#clase "Glosario de Términos") **Response** utiliza las siguientes funciones para la manipulación de su información:

#### bad_request(*content: any* = "")

Este [método](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") tendrá como respuesta un _400 Bad Request_ a la petición del cliente, esto es para indicar que la solicitud no es válida.

Esto generalmente significa que la solicitud contenía [parámetros](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos") o cabeceras no válidas, o que intentó hacer algo que para la lógica de su petición no es admitica.

**Parámetros:**

- **content**: Esta es la información que está almacenada para ser enviada al cliente, puede ser en forma de un mensaje, un diccionario, entre otras cosas similares. En el caso de que no exista, se enviará un mensaje de estado basandose en el código del mismo estado.

```python

# Retic
from retic import Request, Response
from retic.services.responses import error_response
from retic.services.validations import validate_obligate_fields

def upload(req: Request, res: Response):

    """Revisar que todos los parametros obligatorios sean validos"""
    _validate = validate_obligate_fields({
        u'files': _files
    })

    if _validate["valid"] is False:
        return res.bad_request(
            error_response(
                "The param {} is necesary.".format(_validate["error"])
            )
        )

```

```sh

# Salida:
{
    "valid": false,
    "msg": "The param files is necesary."
}

```

#### forbidden(_content: any_ = "")

Este [método](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") se utiliza para enviar una respuesta _403 forbidden_ al cliente, indicando que una solicitud no está autorizada.

Esto generalmente significa que el agente de usuario intentó hacer una "acción" para la cual no tenía ningún tipo de autorización para hacerla, algo como cambiar la contraseña de otro usuario caería en una de éstas acciones que normalmente no están autorizadas.

**Parámetros:**

- **content**: Información destinada al cliente en forma de mensaje, diccionario, entre otros. en el caso de que exista, se enviará un mensaje de estado basado en el código del mismo estado.

```python

# Retic
from retic import Request, Response
from retic.services.responses import error_response

# Services
from services.users.users as users

def login(req: Request, res: Response):

    """Revisar que todos los parametros obligatorios sean validos"""
    _user = users.login({
        u'username': "user1",
        u'password': "123",
    })

    if _user["valid"] is False:
        return res.forbidden(
            error_response("User is invalid.")
        )

```

```sh

# Salida:
{
    "valid": false,
    "msg": "User is invalid."
}

```

#### not_found(*content: any* = "")

Este [método](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") se utiliza para enviar una respuesta _404 not_found_.

Cuando se llama manualmente desde el código de su aplicación, este [método](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") es normalmente utilizado para indicar que el cliente intentó encontrar, actualizar o eliminar algo que no existe.

**Parámetros:**

- **content**: Información para ser enviada al cliente en forma de mensaje, diccionario, entre otros. En el caso de que no exista, se enviará un mensaje de estado basado en el código del estado.

```python

# URL de la petición HTTP
# GET: http://localhost:1801/folders/86698adcb9b711eaa7524c0082ae1a80

# Retic
from retic import Request, Response

# Services
from services.files.files as files

def get_by_folder(req: Request, res: Response):
    """Obtener archivos en base a su directorio"""
    _files_db = files.get_all_by_folder_db(
        req.param("folder")
    )

    """Revisar si se encontró el folder, caso contrario, retornar un error."""
    if _files_db['valid'] is False:
        res.not_found(_files_db)
    else:
        res.ok(_files_db)

```

```sh

# Salida:
{
    "valid": false,
    "msg": "Folder not found."
}

```

#### ok(_content: dict_ = None)

Este [método](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") se utiliza para enviar una respuesta _200 OK_ al cliente.

Esto significa que la petición del cliente ha sido aceptada.

**Parámetros:**

- **content**: Información para ser enviada al cliente como un mensaje, un diccionario, entre otros. En caso de que no exista, se enviará un mensaje de estado basado en el código del estado.

```python

# URL de la petición HTTP
# GET: http://localhost:1801/folders/77698adcb9b711eaa7524c0082ae1a80

#Retic
from retic import Request, Response

# Services
from services.files.files as files

def get_by_folder(req: Request, res: Response):
    """Obtener archivos en base a su directorio"""
    _files_db = files.get_all_by_folder_db(
        req.param("folder")
    )

    """Revisar si se encontró el folder, caso contrario, retornar un error."""
    if _files_db['valid'] is False:
        res.not_found(_files_db)
    else:
        res.ok(_files_db)

```

```sh

# Salida:
{
    "valid": true,
    "msg": "Files found.",
    "data": {
        "success": [
            {
                "mimetype": "image/png",
                "filename": "200px-Flag_of_Spain.svg.png",
                "created_at": "2020-06-28 22:20",
                "cloud": "87PMm6OqszntRW3EyvVEbExRGOlpdQBay",
                "parent": "981PKTP0_qmfuAtFjbvF1bU6uiUv8UERs",
                "size": 4880,
                "extension": "png",
                "file": 1
            }
        ],
        "code": "78698adcb9b711eaa7524c0082ae1a90",
        "description": "",
        "created_at": "2020-06-28 22:20",
        "parent": null
    }
}

```

#### server_error(*content: any* = "")

Este [método](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") se utiliza para enviar una respuesta _500 Server error_ al cliente, indicando que ocurrió algún tipo de error en el servidor

**Parámetros:**

- **content**: Información para enviarse al cliente como un mensaje, un diccionario, entre otros. Si no existe, se enviará un mensaje de estado basado en el código del estado.

```python

#Retic
from retic import Request, Response

def undefined(req: Request, res: Response):
    res.server_error(
        error_response("Controller is invalid.")
    )

```

```sh

# Salida:
{
    "valid": false,
    "msg": "Controller is invalid."
}

```

#### send(_content: any_ = "")

Envía una respuesta en cadena con un formato(XML, CSV, texto plano), respuestas en formato JSON, entre otros. Se recomienda su uso en el caso de que se necesite enviar una respuesta de éxito al cliente con un codigo de estado diferente de 200.

Este [método](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") se utiliza en la implementación subyacente de la mayoría de los otros métodos de respuesta de terminal.

**Parámetros:**

- **content**: Información para ser enviada al cliente en forma de mensaje, diccionario, entre otros. En el caso de que no exista, se enviará un mensaje de estado basado en el código del mismo estado.

```python

#Retic
from retic import Request, Response

def say_hi(req: Request, res: Response):

    return res.send("Hi!")

```

```sh

# Salida:
Hi!

```

#### set_headers(*headers: dict*, *value: str* = None)

Establece cabeceras o encabezados de respuesta con valores especificos.

Alternativamente, se puede pasar un [objeto](https://retic.land/manual/es/glossary/#objeto "Glosario de Términos") que contenga cabeceras para configurar múltiples valores a la vez, donde las claves son los nombres de las cabeceras y los valores correspondientes son los valores deseados.

**Parámetros:**

- **headers**: Puede ser de tipo `dict`, para representar un [objeto](https://retic.land/manual/es/glossary/#objeto "Glosario de Términos") de cabeceras que se agregarán a las cabeceras actuales. Si es del tipo `str` será utilizado para acceder a una cabecera en específico. Cualquier otro tipo de formato provocará una excepción de error.

- **value**: Este es el valor que se asignará a la cabecera especificada. Por defecto tiene un valor `None` especificado.

```python

#Retic
from retic import Request, Response

def say_hi(req: Request, res: Response):

    res.set_headers('content-type', "text/plane")

    res.ok({u"msg": "say hi!"})

```

```sh

# Salida:
{"msg": "say hi!"}

## Cabeceras de la respuesta
content-type: text/plane

```

#### set_status(*code: int*)

Es utilizado para establecer el código de estado para la respuesta HTTP.

**Parámetros:**

- **code**: Es el número que representa el código de estado de la respuesta HTTP.

```python

#Retic
from retic import Request, Response

def upload(req: Request, res: Response):

    res.set_status(201).send({u"msg": "file created!"})

```

```sh

# Salida:
{
    "msg": "file created!"
}

## Código de estado
201 Created

```

#### redirect(_new_url: str_)

Esta es utilizada para redirigir a otra url. Utiliza redirección permanente con código de estado 308.

**Parámetros:**

- **new_utl**: URL a redirigir.

```python

#Retic
from retic import Request, Response

def upload(req: Request, res: Response):

    return res.redirect("http://example.com/")

```

```sh

## Código de estado
308 Permanent Redirect
...

```

### Otras propiedades y funciones

Retic hereda de la [clase](https://retic.land/manual/es/glossary#clase "Glosario de Términos") `Response de Werkzeug` para la gestión de las respuestas de peticiones, visita la documentación acerca de su clase [Response](https://werkzeug.palletsprojects.com/en/1.0.x/wrappers/#werkzeug.wrappers.Response) para complementar la información aquí mencionada.
