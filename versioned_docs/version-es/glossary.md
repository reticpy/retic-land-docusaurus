---
id: glossary
title: Glosario
sidebar_label: Glosario de documentación de Retic.
slug: /glossary
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

## Función

Las funciones se caracterizan por ser bloques de código reutilizables que poseen un nombre asociado, éste recibe desde ninguno hasta una gran cantidad de argumentos como entrada. Le hace seguimiento a una secuencia de sentencias, estas ejecutan operaciones deseadas y devuelven un valor y realizan determinadas tareas, este bloque puede ser llamado las veces que sea necesario.

Luego de declarar una función se le debe agregar a esta los parámetros correspondientes para así especificar la acción o acciones a realizar. Por ejemplo:

```
  (Función)      (Parámetros)
        |           |
1  def sumar(number1, number2):
2      print number1 + number2
3
4  sumar(10, 20) # 25
```

Esta función llamada sumar arroja como resultado la suma exacta de sus parámetros, en este caso el resultante sería 25.

Si lo que buscas es una información más concreta, puedes entrar [aquí](https://devcode.la/tutoriales/funciones-en-python/ "Función")

## Parámetros

Los parámetros son valores que una función espera recibir al momento de ser llamada o invocada, con el fin de ejecutar acciones en base a este parámetro.
Los parámetros pueden ser dados una o más veces a la misma función, estos deben ir separados por coma para no causar errores en la sintaxis de la consola.

Ejemplo:

```
1  def mi_funcion(nombre, apellido):
```

Los parámetros son los que se encuentran dentro de los paréntesis a modo de variables con el fin de ser usadas como tales dentro de la misma función.


Para saber un poco más sobre los parámetros puedes entrar a ésta [página](https://uniwebsidad.com/libros/python/capitulo-4/definiendo-funciones#:~:text=Un%20par%C3%A1metro%20es%20un%20valor,acciones%20en%20base%20al%20mismo.&text=Los%20par%C3%A1metros%2C%20se%20indican%20entre,dentro%20de%20la%20misma%20funci%C3%B3n. "Parámetros en Python")

## Objeto

En python si creas una variable y a esta le asignas un valor entero, est evalor pasa a ser un objeto. Por lo tanto siguiendo este concepto, las funciones, listas, tuplas, diccionarios, cadenas, y demás son un objeto.

Tambien pueden llamarse al obheto una concreción o instancia de la clase.

Puedes ver un concepto más detallado desde este [apartado](https://j2logo.com/python/tutorial/programacion-orientada-a-objetos/#:~:text=Python%20es%20un%20lenguaje%20orientado%20a%20objetos,-S%C3%AD%2C%20soy%20un&text=Cuando%20creas%20una%20variable%20y,Y%20as%C3%AD%20podr%C3%ADa%20seguir%20indefinidamente. "Objeto")

## Instancia

Los objetos son creados usando el constructor de una clase, luego de ser creado el objeto, se le conoce como instancia de la clase.


Para saber más sobre el tema haz clic [aqui](https://blog.nearsoftjobs.com/tipos-de-m%C3%A9todos-en-python-cls-vs-self-d6da1e08efa8 "Instancia del objeto")

## Tupla

En python se define por tupla al conjunto ordenado e incambiable de elementos de un mismo o un diferente tipo. Son representadas escribiendo los elementos dentro de parentesis siendo separados por comas. Por ejemplo:

```
>>> (4, "h", 12.8)
```

Acá podrás saber un poco más sobre lo que significa [Tupla](https://www.mclibre.org/consultar/python/lecciones/python-tupla.html#:~:text=En%20Python%2C%20una%20tupla%20es,par%C3%A9ntesis%20y%20separados%20por%20comas.&text=Una%20tupla%20puede%20no%20contener,decir%2C%20ser%20una%20tupla%20vac%C3%ADa. "Tupla en Python")
