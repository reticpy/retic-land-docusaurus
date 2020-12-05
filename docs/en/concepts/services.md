---
id: services
title: Services
sidebar_label: Services
description: Services of the app
slug: /es/concepts/services
---

Retic recommends making a modular structure for your application. Independent the operation of the controllers from the services that carry out their action. Thus facilitating the necessary integration with the different tests that the application requires. In addition, to minimize code repetition.

```python

# services/users/users.py

"""Services for the user controller"""

# Retic
from retic import App as app

# Requests
import requests

# Constants
URL_USERS = app.apps['backend']['example']['base_url'] + \
    app.apps['backend']['example']['users']


def get_by_id_db(user_id):
    """Find a user based on an identifier

    :param user_id: Identificador del usuario
    """

    """Declare variables"""
    user = None

    """Get all users"""
    users_req = requests.get(URL_USERS)

    """Transform to json"""
    users = users_req.json()

    """Perform the search"""
    for _user in users:
        if _user["id"] == user_id:
            user = _user

    """Return information"""
    return user
