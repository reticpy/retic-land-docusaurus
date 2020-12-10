---
id: request
title: Request
sidebar_label: Request
description: Request
slug: /api/request
---

## Request Class

The **Request** [class](https://retic.land/manual/glossary#class "Glosary of Terms") represents the HTTP request and contains a library that helps make requests much simpler. It contains properties such as [parameters](https://retic.land/manual/glossary#parameters "Glosary of Terms"), request body, request headers, among others.

### Properties

Some properties are an implementation of the [ImmutableMultiDict](https://werkzeug.palletsprojects.com/en/1.0.x/datastructures/#werkzeug.datastructures.ImmutableMultiDict) and [ImmutableList](https://werkzeug.palletsprojects.com/en/1.0.x/datastructures/#werkzeug.datastructures.ImmutableList) directory to represent their value.

#### access_route

List each IP address involved in the request.

```python

# Actual value of access_route
req.access_route: ImmutableList(['127.0.0.1'])

```

#### args

List all the [parameters](https://retic.land/manual/glossary#parameters "Glosary of Terms") in the URL of the request.

```python

# URL of the request HTTP
# GET http://localhost:1801/files/123?queryparam=13344

# Actual value of the args
req.args: ImmutableMultiDict([('queryparam', '13344')])

```

By default an `ImmutableMultiDict` that is returned in this [function](https://retic.land/manual/glossary#function "Glosary of Terms") contains functions like `getlist`, `get`, `get_all` to interact with the [parameters](https://retic.land/manual/glossary#parameters "Glosary of Terms") in the URL of a request. If you need more details you can visit the official documentation about this [ImmutableMultiDict](https://werkzeug.palletsprojects.com/en/1.0.x/datastructures/#werkzeug.datastructures.ImmutableList) class.

#### base_url

This returns the URL of the request without any _querystring_ parameters.

```python

# Actual value of  the base_url
req.base_url: 'http://127.0.0.1:1801/files/123'

```

#### body

`Body` [class](https://retic.land/manual/glossary#class "Glosary of Terms") [instance](https://retic.land/manual/glossary#instance "Glosary of Terms"). Contains the body that makes up the request.

```python

# actual value of the body
req.body:
    type: 'form'
    body: ImmutableMultiDict([('filename', 'fullname')])

```

#### cookies

List all the cookies of the request made.

```python

# Valor actual de cookies
req.cookies: ImmutableMultiDict([('cookie1', '123456')])

```

#### data

Contains the incoming data of the request in binary format.

```python

# Actual value of the data
req.data: b'{\r\n    "filename":"name of the file"\r\n}'

```

#### environ

WSGI environment that is used to extract the information from the request.

```python

# Actual value of the environ
req.environ: {'CONTENT_LENGTH': '39', 'CONTENT_TYPE': 'text/plain', 'HTTP_ACCEPT': '*/*', 'HTTP_ACCEPT_ENCODING': 'gzip, deflate, br', 'HTTP_CACHE_CONTROL': 'no-cache', 'HTTP_CONNECTION': 'keep-alive', 'HTTP_COOKIE': 'example1=123456', 'HTTP_HOST': 'localhost:1801', 'HTTP_USER_AGENT': 'PostmanRuntime/7.26.1', 'PATH_INFO': '/files/123', 'QUERY_STRING': 'queryparam=13344', 'RAW_URI': '/files/123?queryparam=13344', 'REMOTE_ADDR': 'localhost', ...}

```

#### files

List all files in the HTTP request. Each value is an [instance](https://retic.land/manual/glossary#instance "Glosary of Terms") of the [FileStorage](https://werkzeug.palletsprojects.com/en/1.0.x/datastructures/#werkzeug.datastructures.FileStorage) class.

Each element behaves like a _file object_ recognized by **Python**, with the difference that it also has a `save()` [function](https://retic.land/manual/glossary#function "Glosary of Terms") that can store the file on a file system.

```python

# Actual value of the files
req.files: ImmutableMultiDict([('files', <FileStorage: '200px-Flag_of_Spain.svg.png' ('image/png')>)])

```

#### form

It contains all the values in a form of a request of the type: `application/x-www-form-urlencoded`.

```python

# Actual value of form
req.form: ImmutableMultiDict([('size', '123456')])

```

#### full_path

Contains the complete URL of the request

```python

# Actual value of full_path
req.full_path: '/files/123?queryparam=13344'

```

#### headers

List all the request headers.

```python

# Actual value of headers
EnvironHeaders([('Cookie', 'cookie1=123456'), ('User-Agent', 'PostmanRuntime/7.26.1'), ('Accept', '*/*'), ('Cache-Control', 'no-cache'), ('Postman-Token', 'a0c82eb0-7864-472f-8991-5fce2c250554'), ('Host', 'localhost:1801'), ('Accept-Encoding', 'gzip, deflate, br'), ('Connection', 'keep-alive'), ('Content-Type', 'application/x-www-form-urlencoded'), ('Content-Length', '11')])

```

There is no difference between upper and lower case.

```python

source = req.headers.get('source')
source = req.headers.get('Source')

# http://localhost:1810/downloads/files/3db7ce17ced111eab61ae454e894d9d6
# http://localhost:1810/downloads/files/3db7ce17ced111eab61ae454e894d9d6

```

Alternate form in which to return an Exception when the header does not exist:

```python

source = req.headers['source']
source = req.headers['Source']

# http://localhost:1810/downloads/files/3db7ce17ced111eab61ae454e894d9d6
# http://localhost:1810/downloads/files/3db7ce17ced111eab61ae454e894d9d6

```

#### host

Contains hostname and port if it's available.

```python

# URL de la petición HTTP
# GET http://localhost:1801/files/123?queryparam=13344

# Actual value of the host
req.host: 'localhost:1801'

```

#### method

This is the [method](https://retic.land/manual/glossary#method "Glosary of Terms") used for the request, for example: `GET`, `POST`, `DELETE` y `PUT`.

```python

# Actual value of method
req.method: 'GET'

```

#### params

Object that contains all the [parameters](https://retic.land/manual/glossary#parameters "Glosary of Terms") for the request URL: `GET`, `POST`, `DELETE` y `PUT`.

```python

# URL of the HTTP request
# GET http://localhost:1801/files/123?queryparam=13344

# Actual value of the params
req.params: {'id': '123'}

```

#### path

Contains the path in the request URL.

```python

# URL of the HTTP request
# GET http://localhost:1801/files/123?queryparam=13344

# Actual value of params
req.path: '/files/123'

```

#### retic

It's a dictionary that is used to add custom values to the request and thus share them between controllers. Use the `req.set()` and `req.get()` functions to manipulate their values.

```python

# Assign the object JSON with the name app1
req.set('app1', {u"msg": "say hi!"})

# Actual value of retic
req.retic: {'app1': {'msg': 'say hi!'}}

```

### Functions

The Request [class](https://retic.land/manual/glossary#class "Glosary of Terms") uses the following functions to manipulate your information.

#### param(_key: str_, _default_value: any_ = None, _callback_ = None)

This returns the value of the parameter with the specified name.

`req.param(...)` searches the parsed [parameters](https://retic.land/manual/glossary#parameters "Glosary of Terms") such as the **URL path**, **request body**, and **query string**, all in that order. If the value does not exist in the request, it will return `None` or the specified default value.

**Parameters:**

- **key**: Name of the parameter to search.

- **default_value**: Value by default if the parameter doesn't exist.

- **callback**: [Function](https://retic.land/manual/glossary#function "Glosary of Terms") that is executed after obtaining the value of the parameter, it can be `bool`, `int`, `str`, etc.

```python

# URL of the HTTP request
# GET http://localhost:1801/files/123?queryparam=13344

# Print the current value of the id parameter, or use a default value
print(req.param('id', 'default_value', int))
print(req.param('id3')

# out: 123
# out: None

```

#### set(_key: str_, _value: any_ = None)

Assign an [object](https://retic.land/manual/glossary#object "Glosary of Terms") in the **retic dictionary** with a specific name. It should be noted that names are not case-sensitive, in the event that the name already exists, its value will be overwritten and the code will not be as expected. In the event that the value to be assigned does not exist, the value `None` will be saved by default.

**Parameters:**

- **key**: Name of the object to save.

- **value**: Value with which the object will be saved.

```python

# Assign JSON object with name app1
req.set('app1', {u"msg": "say hi!"})

```

#### get(_key: str_, _default_value: any_ = None)

Here the value of an [object](https://retic.land/manual/glossary#object "Glosary of Terms") in the **retic dictionary** with a specific name is returned. Again you should note that the names are not case sensitive. If there is no value in the request, it will return `None` or whatever default value is specified.

**Parameters:**

- **key**: Name of the object to search.

- **default_value**: Value by default if the object desn't exist.

```python

# Assing JSON object with name app1
req.set('app1', {u"msg": "say hi!"})

# Print the current value of the parameters, or use a default value
print(req.get('app1'))
print(req.get('app2', 2233))

# out: {'msg': 'say hi!'}
# out: 2233

```

#### all_params()

Returns the value of all the [parameters](https://retic.land/manual/glossary#parameters "Glosary of Terms") sent in the request together with the retic dictionary combined into a single dictionary.

It includes parsed parameters like the **URL path**, **request body**, **query string** and **retic dictionary**, all in that order.

```python

# URL of the HTTP request
# GET http://localhost:1801/files/123?queryparam=13344

# Print all the parameters of the request
print(req.all_params())

# Out: {'id': '123', 'size': '123456', 'queryparam': '13344', 'app1': {'msg': 'say hi!'}}

```

### Other properties and functions

Retic inherits from `Werkzeug's Request` [class](https://retic.land/manual/glossary#class "Glosary of Terms") to handle its requests. Visit the documentation about your [Request](https://werkzeug.palletsprojects.com/en/1.0.x/wrappers/#base-wrappers) class to complement the information that is mentioned here.
