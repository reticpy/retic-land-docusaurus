---
id: first-steps
title: Initial application 
sidebar_label: initial application
description: Create a starter application
slug: /es/getting-started/first-steps
---
Once the main folder of your project has been created, you must create, within it, the`app.py` file with the following code:

```python

# Retic
from retic import App as app

# Create the server
app.listen()

```

Then start your server with the following command:

```bash

# Option 1
python app.py

# Option 2
python3 app.py

```

Ready, you have created your first API. Visit the following link [http://localhost:1801/](http://localhost:1801/)to see the result.

![alt text](../../../static/img/api_rest_app.png "API REST")
