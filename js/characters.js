function getAppearance(num){
    fetch("https://swapi.dev/api/people/", { mode: "cors", size: 100 })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response.results);
    console.log(response.results[num])
  });
}

getAppearance(1)

