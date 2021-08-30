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

// consumiendo API

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