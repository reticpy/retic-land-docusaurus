---
id: glossary
title: Glossary
sidebar_label: Glossary
slug: /glossary
---

From this glossary of terms Retic explains each of the technical words used on the page. This will make it easier to understand the Retic and Python functions themselves.

## Class

It can be said that a class is like a template for the creation of objects, something similar to construction plans, it can define variables and all the functionalities that are associated with the object they describe. class is the reserved word used to create a class in Python.

Each time a class is created, a new type of object is being created, thus allowing the creation of new instances of that type.

If you want to know a little more about the subject you can click [here](//docs.python.org/3/tutorial/classes.html#:~:text=Un%20m%C3%A9todo%20es%20una%20funci%C3%B3n,objetos%20pueden%20tener%20m%C3%A9todos%20tambi%C3%A9n. "Clases en Python")

## Method

When using Python, three types of existing methods stand out. Static methods, class methods and instance methods, each of them has unique characteristics that can be used in different situations.

**Static method:**

If you want to create a static method, you must prepend @staticmethod so that Python recognizes it as a static method.
Its main characteristic is that it can be called without having an instance of the class, in addition this method does not have access to the outside, which means that it cannot call any other function or access any other attribute.
This method can be used when you have a class but you don't necessarily have to have an instance to access this method.
We can use as an example the fact of using a Math class having a method as a factorial which calculates the factorial of a given number, for this it is very likely that it is not necessary to have a specific instance to call the method, thanks to this you can decide make this method static.

Example:

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

**Class method:**

In this method something similar to the previous method is done, only in this one @classmethd is prepended to tell Python that it is a class method. This is not the only thing similar to the previous method, they also share the fact that it can be called without creating an instance of the class.
Its difference lies in the fact that this method has the ability to access other methods and attributes of the class, although, however, the non-method does not have this access to instance attributes because no instance has been created to be able to use them.


**Instance methods:**

Unlike the other methods, this one can only be called if you have an instance of the class, after creating an instance of the class, you can access its methods.
This method is capable of creating, opting, and changing each attribute of the instance and in turn calling other instance and class methods.

Example:

```class Methodtypes:

    name = "Ragnar"

    def instanceMethod(self):
        # An instance attribute is created with the keyword self
        self.lastname = "Lothbrock"
        print(self.name)
        print(self.lastname)

    @classmethod
    def classMethod(cls):
        # A class attribute is accessed through the cls keyword
        cls.name = "Lagertha"
        print(cls.name)

    @staticmethod
    def staticMethod():
        print("This is a static Method")

# Creates an instance of the class
m = MethodTypes()
# Calls instance method
m.instanceMethod()


MethodTypes.classMethod()
MethodTypes.staticMethod()
```

To know a little more about the subject you can visit this [page](https://blog.nearsoftjobs.com/tipos-de-m%C3%A9todos-en-python-cls-vs-self-d6da1e08efa8 "Métodos en Python")

## Function

The functions are characterized by being reusable code blocks that have an associated name, which receives from none to a large number of arguments as input. It follows a sequence of statements, they execute desired operations and return a value and perform certain tasks, this block can be called as many times as necessary.

After declaring a function, the corresponding parameters must be added to it in order to specify the action or actions to be performed. For example:

```
  (Function)      (Parameters)
        |           |
1  def add(number1, number2):
2      print number1 + number2
3
4  add(10, 20) # 25
```

This function called add returns the exact sum of its parameters, in this case the result would be 25.

If what you are looking for is more specific information, you can enter [here](https://devcode.la/tutoriales/funciones-en-python/ "Función")

## Parameters

Parameters are values ​​that a function expects to receive when it is called or invoked, in order to execute actions based on this parameter.
Parameters can be given one or more times to the same function, they must be separated by commas so as not to cause errors in the console syntax.

Example:

```
1  def mi_funcion(first name, last name):
```

The parameters are the qThey are found inside the parentheses as variables in order to be used as such within the same function.


To know a little more about the parameters you can enter this [page](https://uniwebsidad.com/libros/python/capitulo-4/definiendo-funciones#:~:text=Un%20par%C3%A1metro%20es%20un%20valor,acciones%20en%20base%20al%20mismo.&text=Los%20par%C3%A1metros%2C%20se%20indican%20entre,dentro%20de%20la%20misma%20funci%C3%B3n. "Parámetros en Python")

## Object

In python if you create a variable and assign it an integer value, this evaluator becomes an object. Therefore following this concept, functions, lists, tuples, dictionaries, strings, and others are an object.

The object can also be called a concretion or instance of the class.

You can see a more detailed concept from this [section](https://j2logo.com/python/tutorial/programacion-orientada-a-objetos/#:~:text=Python%20es%20un%20lenguaje%20orientado%20a%20objetos,-S%C3%AD%2C%20soy%20un&text=Cuando%20creas%20una%20variable%20y,Y%20as%C3%AD%20podr%C3%ADa%20seguir%20indefinidamente. "Objeto")

## Instance

Objects are created using the constructor of a class, after the object is created, it is known as an instance of the class.


To know more about the subject click [here](https://blog.nearsoftjobs.com/tipos-de-m%C3%A9todos-en-python-cls-vs-self-d6da1e08efa8 "Instancia del objeto")

## Tupla

In python, the ordered and unchangeable set of elements of the same or a different type is defined by tuple. They are represented by writing the elements within parentheses being separated by commas. For example:

```
>>> (4, "h", 12.8)
```

Here you can learn a little more about what [Tupla](https://www.mclibre.org/consultar/python/lecciones/python-tupla.html#:~:text=En%20Python%2C%20una%20tupla%20es,par%C3%A9ntesis%20y%20separados%20por%20comas.&text=Una%20tupla%20puede%20no%20contener,decir%2C%20ser%20una%20tupla%20vac%C3%ADa. "Tupla en Python") means.
