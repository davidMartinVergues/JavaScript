// scope

// ámbito global

var hello = 'hello'
let world = 'world'
let world = 'world +'
const helloWorld = 'Hello World'


const anotherFunction = ()=>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction()

function anotherFunction2(){
    globalVar = 'hey'
}

anotherFunction2()

console.log(globalVar);

const anotherFunction3 = () =>{

    var localVar = globalVar = 'I m global'

}

anotherFunction3()

console.log(localVar);

// scope local

const anotherFunction4 = () =>{ 
      const hello = 'hello world'
      console.log(hello); 
}

anotherFunction4()

const anotherFunction5 = () =>{ 
      if(true){
          var x = 1
          let y = 2
          const z = 3
      } 

      console.log(x);
      console.log(y);
      console.log(z);
}

anotherFunction5()

let x = 1

{
    x = 2
    console.log(x);
}

console.log(x);

// closure



const anotherFunction = (coins) =>{ 
       var saveCoins = 0
       saveCoins += coins
       console.log(`moneyBox ${saveCoins}`); 
}

anotherFunction(5)
anotherFunction(10)

// estructura de closure

const anotherFunction = () =>{ 

    var saveCoins = 0

    const countCoints = (coins) =>{ 
        saveCoins += coins
        console.log(`moneyBox ${saveCoins}`);    
    }
    return countCoints
}

const myMoneyBox = anotherFunction()

myMoneyBox(4)
myMoneyBox(6)
myMoneyBox(10)

// ámbito léxico 

const buildCount = (i) =>{ 

    let count = i
    
    const displayCount = () =>{ 
        console.log(count++);
    }
    return displayCount;
}

const myCount = buildCount(1);

myCount()
myCount()
myCount()

const anotherCount = buildCount(10)

anotherCount()
anotherCount()
myCount()


// variables privadas dentro de funciones

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

console.log(myPerson.getName());
myPerson.setName('David')
console.log(myPerson.getName());

// loops

const anotherFunction = () =>{ 
      for (let i = 0; i < 10; i++) {
          setTimeout(()=>{
            console.log(i);
          },1000)        
      } 
}

anotherFunction()
