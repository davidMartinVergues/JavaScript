// estructura básica de una promise

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

// promises encadenadas usando promise.all()

// Promise.all([promesa_1(), promesa_2()])
//    .then(response=>{
//        console.log('array con los resultados de ambas promsesas');
//    })
//    .catch(error=>{
//        console.error('error');
//    })

// conexión cn api
const apiMorty = "https://rickandmortyapi.com/api/character/";

const fetchData = require('./utils/fetchData')

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