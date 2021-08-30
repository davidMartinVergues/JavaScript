
//modulos
import {sayHi} from './module_nodejs';

console.log(sayHi()); // Hello, John!
// como node lo corro en servidor de node

const muFuncion = require('./module_nodejs')

console.log(muFuncion.nombre)
console.log(muFuncion.saludo('Dvid'));

// variables

let x = 10
const nombre = "David"
var edad = 37


console.log(imprimeNombre('David'))

// funciones

//declarativa
function imprimeNombre(nombre){
    return `mi nombre es ${nombre}`;
}


// expresión

var suma = function(a,b){
    return a+b
}

console.log(suma(10,10))

// default params y template literal

function myFunction(name="david", age="37"){
    console.log(`mi nombre es ${name} y tengo ${age} años`)
}

myFunction()


let lorem = `una frase
podemos seguir escribiendo aquí sin tener que concatenar
`

console.log(lorem);

let person = {
    name:"David",
    age:37,
    country: 'spain'
}

let {name, age,country} = person

console.log(country);

// spread opeartor

let x = [1,2,3,4,5]
let y = [6,7,8,9,10]
let z = [0,...x,...y]

console.log(z);

let name = "DAVID"
let age = 37

//antes para crear el objeto era

obj = {name,age}

console.log(obj)

// arrow function

const names = [
    {name:'David', age:37},
    {name:'Marc', age:40},
]

// para iterar podemos usar un map

let listOfNames = names.map((item) => item.name)
console.log(listOfNames)



let square = num => num*num

console.log(square(2))

// promesas para trabajar asincronismo

const miPromesa = ()=>{
    return new Promise((resolve,reject)=>{

        if(false){
            resolve('all rigth')
        }else{
            reject('ups..wrong')
        }

    })
}

miPromesa()
.then(resultado => console.log(resultado))
.then(()=> console.log('funcionó'))
.catch(elError=> console.log(elError))

// clases

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

console.log(calc.sum(2,2));

//  generators

function* helloWorld(){
    if(true){
        yield 'hello '
    }
    if(true){
        yield 'world!'
    }
}

const myGenerator = helloWorld()

console.log(myGenerator.next().value);
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);

// include

let numeros = [1,2,3,4,5,6,7]

if(numeros.includes(5)){
    console.log(`se ha encontrado el 5 en la posición ${numeros.indexOf(5)}`);
}

//exponentes

let base = 4
let exponente = 2

let result = base**exponente
console.log(result);

// object entries

const data = {
    nombre: 'david',
    apellido: 'martin',
    edad:37
}

const entries = Object.entries(data)
const values = Object.values(data)

console.log(entries);
console.log(values);

// padStart padEnd

let str = "David"

console.log(str.padStart(str.length+3,'hi '));
console.log(str.padEnd(str.length+7,' Martin'));

// async await

const helloWorld = ()=>{
    return new Promise((resolve, reject)=>{

        (true)
        ? setTimeout(()=>resolve('Hello wolrd'), 3000)
        : reject(new Error('Test error'))
    })
}

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

// rest operator

const obj = {
    nombre: 'david',
    apellido: 'martin',
    edad:37
};

let {nombre,...all}=obj

console.log(nombre, all);


// spread operator 

const obj = {
    apellido: 'martin',
    edad:37
};



const obj1 = {
    nombre: 'david',
    ...obj

};

console.log(obj1);

// promise.find

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

// regexData

const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/

const match = regexData.exec('2018-04-20')
 const {year, month,day} = match.groups

console.log(year, month, day);


// flatmap

let miArray = [1,2,3,[1,2,3,[1,2,3]]]
let nivel_anidamiento = 2

console.log(miArray.flat(nivel_anidamiento));

let miArray2 = [1,2,3,4,5,6,]
console.log(miArray2.flatMap(value=>[value,value*2]))

// trimStart

let str = "   hey David!   "

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// fromEntries

let entries = [["name","david"],["age",37]]

let myObj =Object.fromEntries(entries)

console.log(myObj);

// symbol

let mySymbol = 'My symbol'

let symbol = Symbol(mySymbol)
console.log(symbol.description);