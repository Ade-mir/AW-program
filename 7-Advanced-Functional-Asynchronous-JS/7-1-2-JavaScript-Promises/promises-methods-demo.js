// alt 1
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(function (response) {
    response.json().then(function (pokemons) {
      console.log(pokemons);
    })
  })
// alt2
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(function (response) {
    return response.json()
  })
  .then(function(pokemons){
    console.log(pokemons);
  })


  fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(function (response) {
    return response.json()
  })


  function getJSON(url) {
    return fetch(url).then((res) => res.json());
  }

  getJSON('https://pokeapi.co/api/v2/pokemon/1/')

  var threeFirstPokemons = Promise.allSettled([
    getJSON('https://pokeapi.co/api/v2/pokemon/1/'),
    getJSON('https://pokeapi.co/api/v2/pokemon/2/'),
    getJSON('https://pokeapi.co/api/v2/pokemon/3/')
  ])
  
  threeFirstPokemons
    .then(function(pokemons) {
      console.log(pokemons)
    })
    .catch(function(error) {
      console.log(error)
    })


    function timeout(ms) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          reject(new Error('Timed out'));
        }, ms)
      })
    }

  var getResponseOrTimeout = Promise.race([
    getJSON('http://myapi/1/1'),
    timeout(5000),
  ])
  
  getResponseOrTimeout
    .then(function(response) {
      // ...
    })
