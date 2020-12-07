---
id: set-up
title:  Set up development environment
sidebar_label:  Set up development environment
description: Install Retic and configure the requirements.txt
slug: /tutorial/set-up
---

_You can find this code in the [repositorY](https://github.com/reticpy/retic-restapi-example)._

To start create a [virtual enviroment](../getting-started/virtual-environments) for the project, do the following:

```bash

Create the project folder
mkdir retic-restapi-example

# Enter the folder
cd retic-restapi-example

# Create virtual environment
python -m venv venv

# Activate virtual environment
venv\Scripts\activate

# Update the pip package to the latest version
python -m pip install --upgrade pip

```
A `requirements.txt` file must be created to add the project packages.
```bash

# requirements.txt

retic==0.1.1

```

Install the dependencies with the following command:

```bash

pip install -r requirements.txt

```
