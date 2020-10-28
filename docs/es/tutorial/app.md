---
id: app
title: Archivo principal
sidebar_label: Archivo principal
description: Archivo principal de la Aplicación
slug: /es/tutorial/app
---

_Estructura de carpetas utilizada:_

```bash

retic-restapi-example
│   ...
│   app.py
│   requirements.txt
│   ...

```

El archivo principal se usa para unificar los controladores, las rutas y los servicios, a su vez crea el servidor de la aplicación.

Crea un archivo `app.py` en el cual se encontrará el servidor de nuestra aplicación.

```python

# app.py

"""Main app"""

# Retic
from retic import App as app

if __name__ == "__main__":
    # Crear servidor web
    app.listen(
        hostname="localhost",
        port=1801,
    )

```

Se debe iniciar nuestro servidor web con el siguiente comando:

```bash

python app.py

```

Visita el siguiente enlace [http://localhost:1801/](http://localhost:1801/) para ver el resultado.

![alt text](../../../static/img/api_rest_app.png "API REST")
