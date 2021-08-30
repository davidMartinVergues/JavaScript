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