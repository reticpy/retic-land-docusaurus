---
id: installation
title: Installation
sidebar_label: Installation
description: Instal Retic Windows, Linux, MacOS.
slug: /es/getting-started/installation
---

Retic recomend using a [cirtual enviroment](./virtual-environments) to work.

```bash

# Instal the latest stable version of Retic
pip install -U retic

```

If you want to see the release notes for each version you can find them well detailed on [GitHub](https://github.com/reticpy/retic/releases).

## Archivo requirements.txt

Retic also recommends using a``requirements.txt``. To facilitate the version control of each package and install only those that are necessary.

It's something similar to ``package.json`` of **Node.js** in its section of ``dependences``.


```bash

# requirements.txt

retic==0.1.1
requests==2.24.0
SQLAlchemy==1.3.18
mysql-connector-python==8.0.19
PyMySQL==0.9.
SQLAlchemy-serializer==1.3.4.2

```

To install the application dependencies in **node** use ``npm install`` or ``yarn install``, its equivalent in **Python** is the following command:

```bash

pip install -r requirements.txt

```
