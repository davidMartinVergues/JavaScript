const messages = ["David","Anna","Jessica","Diego"]

const randomMsg = () =>{ 
       const random = messages[Math.floor(Math.random()*messages.length)]
       console.log(random);
}

module.exports = randomMsg;
