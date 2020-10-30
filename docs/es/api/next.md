---
id: next
title: Next
sidebar_label: Next
description: Next
slug: /es/api/next
---

La [clase](https://retic.land/manual/es/glossary#clase "Glosario de Términos") ``Next`` permite pasar el control de la petición al siguiente controlador. Con frecuencia se utiliza en el desarrollo de *middlewares* o lógicas para el intercambio de información.
  
```python

# Retic
from retic import Request, Response, Next
from retic.services.responses import error_response
from retic.services.validations import validate_obligate_fields

# Services
from services.users.users as users

def oauth(req: Request, res: Response, next:Next):

    """Autentificar usuario"""
    _user = users.validate(req.headers.get('authorization'))

    if _user["valid"] is False:
        return res.forbidden()

    # Continuar con el siguiente middleware
    next()

```
