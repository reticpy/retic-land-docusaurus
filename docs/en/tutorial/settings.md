---
id: settings
title: "Configuration file"
sidebar_label: "Configuration file"
description: "Configuration file"
slug: /es/tutorial/settings
---

_Folder structure used:_

```bash

retic-restapi-example
│   ...
|
└───controllers
│   │   users.py
│   │   ...
│
└───routes
│   │   __init__.py
│   │   routes.py
|   │   ...
|
└───services
│   │
│   └───users
│       │   users.py
│       │   ...
│   ...
│   .env.development
│   .env.staging
│   .env.production
│   app.py
│   requirements.txt
│   settings.py

```

Many times it is necessary to declare constant values at the beginning of each `.py`. These can depend on other variables within the application, the values obtained from the environment variables file (.env) are an example of the above.

For this reason, Retic recommends using a  `settings.py`,file in which all these variables are imported and added to Retic's configuration. In this way they can be used within the entire application.


Create a  `settings.py` file and add the environment variable file load as follows:

```python

# settings.py

# Retic
from retic import App as app

"""Set environment file path"""
app.env.read_env('.env.development', override=True)

```

By default, the [function](https://retic.land/manual/es/glossary/#funci%C3%B3n "Glosario de Términos") `read_env()` does a search for the `.env` file, however the file path might be different. It is recommended to load variables from the system directly and in a production environment.

Create the `.env.development` development environment variable file.

```bash

# .env.development

#App
APP_HOSTNAME                    =localhost
APP_PORT                        =1801
APP_ENV                         =development

```

Then create the staging environment variables file `.env.staging`.

```bash

# .env.staging

#App
APP_HOSTNAME                    =localhost
APP_PORT                        =1801
APP_ENV                         =staging

```

Finally create the production environment variables file `.env.production`.

```bash

# .env.production

#App
APP_HOSTNAME                    =localhost
APP_PORT                        =1801
APP_ENV                         =production

```

Finally update the main `app.py` file and add the configuration file:
```python

# app.py

"""Main app"""

# Retic
from retic import App as app

# Settings
import settings

# Routes
from routes import router

# Add the routes of the app
app.use(router)

if __name__ == "__main__":
    # Create web server
    app.listen(
        # Get the environment variable APP_HOSTNAME in the default format (str)
        hostname=app.env("APP_HOSTNAME"),
        # Get the APP_PORT environment variable in numeric format. If it does not exist, it returns 1801.
        port=app.env.int("APP_PORT", 1801),
    )


```

If you are looking for more information you can visit the [configuration](../concepts/settings) section.
