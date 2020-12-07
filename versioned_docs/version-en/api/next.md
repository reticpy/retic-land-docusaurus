---
id: next
title: Next
sidebar_label: Next
description: Next
slug: /api/next
---

The ``Next`` [class](https://retic.land/manual/glossary#clase "Glosario de Términos") allows control of the request to be passed to the next controller. It is often used in the development of middleware or logic for the exchange of information.
  
```python

# Retic
from retic import Request, Response, Next
from retic.services.responses import error_response
from retic.services.validations import validate_obligate_fields

# Services
from services.users.users as users

def oauth(req: Request, res: Response, next:Next):

    """Authenticate the user"""
    _user = users.validate(req.headers.get('authorization'))

    if _user["valid"] is False:
        return res.forbidden()

    # Continue with the next middleware
    next()

```
