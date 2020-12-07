---
id: services
title: Services
sidebar_label: Services
description: Services
slug: /api/services
---

Retic has a large set of services to support you in certain types of functionalities necessary for your application to function properly.

## Response Services

It is important to define a standard of responses to the requests made by the client, for the correct maintenance of an application. Retic recommends following a 3-attribute structure.

```json
{
  "valid": bool,
  "msg": str,
  "data": dict
}
```

where:

- **valid**: Represents a request that has been carried out correctly when its value is `True`,or otherwise where it contains errors, its value is`False`.

- **msg**: This is the message that describes the result of the request.

- **data**: Is the response informatios of que client's request. 

### success_response(*data: any* = None, *msg: str* = "")

Defines the structure of a response for the client's request in JSON format and indicates the fact that everything completed successfully.

**Parameters:**

- **data**: Information to send to the client.

- **msg**: This message indicates that the request is correctly complete.  

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


The result of the request in JSON format will be presented below:

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

It's used to define the structure of a response to a client request in JSON format which contains errors.

**Parameters:**

- **msg**: Message that indicates that the request did not complete correctly because it contains errors.

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

The following is the result of the request in JSON format.

```json
{
  "valid": false,
  "msg": "The param files is necesary."
}
```

## General services

Retic provides a wide variety of generalized services, with an approach aimed at validating mandatory [parameters](https://retic.land/manual/glossary/#par%C3%A1metros "Glosario de Términos") and other functionalities.

### services of the URLs

#### urlencode(_url: str_)

for this [function](https://retic.land/manual/glossary/#funci%C3%B3n "Glosario de Términos") its use is usually convenient when encoding a string to use part of a URL for a query, as a convenient way to pass variables to the next page.

**Parameters:**

- **url**: This is the URL to encode.

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

It's used to simplify ugly or too complex strings in friendlier URLs.

**Parameterss:**

- **text**: Text intended to simplify, of type `str`.

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

### Services of Time

#### sleep(_seconds: int_ = 0)

The [method](https://retic.land/manual/glossary#m%C3%A9todo "Glosario de Términos") Time of Python sleep() suspends execution for the given number of seconds. The argument can be a floating point number (also called a decimal) to indicate a more precise rest time.

**Parameters:**

- **seconds**: It's the total number of seconds that the program will be in rest or suspended.

```python

# Retic
from retic.services.general.time import sleep

# Contantes
SLEEP_TIME=2

def download_from_url(url):
    """Dormir el programa durante un tiempo especifico"""
    sleep(SLEEP_TIME)

```

## Validation Services

Retic also offers the ability to validate certain requirements in a request natively. For example, in the case that the mandatory [parameters](https://retic.land/manual/glossary/#par%C3%A1metros "Glosario de Términos") in a request are valid.

### validate_obligate_fields(*fields: any* = None)

Most of the time there are values that are required. Retic offers the `validate_obligate_fields(...)`service which checks if a list of mandatory [parameters](https://retic.land/manual/glossary/#par%C3%A1metros "Glosario de Términos") are valid.

**Parameters:**

- **fields**: It's the glosary that contains the [parameters](https://retic.land/manual/glossary/#par%C3%A1metros "Glosario de Términos") that are required, these values ​​can be of type list or simple values.

The following example validates that the `files` parameter exists, which is obtained when a file is sent in a request.

```python

# Retic
from retic import Request, Response

# Services
from retic.services.validations import validate_obligate_fields
from retic.services.responses import error_response

def upload(req: Request, res: Response):
    """Get a list from the request, if it doesn't exist, it returns an empty list by default.
    """

    _files = req.files.getlist('files') or list()

    """Validate if all required fields are valid"""
    _validate = validate_obligate_fields({
        u'files': _files,
        u'source': req.headers['source'] if "source" in req.headers else None
    })

    """If there is an invalid field, it returns an error message and a 400 Bad request response.
    """
    if _validate["valid"] is False:
        return res.bad_request(
            error_response(
                "The param {} is necesary.".format(_validate["error"])
            )
        )

```

## JSON Services

They are services used for the manipulation of [objects](https://retic.land/manual/glossary/#objeto "Glosario de Términos") of the JSON type and its equivalent in other formats.

### jsonify(_object: any_)

It is used to convert a JSON dictionary to its equivalent in a text string.

**Parameters:**

- **object**: it's the object of response of the client, if the [object](https://retic.land/manual/glossary/#objeto "Glosario de Términos") is "str", its value is returned without transformation, otherwise it creates a representation of the object in JSON format.

```python

# Retic
from retic import Request, Response
from retic.services.general.json import jsonify

def upload(req: Request, res: Response):
    text = jsonify({u'msg': 'say hi!'})

```

Next, the result of the request will be presented in a text string.

```sh

text: '{"msg": "say hi!"}'

```

### parse(_content: str_)

Deserialize (an [instance](https://retic.land/manual/glossary/#instancia "Glosario de Términos") of str, bytes or bytearray that contains a JSON)document in an [object](https://retic.land/manual/glossary/#objeto "Glosario de Términos") Python.

**Parameters:**

- **object**: It's the content of type str, bytes or bytearray that contains a valid JSON.

```python

# Retic
from retic import Request, Response
from retic.services.general.json import parse

def upload(req: Request, res: Response):
    text_json = parse('{"msg": "say hi!"}')

```

The following is the result of the request in a JSON format.

```sh

text_json: {"msg": "say hi!"}

```
