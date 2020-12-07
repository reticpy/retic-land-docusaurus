---
id: installation
title: Instalación
sidebar_label: Instalación
description: Instalar Retic Windows, Linux, MacOS.
slug: /getting-started/installation
---

Retic recomienda utilizar un [entorno virutal](./virtual-environments) para trabajar.

```bash

# Instalar la última versión estable de Retic
pip install -U retic

```

Si deseas ver las notas de lanzamiento para cada versión las podrás encontrar bien detalladas en [GitHub](https://github.com/reticpy/retic/releases).

## Archivo requirements.txt

Retic recomienda además utilizar un archivo ``requirements.txt``. Para facilitar el control de la versión de cada paquete e instalar únicamente los que sean necesarios.

Es algo similar al archivo ``package.json`` de **Node.js** en su sección de ``dependences``.


```bash

# requirements.txt

retic==0.1.1
requests==2.24.0
SQLAlchemy==1.3.18
mysql-connector-python==8.0.19
PyMySQL==0.9.
SQLAlchemy-serializer==1.3.4.2

```

Para instalar las dependencias de la aplicación en **node** se utiliza ``npm install`` o ``yarn install``, su equivalente en **Python** es el siguiente comando:

```bash

pip install -r requirements.txt

```
