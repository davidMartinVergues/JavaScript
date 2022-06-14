Retrocedamos un poco y recordemos que sucede en el proceso de creación de un contexto de ejecución. Al momento de crear un contexto de ejecución, se crea los objetos variable environment y outer environment, y para representar todo esto se crea la palabra this.


this, apunta en memoria a la referencia del objeto del contexto actual y la referencia a donde apunte puede cambiar de acuerdo a donde este ejecutándose la fase de ejecución de un contexto, vimos anteriormente que si cuando ponemos un método (función) dentro de un objeto, this apuntara al objeto en si donde esta declarada la función, debido a que tienen la capacidad de reflexión…

```javascript
var myObject = {
  name: 'Bruce Object',
  me: function () {
    this.name = 'Joker Object';
    console.log(this);
  }
}

myObject.me(); // { name: 'Joker Object', me: [Function: me] }
```

Recuerdan… bien, pero podemos cambiar la referencia a donde apunta this, y es a través de los métodos especiales que tiene un objeto función para ejecutar ademas de los ya conocidos () y estamos hablando primero de…

## .bind()
Consideremos el siguiente código.

```javascript
const person = {
  name: 'Bruce',
  lastname: 'Wayne',
  fullname: function() {
    return this.name + ' ' + this.lastname;
  }
}

const print = function(greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
}

print('hello', 'special');

```


Veremos que si ejecutamos el código anterior nos dará un error this.fullname() is not a function., ya que this dentro de la expresión de función print, representa o apunta a la referencia del objeto global en este caso, por lo tanto no tiene acceso a fullname, que esta declarada dentro del objeto person, eso es correcto, pero que si yo quisiera acceder al contexto de person, desde print, es decir, que this dentro de print, sea el mismo this, de person, bien para ello usamos bind().

```javascript
const printBinded = print.bind(person);

printBinded('hello', 'special');

```


Primero vemos que he creado una variable y a esta le hemos asignado un valor, el cual es una copia de la función print.

Nota: no se ejecuta print(), solo se esta accediendo al método que tiene este objeto función llamado .bind().

Dicho método crea una copia de la función pero, con una característica especial, el parámetro que le estamos pasando en .bind(person), es la referencia del objeto person, con esto literalmente estoy enlazando la referencia de this, dentro de print al this de person.

Es decir, cuando se ejecute entonces esa copia de print(), llamada en este caso printBinded(), this.fullname(), no tendrá problema en ejecutarse, debido a que this, de print, ya apunta o se enlaza a la referencia de person.

Pudimos haber hecho ese enlace al vuelo también de esta manera:

```javascript
const print = function(greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
}.bind(person);

print('hello', 'special');

```


Y obtenemos el mismo resultado, de cualquier manera se crea una copia de la función print en este caso y se enlaza su referencia de this, a person.

## .call()

A diferencia de .bind(), este método si ejecuta la función, tal y como lo hacen nuestros (), que sabemos son la manera de invocar una función, pero con una diferencia que .call(), recibe como primer parámetro la referencia a la cual debería de enlazar o apuntar this, dentro de la función que se ejecuta, en este caso print().

Vamos a explicarnos, consideremos el siguiente código:

```javascript
const print = function(greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
}

print.call(person, 'hello', 'special');

```


Tomando la misma función del ejemplo de bind(), vamos a usar en este caso call(), y vemos que en este caso si estamos ejecutando la función al invocar a través de call(), después vemos que el primer parámetro es la referencia a la que apuntara this, que en este caso queremos que sea person al igual que el ejemplo de bind(), posteriormente observamos que pasamos ya los parámetros que en si la función requiere, que es en este caso la palabra de saludo.

Obtuvimos el mismo resultado de bind()solo con la diferencia que aquí no se crea una copia, sino se ejecuta la función a través de call().

## .apply()

Bueno, la unica diferencia entre call() y apply(), es la manera en requerir los argumentos de la funcion, por ejemplo, vimos que en call, se mandaban los argumentos asi call(person, 'hello', 'special'), separados por comas, pero que pasa si mis argumentos son muchos, seria conveniente poder recirbirlos en forma de lista, osea en forma de un arreglo, para ello esta apply().

```javascript
print.apply(person, ['hello', 'special']);

```

Ves la diferencia, bien, pero entonces ¿en que casos puedo utilizar esto?, bien por ejemplo…

## Function borrowing

O traducido, préstamo de función, cuando queremos compartir la función de un objeto para que otro la utilice pero con sus propios argumentos, veamos el ejemplo.

```javascript
const person = {
  name: 'Bruce',
  lastname: 'Wayne',
  fullname: function() {
    return this.name + ' ' + this.lastname;
  }
}

const actor = {
  name: 'Clint',
  lastname: 'Eastwood'
}

const result = person.fullname.apply(actor);
console.log(result); // Clint Eastwood
```
Vemos que se ejecuta la función person.fullname, a través de apply y pasamos la referencia de this, que en este caso quiero que apunte al objeto actor, para cuando se ejecute fullname del objeto person, name y lastname, sean los que están en actor.

## Function currying

Otro caso donde podemos usar algunos de estos métodos es “Function currying”, bind para ser precisos, veamos a que se refiere este termino.

```javascript
function sum(a, b) {
  return a + b;
}

const sumCopy = sum.bind(this, 2);

sumCopy(3); //5
```

Primero vemos que he declarado una función llamada sum, en la cual se reciben dos parámetros (a, b), y me regresa la suma de esos dos parámetros, bien, después observamos que en la asignación de la variable sumCopy le pasamos la copia de la función sum gracias a el método bind(), que ya sabemos que crea una copia de la función original pero con posibilidad de cambiar la referencia, lo cual en este caso no cambio ya que le pasamos como referencia el mismo this, que originalmente usa sum(), bien pero el detalle esta en que después de dar la referencia dentro del bind(), pasamos otro parámetro, ¿a que parámetro se refiere?, en el método bind, también es posible pasar los parámetros que puede recibir la función, al igual que lo hicimos con el método call, ¿recuerdan?, pues en bind también es posible y cuando lo hacemos es como poner un default al parámetro a, en este caso, es decir, al colocarlo, la copia de la función en memoria podría verse así:

```javascript
function sumCopy(a, b) {
  a = 2;
  return a + b;
}
```
Entonces a siempre va a tener el valor de 2 cuando se ejecute sumCopy.

En resumen podemos decir que “Function currying” es crear una copia de una función pero con algunos parámetros resueltos o presentes antes de ejecutarse.

Conclusión
Los tres métodos tienen que ver con la referencia a la que apunta this, en cada contexto, es por eso su utilidad, ya que con estas herramientas podemos manipular y decidir que significa this, lo cual es poderoso a la hora de resolver problemas relacionados a los contextos de ejecución.