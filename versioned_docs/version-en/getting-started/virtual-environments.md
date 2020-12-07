---
id: virtual-environments
title: Virtual enviroments
sidebar_label: Virtual enviroment
description: Create virtual enviroment in Python
slug: /getting-started/virtual-environments
---

A [virtualenv](https://docs.python.org/3/library/venv.html#module-venv) allows you to isolate resources such as **libraries and runtime environments** from the host system. That is, it gives the ability to use **different versions** of the same package for each project.

## Install virtualenv

Virtualenv is a tool that allows you to create Python environments isolated from each other, here is how to perform a correct installation.

```bash

# Option with pip
pip install virtualenv

# Option with pip3
sudo pip3 install virtualenv

```

## Create a virtual enviroment

To create a directory for the project and a directory for the virtual environment, just do the following.

```bash

# Create the project folder 
mkdir retic-restapi-example

# Enter the folder
cd retic-restapi-example

# Create virtual environment
# Option 1
python -m venv venv

# Option 2
python3 -m venv venv

```

This will create a virtual environment for your project.

## Activate a virtual environment

Every time you work on your project, the first thing you should do is activate your virtual environment. With the following codes you can activate the virtual environment in the most popular operating systems.

En Linux/MacOS:

```bash

# Run the activation script
. venv/bin/activate

# See version of pip installed in the virtual environment
pip --version

```

In Windows:

```bash

# Run the activation script
venv\Scripts\activate

# See version of pip installed in the virtual environment
pip --version

```

### Update Pip package

By default, an old version of Pip is installed, so it is recommended to update to the latest stable version with the following command:

```bash

# Update the pip package to the latest version

# Option 1
python -m pip install --upgrade pip

# Option 2
python3 -m pip install --upgrade pip

```
