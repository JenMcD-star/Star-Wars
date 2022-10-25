const title = document.getElementById("title").innerHTML;
const crawl = document.getElementById("openingCrawl");
const crawlClick = document.getElementById("crawlClick");
const stopCrawl = document.getElementById("stopCrawl");
let div = document.createElement("div");

function getInfo(num){
  getCrawl(num);
  getPeople(num);
  getStarships(num);
  getCars(num);
}
function getCrawl(num) {
  crawlClick.addEventListener("click", function () {
    crawl.style.display = "block";
    fetch(`https://swapi.dev/api/films/${num}`, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        let opening_crawl = response.opening_crawl;
        crawl.innerHTML = `${opening_crawl}`;
      });
  });

  stopCrawl.addEventListener("click", function () {
    crawl.style.display = "none";
  });
}

function getPeople(num) {
  fetch(`https://swapi.dev/api/films/${num}`, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      for (i = 0; i < response.characters.length; i++) {
        let people = response.characters[i];
        fetch(people, { mode: "cors" })
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            let li = document.createElement("li");
            let peopleNames = response.name;
            switch (peopleNames) {
              case "Luke Skywalker":
                li.innerHTML = `<a href ="../Characters/StarWarsCharacters.html#lukeS">${peopleNames}</a>`;
                nameList.appendChild(li);
                break;
              case "Leia Organa":
                li.innerHTML = `<a href ="../Characters/StarWarsCharacters.html#leiaO">${peopleNames}</a>`;
                nameList.appendChild(li);
                break;
              case "Obi-Wan Kenobi":
                li.innerHTML = `<a href ="../Characters/StarWarsCharacters.html#obiW">${peopleNames}</a>`;
                nameList.appendChild(li);
                break;
              case "Darth Vader":
                li.innerHTML = `<a href ="../Characters/StarWarsCharacters.html#darthV">${peopleNames}</a>`;
                nameList.appendChild(li);
                break;
              default:
                li.innerHTML = `${peopleNames}`;
                nameList.appendChild(li);
            }
          });
      }
    });
}

function getStarships(num) {
  fetch(`https://swapi.dev/api/films/${num}`, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      for (i = 0; i < response.starships.length; i++) {
        let ships = response.starships[i];
        fetch(ships, { mode: "cors" })
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            let li = document.createElement("li");
            let shipNames = response.name;
            li.innerHTML = `${shipNames}`;
            shipList.appendChild(li);
          });
      }
    });
}

function getCars(num) {
  fetch(`https://swapi.dev/api/films/${num}`, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      for (i = 0; i < response.vehicles.length; i++) {
        let cars = response.vehicles[i];
        fetch(cars, { mode: "cors" })
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            let li = document.createElement("li");
            let carNames = response.name;
            li.innerHTML = `${carNames}`;
            carList.appendChild(li);
          });
      }
    });
}

if (title == "A New Hope") {
  let num = 1;
  div.innerHTML = `<img src = "../../pictures/1.jpeg" alt="A New Hope Movie Poster"><br>"A New Hope"</img>`;
  document.getElementById("poster").appendChild(div);
  getInfo(num);
}
if (title == "The Empire Strikes Back") {
  let num = 2;
  div.innerHTML = `<img src = "../../pictures/2.jpeg" alt="The Empire Strikes Back Movie Poster"><br>"The Empire Strikes Back"</img>`;
  document.getElementById("poster").appendChild(div);
  getInfo(num);
}
if (title == "Return of the Jedi") {
  let num = 3;
  div.innerHTML = `<img src = "../../pictures/3.jpeg" alt="Return of the Jedi Movie Poster"><br>Return of the Jedi</img>`;
  document.getElementById("poster").appendChild(div);
  getInfo(num);
}
if (title == "The Phantom Menace") {
  let num = 4;
  div.innerHTML = `<img src = "../../pictures/4.jpeg" alt="The Phantom Menace Movie Poster"><br>The Phantom Menace</img>`;
  document.getElementById("poster").appendChild(div);
  getInfo(num);
}
if (title == "Attack of the Clones") {
  let num = 5;
  div.innerHTML = `<img src = "../../pictures/5.jpeg" alt="Attack of the Clones Movie Poster"><br>Attack of the Clones </img>`;
  document.getElementById("poster").appendChild(div);
  getInfo(num);
}
if (title == "Revenge of the Sith") {
  let num = 6;
  div.innerHTML = `<img src = "../../pictures/6.jpeg" alt="Revenge of the Sith Movie Poster"><br>Revenge of the Sith </img>`;
  document.getElementById("poster").appendChild(div);
  getInfo(num);
}
