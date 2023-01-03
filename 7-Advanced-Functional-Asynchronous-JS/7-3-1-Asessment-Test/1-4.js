// You have been provided two functions that perform asynchronous operations

// fetch(url) - already exists in the browser
// process(places) - see bottom of task
// Each of the operations return a promise

// Do the following:

// Write a program that fetches information from "https://www.vullum.io/academy/oslo.json", and then process the result before you console.log the processed result at the end
// How could you have converted this program into using async / await?

function process(places) {
  return new Promise((resolve, reject) => {
    let output = places.map((place) => place.name).join(', ');
    setTimeout(() => resolve(output), 1000);
  });
}

fetch('https://www.vullum.io/academy/oslo.json')
  .then(function (places) {
    return process(places);
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error(error);
  });

// Using async await

async function fetchAndProcess() {
  try {
    let response = await fetch('https://www.vullum.io/academy/oslo.json');
    let places = await response.json();
    let result = await process(places);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchAndProcess();
