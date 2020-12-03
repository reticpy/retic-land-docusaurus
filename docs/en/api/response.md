---
id: response
title: Response
sidebar_label: Response
description: Response
slug: /es/api/response
---

## Response class

The **Response** [class](https://retic.land/manual/es/glossary#clase "Glosario de Términos") represents the response to an HTTP request made by a client.

### Properties

The main properties of the `Response` [class](https://retic.land/manual/es/glossary#clase "Glosario de Términos") and their functionality are presented below:

#### default_mimetype

All responses will default to a `text/plain` mimetype.

```python

# Current value of default_mimetype
res.default_mimetype: 'text/plain'

```

#### default_status

All responses have a default response status code of `status 200`.

```python

# Current value of default_status
res.default_status: 200

```

#### headers

This is the list of all headers or headers in the response. By default, all requests have the header. `'content-type': 'application/json'`

```python

# Current value of headers
Headers([('content-type', 'application/json'), ('Access-Control-Allow-Methods', 'True'), ('Access-Control-Allow-Credentials', 'GET,POST,DELETE,PUT,OPTIONS'), ('Access-Control-Allow-Origin', '*'), ('Access-Control-Allow-Headers', 'Content-Type'), ('Access-Control-Expose-Headers', 'Content-Type')])

```

#### status

It is the status code of the response in text string format.

```python

# Current value of status
res.status: '200 OK'

```

#### status_code

This is the status code of the response in a numeric format.

```python

# Current value of status_code
res.status_code: 200

```

### Features

The **Response** [class](https://retic.land/manual/es/glossary#clase "Glosario de Términos") uses the following functions to manipulate its information:

#### bad_request(*content: any* = "")

This [method](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") will respond with a _400 Bad_ Request to the client's request, this is to indicate that the request is not valid.

This generally means that the request contained invalid [parameters](https://retic.land/manual/es/glossary/#par%C3%A1metros "Glosario de Términos") or headers, or that you tried to do something that your request logic does not support.

**Parameters:**

- **content**: This is the information that is stored to be sent to the client, it can be in the form of a message, a dictionary, among other similar things. In the event that it does not exist, a status message will be sent based on the status code.

```python

# Retic
from retic import Request, Response
from retic.services.responses import error_response
from retic.services.validations import validate_obligate_fields

def upload(req: Request, res: Response):

    """Check that all mandatory parameters are valid"""
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

# Out:
{
    "valid": false,
    "msg": "The param files is necesary."
}

```

#### forbidden(_content: any_ = "")

This [method](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") is used to send a _403 forbidden_ response to the client, indicating that a request is not authorized.

This generally means that the user agent tried to do an "action" for which it did not have any type of authorization to do so, something like changing the password of another user would fall into one of these actions that are normally not authorized.

**Parameters:**

- **content**: Information intended for the client in the form of a message, dictionary, among others. if it exists, a status message based on the status code will be sent.

```python

# Retic
from retic import Request, Response
from retic.services.responses import error_response

# Services
from services.users.users as users

def login(req: Request, res: Response):

    """Check that all mandatory parameters are valid"""
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

# Out:
{
    "valid": false,
    "msg": "User is invalid."
}

```

#### not_found(*content: any* = "")

This [method](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") is used to send a _404 not_found_ response.

When called manually from your application code, this [method](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") is typically used to indicate that the client tried to find, update, or remove something that doesn't exist.

**Parameters:**

- **content**: Information to be sent to the client in the form of a message, dictionary, among others. In the event that it does not exist, a status message based on the status code will be sent.

```python

# URL of the HTTP request
# GET: http://localhost:1801/folders/86698adcb9b711eaa7524c0082ae1a80

# Retic
from retic import Request, Response

# Services
from services.files.files as files

def get_by_folder(req: Request, res: Response):
    """Get files based on your directory"""
    _files_db = files.get_all_by_folder_db(
        req.param("folder")
    )

    """Check if the folder was found, otherwise, return an error."""
    if _files_db['valid'] is False:
        res.not_found(_files_db)
    else:
        res.ok(_files_db)

```

```sh

# Out:
{
    "valid": false,
    "msg": "Folder not found."
}

```

#### ok(_content: dict_ = None)

This [method](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") is used to send a _200 OK_ response to the client.

This means that the client's request has been accepted.

**Parameters:**

- **content**: Information to be sent to the client as a message, a dictionary, among others. In case it does not exist, a status message based on the status code will be sent.

```python

# URL of the HTTP request
# GET: http://localhost:1801/folders/77698adcb9b711eaa7524c0082ae1a80

#Retic
from retic import Request, Response

# Services
from services.files.files as files

def get_by_folder(req: Request, res: Response):
    """Get files based on your directory"""
    _files_db = files.get_all_by_folder_db(
        req.param("folder")
    )

    """Check if the folder was found, otherwise, return an error."""
    if _files_db['valid'] is False:
        res.not_found(_files_db)
    else:
        res.ok(_files_db)

```

```sh

# Out:
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

This [method](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") is used to send a _500 Server error_ response to the client, indicating that some kind of error occurred on the server.

**Parameters:**

- **content**: Information to be sent to the client as a message, a dictionary, among others. If it does not exist, a status message based on the status code will be sent.

```python

#Retic
from retic import Request, Response

def undefined(req: Request, res: Response):
    res.server_error(
        error_response("Controller is invalid.")
    )

```

```sh

# Out:
{
    "valid": false,
    "msg": "Controller is invalid."
}

```

#### send(_content: any_ = "")

Sends a response in string with a format (XML, CSV, plain text), responses in JSON format, among others. Its use is recommended in the event that it is necessary to send a success response to the client with a status code other than 200.

This [method](https://retic.land/manual/es/glossary#m%C3%A9todo "Glosario de Términos") is used in the underlying implementation of most of the other terminal response methods.

**Parameters:**

- **content**: Information to be sent to the client in the form of a message, dictionary, among others. In the event that it does not exist, a status message based on the status code will be sent.

```python

#Retic
from retic import Request, Response

def say_hi(req: Request, res: Response):

    return res.send("Hi!")

```

```sh

# Out:
Hi!

```

#### set_headers(*headers: dict*, *value: str* = None)

Set response headers or headers with specific values.

Alternatively, an [object](https://retic.land/manual/es/glossary/#objeto "Glosario de Términos") containing headers can be passed to set multiple values at once, where the keys are the names of the headers and the corresponding values are the desired values.

**Parameters:**

- **headers**: It can be of type `dict`, to represent an [object](https://retic.land/manual/es/glossary/#objeto "Glosario de Términos") of headers that will be added to the current headers. If it is of type `str` it will be used to access a specific header. Any other type of format will cause an error exception.

- **value**: This is the value that will be assigned to the specified header. By default it has a specified `None` value.

```python

#Retic
from retic import Request, Response

def say_hi(req: Request, res: Response):

    res.set_headers('content-type', "text/plane")

    res.ok({u"msg": "say hi!"})

```

```sh

# Out:
{"msg": "say hi!"}

## Response headers
content-type: text/plane

```

#### set_status(*code: int*)

It is used to set the status code for the HTTP response.

**Parameters:**

- **code**: It is the number that represents the status code of the HTTP response.

```python

#Retic
from retic import Request, Response

def upload(req: Request, res: Response):

    res.set_status(201).send({u"msg": "file created!"})

```

```sh

# Out:
{
    "msg": "file created!"
}

## Status code
201 Created

```

#### redirect(_new_url: str_)

This is used to redirect to another url. Use permanent redirect with status code 308.

**Parameters:**

- **new_utl**: URL to redirect.

```python

#Retic
from retic import Request, Response

def upload(req: Request, res: Response):

    return res.redirect("http://example.com/")

```

```sh

## Status code
308 Permanent Redirect
...

```

### Other properties and functions

Retic inherits from `Werkzeug's Response` [class](https://retic.land/manual/es/glossary#clase "Glosario de Términos")  for managing request responses, visit the documentation about its [Response](https://werkzeug.palletsprojects.com/en/1.0.x/wrappers/#werkzeug.wrappers.Response) class to complement the information mentioned here.
