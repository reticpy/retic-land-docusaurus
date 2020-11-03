---
id: request
title: Request
sidebar_label: Request
description: Request
slug: /es/api/request
---

## Clase Request

La [clase](https://retic.land/manual/es/glossary#clase "Glosario de Términos") **Request** representa la solicitud HTTP y contiene una biblioteca que ayuda a que las solicitudes sean mucho más simples. Contiene propiedades tales como [parámetros](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos"), cuerpo de la solicitud, encabezados de la petición, entre otras.

### Propiedades

Algunas propiedades son una implementación del directorio [ImmutableMultiDict](https://werkzeug.palletsprojects.com/en/1.0.x/datastructures/#werkzeug.datastructures.ImmutableMultiDict) e [ImmutableList](https://werkzeug.palletsprojects.com/en/1.0.x/datastructures/#werkzeug.datastructures.ImmutableList) para representar su valor.

#### access_route

Enlista cada dirección IP que interviene en la petición.

```python

# Valor actual de access_route
req.access_route: ImmutableList(['127.0.0.1'])

```

#### args

Enlista todos los [parámetros](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos") en la URL de la petición.

```python

# URL de la petición HTTP
# GET http://localhost:1801/files/123?queryparam=13344

# Valor actual de args
req.args: ImmutableMultiDict([('queryparam', '13344')])

```

Por defecto un `ImmutableMultiDict` que es retornado en esta [función](https://retic.land/manual/es/glossary/#funci%C3%B3n "Glosario de Términos") contiene funciones como `getlist`, `get`, `get_all` para interactuar con los [parámetros](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos") en la URL de una petición. Si necesitas más detalles puedes visitar la documentación oficial sobre esta clase [ImmutableMultiDict](https://werkzeug.palletsprojects.com/en/1.0.x/datastructures/#werkzeug.datastructures.ImmutableList).

#### base_url

Esta arroja la URL de la petición sin paramertros _querystring_.

```python

# Valor actual de base_url
req.base_url: 'http://127.0.0.1:1801/files/123'

```

#### body

Instancia de la [clase](https://retic.land/manual/es/glossary#clase "Glosario de Términos") `Body`. Contiene el cuerpo que conforma la petición.

```python

# Valor actual de body
req.body:
    type: 'form'
    body: ImmutableMultiDict([('filename', 'fullname')])

```

#### cookies

Enlista todas las cookies de la petición realizada.

```python

# Valor actual de cookies
req.cookies: ImmutableMultiDict([('cookie1', '123456')])

```

#### data

Contiene la data entrante de la petición en formato binario.

```python

# Valor actual de data
req.data: b'{\r\n    "filename":"name of the file"\r\n}'

```

#### environ

Entorno WSGI que es utilizado para extraer la información de la petición.

```python

# Valor actual de environ
req.environ: {'CONTENT_LENGTH': '39', 'CONTENT_TYPE': 'text/plain', 'HTTP_ACCEPT': '*/*', 'HTTP_ACCEPT_ENCODING': 'gzip, deflate, br', 'HTTP_CACHE_CONTROL': 'no-cache', 'HTTP_CONNECTION': 'keep-alive', 'HTTP_COOKIE': 'example1=123456', 'HTTP_HOST': 'localhost:1801', 'HTTP_USER_AGENT': 'PostmanRuntime/7.26.1', 'PATH_INFO': '/files/123', 'QUERY_STRING': 'queryparam=13344', 'RAW_URI': '/files/123?queryparam=13344', 'REMOTE_ADDR': 'localhost', ...}

```

#### files

Enlista todos los archivos de la petición HTTP. Cada valor es una instancia de la clase [FileStorage](https://werkzeug.palletsprojects.com/en/1.0.x/datastructures/#werkzeug.datastructures.FileStorage).

Cada elemento se comporta como un _file object_ reconocido por **Python**, con la diferencia de que también tiene una [función](https://retic.land/manual/es/glossary/#funci%C3%B3n "Glosario de Términos") `save()` que puede almacenar el archivo en un sistema de archivos.

```python

# Valor actual de files
req.files: ImmutableMultiDict([('files', <FileStorage: '200px-Flag_of_Spain.svg.png' ('image/png')>)])

```

#### form

Contiene todos los valores en un formulario de una petición del tipo: `application/x-www-form-urlencoded`.

```python

# Valor actual de form
req.form: ImmutableMultiDict([('size', '123456')])

```

#### full_path

Contiene la URL completa de la petición.

```python

# Valor actual de full_path
req.full_path: '/files/123?queryparam=13344'

```

#### headers

Enlista todos los encabezados de la petición.

```python

# Valor actual de headers
EnvironHeaders([('Cookie', 'cookie1=123456'), ('User-Agent', 'PostmanRuntime/7.26.1'), ('Accept', '*/*'), ('Cache-Control', 'no-cache'), ('Postman-Token', 'a0c82eb0-7864-472f-8991-5fce2c250554'), ('Host', 'localhost:1801'), ('Accept-Encoding', 'gzip, deflate, br'), ('Connection', 'keep-alive'), ('Content-Type', 'application/x-www-form-urlencoded'), ('Content-Length', '11')])

```

No existe diferencia entre mayúsculas y minúsculas.

```python

source = req.headers.get('source')
source = req.headers.get('Source')

# http://localhost:1810/downloads/files/3db7ce17ced111eab61ae454e894d9d6
# http://localhost:1810/downloads/files/3db7ce17ced111eab61ae454e894d9d6

```

Forma alterna la cual retornar una Excepción cuando la cabecera no existe:

```python

source = req.headers['source']
source = req.headers['Source']

# http://localhost:1810/downloads/files/3db7ce17ced111eab61ae454e894d9d6
# http://localhost:1810/downloads/files/3db7ce17ced111eab61ae454e894d9d6

```

#### host

Contiene el nombre del host y el puerto si el mismo está disponible.

```python

# URL de la petición HTTP
# GET http://localhost:1801/files/123?queryparam=13344

# Valor actual de host
req.host: 'localhost:1801'

```

#### method

Este es el [método](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") utilizado para la petición, por ejemplo: `GET`, `POST`, `DELETE` y `PUT`.

```python

# Valor actual de method
req.method: 'GET'

```

#### params

Objeto que contiene todos los [parámetros](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos") para la URL de la petición: `GET`, `POST`, `DELETE` y `PUT`.

```python

# URL de la petición HTTP
# GET http://localhost:1801/files/123?queryparam=13344

# Valor actual de params
req.params: {'id': '123'}

```

#### path

Contiene la ruta de acceso en la URL de la petición.

```python

# URL de la petición HTTP
# GET http://localhost:1801/files/123?queryparam=13344

# Valor actual de params
req.path: '/files/123'

```

#### retic

Es un diccionario que se utiliza para agregar valores personalizados a la petición y así compartirlos entre controladores. Utiliza las funciones `req.set()` y `req.get()` para manipular sus valores.

```python

# Asignar el objeto JSON con nombre app1
req.set('app1', {u"msg": "say hi!"})

# Valor actual de retic
req.retic: {'app1': {'msg': 'say hi!'}}

```

### Funciones

La [clase](https://retic.land/manual/es/glossary#clase "Glosario de Términos") Request utiliza las siguientes funciones para la manipulación de su información.

#### param(_key: str_, _default_value: any_ = None, _callback_ = None)

Esto devuelve el valor del parámetro con el nombre especificado.

`req.param(...)` busca en los [parámetros](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos") analizados como la **ruta URL**, el **cuerpo de la solicitud** y la **cadena de consulta**, todo en ese orden. Si no existe el valor en la solicitud, devolverá `None` o el valor por defecto especificado.

**Parámetros:**

- **key**: Nombre del parámetro a buscar.

- **default_value**: Valor por defecto si el parámetro no existe.

- **callback**: [Función](https://retic.land/manual/es/glossary/#funci%C3%B3n "Glosario de Términos") que se ejecuta luego de obtener el valor del párametro, puede ser `bool`, `int`, `str`, etc.

```python

# URL de la petición HTTP
# GET http://localhost:1801/files/123?queryparam=13344

# Imprimir el valor actual del parámetro id, o utilizar un valor por defecto
print(req.param('id', 'default_value', int))
print(req.param('id3')

# Salida: 123
# Salida: None

```

#### set(_key: str_, _value: any_ = None)

Asigna un [objeto](https://retic.land/manual/es/glossary/#objeto "Glosario de Términos") en el **diccionario retic** con un nombre específico. Se debe tener en cuenta que los nombres no distinguen entre mayúsculas o minúsculas, en el caso de que el nombre ya exista se sobreescribirá su valor y el código no será el esperado. En el caso de que el valor a asignar no exista se guardará el valor `None` por defecto.

**Parámetros:**

- **key**: Nombre del objeto a guardar.

- **value**: Valor con el que se guardará el objeto.

```python

# Asignar el objeto JSON con nombre app1
req.set('app1', {u"msg": "say hi!"})

```

#### get(_key: str_, _default_value: any_ = None)

Acá se retorna el valor de un [objeto](https://retic.land/manual/es/glossary/#objeto "Glosario de Términos") en el **diccionario retic** con un nombre en especifico. Nuevamente debe terner en cuenta que los nombres no distinguen entre mayúsculas o minúsculas. Si no existe un valor en la solicitud, éste devolverá `None` o el valor predeterminado por defecto que esté especificado.

**Parámetros:**

- **key**: Nombre del objeto a buscar.

- **default_value**: Valor por defecto si el objeto no existe.

```python

# Asignar el objeto JSON con nombre app1
req.set('app1', {u"msg": "say hi!"})

# Imprimir el valor actual de los parámetros, o utilizar un valor por defecto
print(req.get('app1'))
print(req.get('app2', 2233))

# Salida: {'msg': 'say hi!'}
# Salida: 2233

```

#### all_params()

Devuelve el valor de todos los [parámetros](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos") enviados en la solicitud junto con el diccionario retic combinado en un solo diccionario.

Incluye parámetros analizados como la **ruta URL**, el **cuerpo de la solicitud**, la **cadena de consulta** y el **diccionario retic**, todo en ese orden.

```python

# URL de la petición HTTP
# GET http://localhost:1801/files/123?queryparam=13344

# Imprimir todos los parámetros de la petición
print(req.all_params())

# Salida: {'id': '123', 'size': '123456', 'queryparam': '13344', 'app1': {'msg': 'say hi!'}}

```

### Otras propiedades y funciones

Retic hereda desde la [clase](https://retic.land/manual/es/glossary#clase "Glosario de Términos") `Request de Werkzeug` para la gestión de sus peticiones. Visita la documentación acerca de su clase [Request](https://werkzeug.palletsprojects.com/en/1.0.x/wrappers/#base-wrappers) para complementar la información que se encuentra acá mencionada.
