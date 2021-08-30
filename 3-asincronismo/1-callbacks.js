// ejemplo de callback (cb)

function sum (x,y){ 
       return x+y
}

function calc(x,y,cb){
    return cb(x,y)
}

console.log(calc(2,2,sum))

// 

function date(cb){
    console.log(new Date);
    setTimeout(() => {
        
        let date = new Date
        cb(date)

    }, 3000);
}

function printDate(date){
    console.log(date);
}

date(printDate)

// consumir API con callbacks y el objeto XMLHttpRequest

const apiMorty = "https://rickandmortyapi.com/api/character/";

let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url, cb){

    let xmlHttp = new XMLHttprequest();

    xmlHttp.open('GET',url,true)// ponemos true para activar el asincronismo

    xmlHttp.onreadystatechange = function(event){

        if(this.readyState === 4 && this.status === 200){
                        
            cb(null,JSON.parse(this.responseText))
            
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


