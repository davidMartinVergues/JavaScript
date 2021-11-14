// estructura básica de async await

const getApi = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("great"), 2000)
      : reject(new Error("error"));
  });
};

const getAPI_async = async () => {
  try {
    const something = await getApi();
    console.log(something);
  } catch (error) {
    console.log(error);
  }
};

console.log("before");
getAPI_async();
console.log("after");

// consumiendo API

const API_Morty = "https://rickandmortyapi.com/api/character/";

const fetchData = require("./utils/fetchData");

const anotherFunction = async (url) => {
  try {
    const getData = await fetchData(url);
    const character = await fetchData(`${url}${getData.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(getData.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {}
};

anotherFunction(API_Morty);

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
