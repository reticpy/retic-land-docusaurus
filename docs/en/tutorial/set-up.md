---
id: set-up
title:  Configurar entorno de desarrollo
sidebar_label:  Configurar entorno de desarrollo
description: Instalar Retic y configurar el archivo requirements.txt
slug: /es/tutorial/set-up
---

_Puedes encontrar éste código en el siguiente [repositorio](https://github.com/reticpy/retic-restapi-example)._

Para comenzar a crea un [entorno virtual](../getting-started/virtual-environments) para el proyecto se debe hacer lo siguiente:

```bash

# Crear la carpeta del proyecto
mkdir retic-restapi-example

# Ingresar a la carpeta
cd retic-restapi-example

# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
venv\Scripts\activate

# Actualizar el paquete pip a la última versión
python -m pip install --upgrade pip

```

Se debe crear un archivo `requirements.txt` para agregar los paquetes del proyecto.

```bash

# requirements.txt

retic==0.1.1

```

Instala las dependencias con el siguiente comando:

```bash

pip install -r requirements.txt

```
