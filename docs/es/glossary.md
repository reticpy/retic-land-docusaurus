---
id: glossary
title: Glosario
sidebar_label: Glosario de documentación de Retic.
slug: /es/glossary
---

Desde este glosario de términos Retic explica cada una de las palabras técnicas usadas en la página. Esto facilitará el entendimiento de las funciones de Retic y Python en sí.

## Clase

Se puede decir que una clase es como una plantilla para la creacion de objetos, algo similar a unos planos de construccion, ésta puede definir variables y todas las funcionalidades que están asociadas al objeto que describen. class es la palabra reservada que se utiliza para crear una clase en Python.

Cada vez que se crea una clase a su vez se esta creando un nuevo tipo de objeto, permitiendo así crear nuevas instancias de ese tipo.

Si se desea saber un poco más sobre el tema puedes hacer clic [aquí](//docs.python.org/es/3/tutorial/classes.html#:~:text=Un%20m%C3%A9todo%20es%20una%20funci%C3%B3n,objetos%20pueden%20tener%20m%C3%A9todos%20tambi%C3%A9n. "Clases en Python")

## Método

Al momento de utilizar Python se destacan tres tipos de métodos existentes. Métodos estáticos, métodos de clase y los métodos de instancia, cada uno de ellos posee características singulares que pueden ser utilizadas en diferentes situaciones.

**Método Estático:**

Si se desea crear un método estático se debe anteponer @staticmethod para que de esta manera Python lo reconozca como un método estático.
Su principal característica es que puede ser llamado sin tener una instancia de la clase, además éste método no posee acceso al exterior, lo que significa que no puede no puede llamar a ninguna otra función ni acceder a ningún otro atributo.
Este metodo puede ser utilizado cuando se posee una clase pero no necesariamente se debe tener una instancia para acceder a éste método.
Podemos usar como ejemplo el hecho de usar una clase Math teniendo un método como factorial el cual calcula la factorial de un numero dado, para esto es muy probable que no sea necesario tener una instancia específica para llamar al método, gracias a esto se puede decidir convertir a este método en estático.

Ejemplo:

```class Math:
   @staticmethod
   def factorial(number):
       if number == 0:
           return 1
       else:
           return number * MethodTypes.factorial(number - 1)

factorial = MethodThypes. factorial(5)
print(factorial)
```

**Método de clase:**

En éste método se hace algo similar al método anterior, solo que en este se antepone @classmethd para indicarle a Python que es un método de clase. Esto no es lo único similar al método anterior, tambien comparten el hecho de que puede ser llamado sin la creación d euna instancia de la clase.
Su diferencia recae en que éste método tiene la capacidad de acceder a otros métodos y atributos de la clase, aunque sin embargo, el no método no tiene este acceso a atributos de instancia debido a que ninguna instancia ha sido creada para poder utilizarlos.


**Métodos de instancia:**

A diferencia de los otros métodos éste puede ser llamad solamente si se tiene una instancia de la clase, luego de ser creada una instancia de la clase se podrá acceder a los métodos de la misma.
Este método es capaz de crear, optener y cambiar cada atributo de la instancia y a su vez llamar a otros métodos de instancia y clase.

Ejemplo:

```class Methodtypes:

    name = "Ragnar"

    def instanceMethod(self):
        # Se crea un atributo de instancia con la palabra clave self
        self.lastname = "Lothbrock"
        print(self.name)
        print(self.lastname)

    @classmethod
    def classMethod(cls):
        # Se accede a un atributo de clase a través de la palabra clave cls
        cls.name = "Lagertha"
        print(cls.name)

    @staticmethod
    def staticMethod():
        print("Este es un Método estático")

# Creates an instance of the class
m = MethodTypes()
# Calls instance method
m.instanceMethod()


MethodTypes.classMethod()
MethodTypes.staticMethod()
```

Para saber un poco más sobre el tema puedes visitar ésta [página](https://blog.nearsoftjobs.com/tipos-de-m%C3%A9todos-en-python-cls-vs-self-d6da1e08efa8 "Métodos en Python")

