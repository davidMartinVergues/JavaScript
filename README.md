- [JavaScript](#javascript)
  - [Frontend](#frontend)
    - [Conceptos básicos](#conceptos-básicos)
  - [JS básico](#js-básico)
    - [Lenguajes forwards y backwards](#lenguajes-forwards-y-backwards)
    - [Funciones](#funciones)
    - [scope](#scope)
    - [Coerción o casting](#coerción-o-casting)
    - [Función constructora](#función-constructora)
    - [Filter map .find() forEach() .some()](#filter-map-find-foreach-some)
    - [default params y templates literal ``](#default-params-y-templates-literal-)
    - [let const multilínea en strings](#let-const-multilínea-en-strings)
    - [spread operator y destructuring](#spread-operator-y-destructuring)
    - [objetos mejorados](#objetos-mejorados)
    - [arrow function](#arrow-function)
    - [promises](#promises)
    - [Clases](#clases)
    - [modules](#modules)
    - [Generator](#generator)
    - [include en arrays](#include-en-arrays)
    - [potenciación](#potenciación)
    - [Object.entries y object.values](#objectentries-y-objectvalues)
    - [padStart padEnd](#padstart-padend)
    - [async await](#async-await)
    - [rest operator (operador de reposo)](#rest-operator-operador-de-reposo)
    - [spread operator en objetos](#spread-operator-en-objetos)
    - [promise finally](#promise-finally)
    - [regexData](#regexdata)
    - [flat en arrays](#flat-en-arrays)
    - [flatmap](#flatmap)
    - [trimStart trimEnd es10](#trimstart-trimend-es10)
    - [error binding en bloque catch](#error-binding-en-bloque-catch)
    - [fromEntries](#fromentries)
    - [symbol](#symbol)
    - [Scope y closure](#scope-y-closure)
      - [Scope](#scope-1)
    - [Closure](#closure)
    - [Asincronismo](#asincronismo)
      - [XMLHttprequest object y callbacks](#xmlhttprequest-object-y-callbacks)
      - [usando promesas](#usando-promesas)
      - [usando async await](#usando-async-await)
    - [gestión de paquetes con npm](#gestión-de-paquetes-con-npm)
      - [Para iniciar un proyecto con npm:](#para-iniciar-un-proyecto-con-npm)
      - [instalación de paquetes](#instalación-de-paquetes)
      - [actualizar dependencias](#actualizar-dependencias)
      - [seguridad npm](#seguridad-npm)
      - [crear paquete npm](#crear-paquete-npm)

# JavaScript

## Frontend

### Conceptos básicos

1. DOM (Document Object Model)

Cuando escribimos la esturcutra de la página en HTML el navegador transforma todos esos tags en objetos y sí puede entender y representarlos.

2. CSSOM (CSS Object Model)

Transformación de nuestro archivo css en objetos comprensibles para elnavegador.

3. Render Tree

Es el DOM y el CSSOM conjuntamente para pintar la página.

Entonces nuestro código es interpretado por el naegador de la siguiente manera:

1. transforma nuestro código a Bytes, cuando escribimos html tenemos un tag `<meta charset="UTF-8">` donde especificamos la codificación de esos bytes
2. mediante la codificación especificada transforma esos bytes en caracteres
3. con esos caracteres crea unos tokens donde especifica esta es la tag html de abertura esta es la de cierre y así

Cuando hablamos de `atributo` hace referencia a cómo se inicializa la etiqueta HTML `<input type="text">` type es su atributo. Cuando usamos JS para leer el DOM y transformamos en objetos las diferentes etiquetas pasamos a tener propiedades.


## JS básico

JS es un lenguaje:
1. interpretado (no compila, lee línea por línea)
   1. Realmente cuando el navegador lee el código JS el motor de JavaScript V8 crea un árbol con las palabras clave de nuestro código, interpreta ese código y lo traduce para genera el bytecode que el navegador lo pueda entender. Así q realmente **sí se compila**
2. orientado a objetos
3. débilmente tipado 
4. dinámico (son los que corren en runtime directamente, no hay q compilar=> pasarlo a bytecode se abre directamente en el navegador)

### Lenguajes forwards y backwards

Un lenguaje `forward` es que podamos correr versiones furutras en motores anteriores, javascript no funciona así. Es decir si queremos utilizar sintaxis moderna de JS en navegadores desactualizados (con motores JS antiguos) nuestro código generará errores. Para evitar esto se puede usar compiladores como `BABEL` para traducir sintaxi moderna en JS clásico.

Un lenguaje `backward` son programas que podemos correr sintaxi antigua en motores de JS modernos. JS pertenece a este tipo.

Cuando sale una nueva funcionalidad de JS se tiene que validar por W3schools y aceptarlo como un standard en ese momento se puede utilizar que el navegador lo va a entender.

### Funciones

Hay dos tipos:

1. Declarativas

```javascript
function imprimeNombre(nombre){
    return `mi nombre es ${nombre}`;
}
```
A las funciones declarativas podemos aplicarles hoisting(solo sucede en ECMAScript 5 o inferior), es decir podemos llamarlas aunq estén declaradas más abajo en el código, gracias a que las declaramos con la palabra reservada `function`.

hoisting, levantamiento de las declaraciones. EL motor de compilación lee el código y compila primero las declariaciones y luego ejecuta el resto de código

2. Expresiones o funciones anónimas

```javascript
var suma = function(a,b){
    return a+b
}

```

### scope

Es el alcance que tienen las variables. Hay dos tipos de scope, el global y el local (el espacio dentro de las funciones). Dentro del scope local se puede acceder al scope global pero desde el global no se puede acceder al local. 

### Coerción o casting

Casting implícito o explícito. Implícito es q el compilador nos transforma en el tipo directamente
```javascript
var st = 4+"8"
st === string // al detectar el + concatena

var n = 4*"8"

n === number // al tener una * lo transforma  a número
```

Explícito es cuando nosotros forzamos la conversión

```javascript
var x = String(5)
x === string
```
### Función constructora

Para generar objetos, hacemos un template del objeto

```javascript
//objeto

var user = {
    nombre: 'David',
    edad: 37,
    imprimirDatos: function(){
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}
```

Para utilizar una función constructora:

```javascript
function user(nombre,edad){
    this.nombre= nombre,
    this.edad= edad,
    this.imprimirDatos = function(){
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }

}
```

### Filter map .find() forEach() .some() 

Nos permite recorrer arrays

```javascript
var miArray = [
    {nombre : "david", edad : 37},
    {nombre : "david_2", edad : 47},
    {nombre : "david_3", edad : 57},
    {nombre : "david_4", edad : 67},
    {nombre : "david_5", edad : 77},
]
```

Filter

```javascript
var x = miArray.filter(function(item){
  return item.edad >60
})
x  //{ nombre: "david_4", edad: 67 },{ nombre: "david_5", edad: 77 }]
```

MAP

```javascript
var y = miArray.map(function(item){
  return item.nombre
})
y //  [ "david", "david_2", "david_3", "david_4", "david_5" ]
```

find()

```javascript
var user = miArray.find(function(item){
  return item.nombre= "david_4"
})
user // { nombre: "david_4", edad: 37 }
```

forEcah()

```javascript
miArray.forEach(function(item){
  console.log(item)
})
```
some() => nos devuelve true o false dependiendo si algún elemento del array cumple la condición 

```javascript
var jovenes = miArray.some(function(item){
  return item.edad<40
})

jovenes // true
```

### default params y templates literal ``

Valores por defecto para nuestras funciones y :

```javascript
function myFunction(name="david", age="37"){
    console.log(`mi nombre es ${name} y tengo ${age} años`)
}
```

### let const multilínea en strings 

podemos usar para guardar variables como let o como const.

`Let` solo está disponible en el bloque donde la declaro. Otra cosa importante es que una vez declaro una variable con let la puedo reasignar pero no la puedo redeclarar

```javascript
//  redeclaración, esto no está permitido con let
let world = 'world'
let world = 'world +'
// reasignación, sí permitido con let
let world = 'world'
world = 'world +'

```
Si usásemos `var` podemos redeclarar la variable.


`const` permite establecer una variable como constante, no se puede reasignar su valor.

Para poder hacer un string multilínea hacemos:

```javascript
let lorem = `una frase
podemos seguir escribiendo aquí sin tener que concatenar
`
```
### spread operator y destructuring

Spread

nos permite unir arrays

```javascript
let x = [1,2,3,4,5]
let y = [6,7,8,9,10]
let z = [0,...x,...y]

console.log(z);
```

Destructuring:

```javascript
let person = {
    name:"David",
    age:37
}
```

podemos desestructurar el objeto en variables

```javascript
let {name, age} = person
```
tenemos que usar un nombre de variable igual que los atributos del objeto.

### objetos mejorados

```javascript
let name = "DAVID"
let age = 37

//antes para crear el objeto era

obj = {name:name,age:age}

// ahora puede ser así

obj = {name,age}
```

### arrow function

Nos da una sintaxi más reducida y un `this` no vinculable

```javascript
const names = [
    {name:'David', age:37},
    {name:'Marc', age:40},
]

// para iterar podemos usar un map con arrow funcion

let listOfNames = names.map(item => item.name)
console.log(listOfNames)
```
o podemos crear funciones más amigables, no uso return ni llaves...es un código más limpio

```javascript

let square = num => num*num

console.log(square(2))
```
### promises

para crear una promesa necesitamos:

```javascript
const miPromesa = ()=>{
    return new Promise((resolve,reject)=>{

        if(true){
            resolve('all rigth')
        }else{
            reject('ups..wrong')
        }

    })
}

miPromesa()
.then(resultado => console.log(resultado)) //all rigth
.catch(elError=> console.log(elError))//ups..wrong
```

### Clases

```javascript

class Calculator{

    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB

        return this.valueA + this.valueB
    }
}

const calc = new Calculator()

console.log(calc.sum(2,2));//4
```

### modules

Para poder ver su funcionalidad hay que correrlos en node o con live server

creao un archivo .js q contiene 

```javascript

const hello = ()=> {
    console.log((`Hello, David!`));
  }

export default hello;
```
y un .html

```html
<script type="module">
    import saludar from './miModulo.js';
    saludar(); // Hello, John!
</script>
```

con el default podemos importar con cualquier nombre pero la manera de exportar nominal es la siguiente

```javascript
const hello = (nombre)=> {
    console.log((`Hello, ${nombre}!`));
  }

export {hello};
```
y en el html

```html
<script type="module">
    import {hello} from './miModulo.js';
    hello('Marc'); // Hello, John!
</script>

```

si usamos nodeJS el sistema de modulos es diferente 
si solo exportamos una cosa 

```javascript
const hello2 = (nombre)=>{
    return `Hello, ${nombre}!`;
}

module.exports = hello2
```
en otro archivo js

```javascript
const muFuncion = require('./module_nodejs')

console.log(muFuncion('Dvid'));
```

si tengo más de una cosa para exportar

```javascript
const hello2 = (nombre)=>{
    return `Hello, ${nombre}!`;
}

const nombre = "David"

module.exports.saludo = hello2
module.exports.nombre = nombre

//ó tb puede ser así


module.exports = {
    saludo: hello2,
    nombre: nombre
}
```
el import es así

```javascript
const muFuncion = require('./module_nodejs')

console.log(muFuncion.nombre)
console.log(muFuncion.saludo('Dvid'));
```

### Generator

```javascript
function* helloWorld(){
    if(true){
        yield 'hello '
    }
    if(true){
        yield 'world!'
    }
}

const myGenerator = helloWorld()

console.log(myGenerator.next().value);//hello
console.log(myGenerator.next().value);// world
console.log(myGenerator.next().value);//undefined

```
### include en arrays

nos permite saber si en un array hay un elemento concreto

```javascript
let numeros = [1,2,3,4,5,6,7]

if(numeros.includes(5)){
    console.log(`se ha encontrado el 5 en la posición ${numeros.indexOf(5)}`);
}

//se ha encontrado el 5 en la posición 4
```
### potenciación

```javascript
let base = 4
let exponente = 2

let result = base**exponente
```

### Object.entries y object.values

me permite generar una matriz a partir de objetos

```javascript
const data = {
    nombre: 'david',
    apellido: 'martin',
    edad:37
}

const entries = Object.entries(data)

console.log(entries);
/*

 [ 
     [ 'nombre', 'david' ], 
     [ 'apellido', 'martin' ], 
     [ 'edad', 37 ] 
]

*/
const values = Object.values(data)
console.log(values);
/*
[ 'david', 'martin', 37 ]

*/
```

### padStart padEnd

añade caracteres antes o después de una cadena de texto

```javascript
let str = "David"

console.log(str.padStart(str.length+3,'hi ')); // hi david
console.log(str.padEnd(str.length+7,' Martin')); // david martin
```

### async await

normalmente se usa con promesas

```javascript
const helloWorld = ()=>{
    return new Promise((resolve, reject)=>{

        (true)
        ? setTimeout(()=>resolve('Hello wolrd'), 3000)
        : reject(new Error('Test error'))
    })
}
// const helloAsync = async()=>{...}

async function helloAsync(){
    try{

        console.log('codigo q se corre inmediatamente');
        const hello = await helloWorld();
        console.log(hello);

    }catch(error){

        console.log(error);
    }
}
helloAsync()
```
### rest operator (operador de reposo)

```javascript
const obj = {
    nombre: 'david',
    apellido: 'martin',
    edad:37
};

let {nombre,...all}=obj

console.log(nombre, all);
//david { apellido: 'martin', edad: 37 }
```

### spread operator en objetos

```javascript

const obj = {
    apellido: 'martin',
    edad:37
};



const obj1 = {
    nombre: 'david',
    ...obj

};

console.log(obj1);
//{ nombre: 'david', apellido: 'martin', edad: 37 }
```
### promise finally

```javascript

const helloWorld = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
            ?setTimeout(()=>resolve('Hello wolrd'),3000)
            :reject('TEst error')
    })
};

helloWorld()
.then(response=> console.log(response))
.catch(error=> console.log(error))
.finally(()=>console.log('finaliza la promesa'))
```

### regexData

```javascript

const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/

const match = regexData.exec('2018-04-20')
 const {year, month,day} = match.groups

console.log(year, month, day);
```

### flat en arrays

nos permite desplegar arrays anidados y pasar su contenido al array principal

```javascript
let miArray = [1,2,3,[1,2,3,[1,2,3]]]
let nivel_anidamiento = 2

console.log(miArray.flat(nivel_anidamiento));
```

### flatmap

```javascript
let miArray2 = [1,2,3,4,5,6,]
console.log(miArray2.flatMap(value=>[value,value*2]))
```

### trimStart trimEnd es10

```javascript
let str = "   hey David!   "

console.log(str.trim());// elimina espacios x delante y x detrás
console.log(str.trimStart()); // solo por delante
console.log(str.trimEnd());//solo por detrás
```

### error binding en bloque catch

en nuestro bloque try-catch antes debíamos pasar el objeto error ehora lo podemos usar sin necesidad de pasarlo

```javascript
try{

}catch{
    error
}
```

### fromEntries

permite convertit un array en un objeto

```javascript
let entries = [["name","david"],["age",37]]

let myObj =Object.fromEntries(entries)

console.log(myObj);//{ name: 'david', age: 37 }
```

### symbol

```javascript
let mySymbol = 'My symbol'

let symbol = Symbol(mySymbol)
console.log(symbol.description);
```

### Scope y closure

#### Scope

Es el alcance que tendrá nuestra variable o lo q es lo mismo a qué bloques de código tendrá aceso la variable.

Tenemos dos scopes el local y el global.

```javascript
// ámbito global

var hello = 'hello'
let world = 'world'
let world = 'world +'
const helloWorld = 'Hello World'


const anotherFunction = ()=>{
    // se pueden ejecutar
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

```

Podemos declarar una varible como global dentro de una función

```javascript

function anotherFunction2(){
    globalVar = 'hey'
}
anotherFunction2()
console.log(globalVar); 
```
El scope local se refiere a dentro de un bloque contenido entre llaves `{}`. Cuando tenemos que usar una variable primero busca esa variable en local y va extendiendose la búsqueda al siguiente scope hasta llegar al global.

```javascript
const hello = 'i m global

const anotherFunction4 = () =>{ 
      const hello = 'i am local'
      console.log(hello); 
}

anotherFunction4() // i am local
```

Es importante saber que cuando usamos `var` tiene ámbito de función pero si utilizamos `let` o `const` tienen scope de bloque 

```javascript
const anotherFunction5 = () =>{ 
      if(true){
          var x = 1
          let y = 2
          const z = 3
      } 

      console.log(x); // se imprime, xq var tiene scope de función
      console.log(y);// no se imprime pq está en otro bloque 
      console.log(z);// no se imprime pq está en otro bloque 
}

anotherFunction5()
```

### Closure

Es la combinación de una función y el ámbito léxico en la que fue declarada. Recuerda el ámbito en la que fue declarada.

```javascript
const anotherFunction = (coins) =>{ 
       var saveCoins = 0
       saveCoins += coins
       console.log(`moneyBox ${saveCoins}`); 
}

anotherFunction(5)// 5
anotherFunction(10)// 10
```

Vemos cómo no acumula el valor para ello debemos declarar la función con estructura de closure

```javascript
const anotherFunction = () =>{ 

    var saveCoins = 0

    const countCoints = (coins) =>{ 
        saveCoins += coins
        console.log(`moneyBox ${saveCoins}`);    
    }
    return countCoints
}

const myMoneyBox = anotherFunction()

myMoneyBox(4)// 4
myMoneyBox(6)// 10
myMoneyBox(10)// 20
```
otro ejemplo de closure 

```javascript
const buildCount = (i) =>{ 

    let count = i
    
    const displayCount = () =>{ 
        console.log(count++);
    }
    return displayCount;
}

const myCount = buildCount(1);

myCount()// 1
myCount()// 2
myCount()// 3

const anotherCount = buildCount(10) // creamos otro closure separado del primero

anotherCount()// 10 
anotherCount()// 11
myCount()// 4
```

Con los closure podemos crear valores privados dentro de las funciones.

```javascript
const person = () =>{ 

    var saveName = 'Name'

    return {
        getName : ()=>{
            return saveName;
        },
        setName: (name)=>{
            saveName = name 
        }
    }
       
}
const myPerson = person()

console.log(myPerson.getName());// name
myPerson.setName('David')
console.log(myPerson.getName());// david
```

closure y loops

```javascript
const anotherFunction = () =>{ 
      for (let i = 0; i < 10; i++) {
          setTimeout(()=>{
            console.log(i);
          },1000)        
      } 
}

anotherFunction()//0...9

```
en el caso de let nos devuelve 0 al 9 pq declaramos la variable como let por lo q en cada iteración genera un bloque nuevo dnd la variable no cambia su valor

```javascript
const anotherFunction = () =>{ 
      for (var i = 0; i < 10; i++) {
          setTimeout(()=>{
            console.log(i);
          },1000)        
      } 
}

anotherFunction()// escribe 10 veces 10

```
al declararlo como var no genera este bloque y el resultado es q el timeout coge el valor de la última itración

### Asincronismo

JS es un lenguaje de progrmación asíncrono no bloqueante con un manehador de eventos, `event loop`, implementado en un único hilo en sus interfaces de ebtrada y de salida.

`memory heap`, es el espacio de memoria compartido para toda nuestra app

`pila de ejecución` es dnd se van almacenando por orden de llegada las diferentes instrucciones del programa.

`cola de tareas` el event loop detecta cuando no hay más tareas en la pila y procesa las tareas de la cola como los callbacks.

#### XMLHttprequest object y callbacks

instalamos el paquete npm `npm install xmlhttprequest --save`

los callbacks pueden correr en todos los navegadores pero podemos caer en el callbcak hell.

Hay que tener en cuenta que toda comunicación por internet se devuelve la info como texto plano. Así que la respuesta debe ser parseada a JSON.

Por convención las callbacks reciben dos parámetros (error,data)

Para hacer peticiones http utilizaremos el objeto XMLHttprequest. Este objeto tiene una propiedad que nos da info del estado de la petición, `readyState`. Tenemos 4 estados:

```
readyState 	Holds the status of the XMLHttpRequest.
            0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready
```
cuando este estado cambia se ejecuta el método `onreadystatechange`. 

También tiene una propiedad `status`

``` 
status 	200: "OK"
        403: "Forbidden"
        404: "Page not found"
        For a complete list go to the Http Messages Reference
```

```javascript

// tenemos que instalar un paquete npm install xmlhttprequest --save

const apiMorty = "https://rickandmortyapi.com/api/character/";

let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url, cb){

    let xmlHttp = new XMLHttprequest();

    xmlHttp.open('GET',url,true)// ponemos true para activar el asincronismo

    xmlHttp.onreadystatechange = function(event){

        if(this.readyState === 4 && this.status === 200){
                        
            cb(null,JSON.parse(this.responseText))
            // las cb siempre tienen (objeto error, data) si no pasamos el error ponemos null.
            
        }
    }

    xmlHttp.send()
}

fetchData(apiMorty,(error1,data1)=>{
    
    if(error1){
        return console.error(error1)
    }else{

        if(data1){
            fetchData(apiMorty+data1.results[0].id, (error2,data2)=>{
                if(error2){
                    //return console.error(error2)
                }else{
                    if(data2){
                        fetchData(data2.origin.url,(error3,data3)=>{
                            if(error3){
                             //   return console.error(error3)
                            }else{
                                if(data3){
                                    console.log(data1.info.count);
                                    console.log(data2.name);
                                    console.log(data3.dimension);

                                }
                            }
                        })
                    }
                }
            } )
        }
    }

})

```
#### usando promesas

require un transpilador como babel para q funcione con todos los navegadores

Actualmente JS puede usar `fetch` q se basa en promesas. NodeJS no soporta la API de fetch. Se debe ejecutar en el navegador

usan el objeto promise para ser ejecutadas. Se basan en q algo va a suceder ahora, en un rato o nunca.

esta es la estuctura de una promesa

```javascript
const getAPI = ()=>{

    return new Promise((resolve,reject)=>{

        if(true){
            resolve('hey')
        }else{
            const error = new Error('uppps')
            reject(error)
        }
    })
}

getAPI()
.then(response =>console.log(response))
.catch(error=>console.log(error))
```
para poder ejecutar varias promesas encadenadas usamos `promise.all()`

```javascript
Promise.all([promesa_1(), promesa_2()])
   .then(response=>{
       console.log('array con los resultados de ambas promsesas');
   })
   .catch(error=>{
       console.error('error');
   })
```

conexión con la API

```javascript

let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url) => {

    return new Promise((resolve, reject)=>{

        const xmlHttp = new XMLHttprequest();

        xmlHttp.open('GET',url,true)// ponemos true para activar el asincronismo
    
        xmlHttp.onreadystatechange =()=>{

            if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
                                        
                resolve(JSON.parse(xmlHttp.responseText))
                
            }
        }
        xmlHttp.send()
    })
}


fetchData(apiMorty)
.then(data=>{
    console.log(data.info.count);
    return fetchData(`${apiMorty}${data.results[0].id}`)
})
.then(data=>{
    console.log(data.name);
    return fetchData(data.origin.url)
})
.then(data=> console.log(data.dimension))
.catch(error=> console.log(error))
```

#### usando async await

require un transpilador como babel para q funcione con todos los navegadores  

permite q nuestro códico se comporte como asíncrono.

```javascript
// estructura básica de async await

const getApi = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
           ? setTimeout(()=> resolve('great'),2000)
            : reject(new Error('error'))
        
    })
}

const getAPI_async = async () =>{

    try{
        const something = await getApi()
        console.log(something);
    }catch(error){
        console.log(error);
    }
}

console.log('before');
getAPI_async()
console.log('after');
// before
//after
//great
```

si queremos consumir una API creamos la promesa necasaria y después constuimos el async await


```javascript
let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url) => {

    return new Promise((resolve, reject)=>{

        const xmlHttp = new XMLHttprequest();

        xmlHttp.open('GET',url,true)// ponemos true para activar el asincronismo
    
        xmlHttp.onreadystatechange =()=>{

            if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
                                        
                resolve(JSON.parse(xmlHttp.responseText))
                
            }
        }
        xmlHttp.send()
    })
}

module.exports = fetchData;


const API_Morty = "https://rickandmortyapi.com/api/character/";

const fetchData = require('./utils/fetchData')

const anotherFunction = async (url) =>{

    try {
        const getData  = await fetchData(url)
        const character = await fetchData(`${url}${getData.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log(getData.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    } catch (error) {
        
    }
}

anotherFunction(API_Morty)
```

### gestión de paquetes con npm

Node package manager, gestor de paquetes de node.

>está esplicado en el curso de NODE

#### Para iniciar un proyecto con npm:

1. creamos la carpeta del proyecto
2. git init para inicializar nuestro repo
3. npm init => crea el archivo package.json dnd especificamos la configuración del proyecto
   1. npm init -y => inicializa de manera predeterminada
   2. `npm set init.author.name "David Martin Vergues"`
      `npm set init.author.email dmvergues@gmail.com`
      `npm set init.license MIT`
      con este comando fijamos q cada vez q inicializemos un proyecto `npm init` los datos introducidos estén por defecto 

#### instalación de paquetes

Para instalar paquetes lo podemos hacer como dependencias de producción, necesario para q la app funcione bien

```
npm install moment

//ó

npm install moment --save
npm i moment -S
```

si es dependencia de desarrollo

```
npm install moment --save-dev

// ó 

npm i moment -D

```

Todos estos modos instala de manera local en nuestro proyecto. Si queremos instalar un paquete globalmente como nodemon hacemos

```
sudo npm install -g nodemon
// ó

sudo npm i -g nodemon
```

para saber la lista de paquetes globales

```
npm list -g --depth 0
```

Podemos simular una instalación de un paquete para poder ver el output q nos devolvería, pero no se instala

```
npm install react --dry-run
```
para forzar q se instale la última versión del paquete 

```
npm install webpack --force
```

si instalamos sin especificar el flag --save-dev podemos modificar manuealmente el package.json, una vez modificado éste
podemos correr `npm install` lo q revisará el archivo package.json y vuelve a instalar todo de nuevo.

si queremos una versión concreta de un paquete

```
npm i json-server@0.15.2
```

#### actualizar dependencias 

primero listamos los paquetes del proyecto

```
npm list
```
para listar los paquetes desactualizamos

```
npm outdate
```

para actualizar a la última versión

```
npm update
```
si queremos actualizar solo un paquete concreto 

```
npm install json-server@latest
```
para desinstalar un paquete podemos

```
npm uninstall json-server
```
podemos desintalar un paquete de nuestro proyecto pero manteniendolo en el package.json

```
npm uninstall json-server --no-save
```
Podemos borrar el cache de npm 

```
npm cache clean --force
```
verificamos que no hay nada en cache de npm
```
npm cache verify
```

Si tuvieramos algún paquete no instalado de manera correcta lo mejor es eliminar la carpeta `node modules` y volver a instalar dependencias con `npm install`. 

#### seguridad npm

podemos correr `npm audit` esto inspecciona el proyecto en busca de paquetes con errores/problemas/desactualizados. Si detecta alguno nos sugiere correr el comando `npm audit fix --force`. 

#### crear paquete npm

creamos nuestro directorio con el nombre del paquete y hacemos un npm init. Creamos dos carpetas src dnd estará nuestro código y bin q contendrá el archivo (global.js)coon las instrucciones para correr el código.

Una vez hemos escrito nuestra lógica tenemos que exportar `module.exports = randomMsg; ` y en global.js 
```
#!/usr/bin/env node

let random = require('../src/index.js')

random()

```
finalmente en el archivo package.json tenemos que añadir lo siguiente
```json
"bin":{
    "random-msg": "./bin/global.js"
  },
  "preferGlobal": true

```

para probarlo en local tenemos que crear un link en npm, así q nos situamos en la carpeta del proyecto y `sudo npm link` como está configurado como paquete global lo podemos correr desde la terminal directamente con el nombre que le pusimo `andom-msg`.

tb lo podemos instalar durectamente 

```
sudo npm install -g ~/Documentos/JavaScript/4-npm/random-messages
```
este paquete creado lo podemos publicar en npm para ello nos logueamos en npm mediante la terminal
```
npm adduser 
```
nos preguntará user y password finalmente hacemos `npm publish`.

PAra publicarlo tenemos que tener un buen readme y tener asociado el paquete a github para ello inicializamos un repo y volvemos a hacer npm init para q lo detecte automáticamnete y nos lo añada al archivo package.json Finalmente especificamos que tipo de cambio hemos hecho `npm version major | minor| patch` finalmente lo volvemos a publicar `npm publish`