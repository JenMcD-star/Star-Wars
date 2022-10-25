const lukeHomeWorld = document.getElementById("lukeHome");
const leiaHomeWorld = document.getElementById("leiaHome");
const obiHomeWorld = document.getElementById("obiHome");
const darthHome = document.getElementById("darthHome");
function getInfo(num) {
  fetch("https://swapi.dev/api/people/", { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let height = response.results[num].height;
      let weight = response.results[num].mass;
      let hair_color = response.results[num].hair_color;
      let eye_color = response.results[num].eye_color;
      let skin_color = response.results[num].skin_color;
      let gender = response.results[num].gender;
      let appearance = `Height: ${height} <br> Weight: ${weight} <br> Hair: ${hair_color} <br> Eye Color: ${eye_color}<br> Skin Color: ${skin_color} <br> Gender: ${gender}`;
      let name = response.results[num].name;

      switch (name) {
        case "Luke Skywalker":
          let li = document.createElement("li");
          li.innerHTML = appearance;
          lukeAppearance.appendChild(li);

          fetch("https://swapi.dev/api/films")
            .then(function (response) {
              return response.json();
            })
            .then(function (response) {
              getFilms(0, lukeFilms, response);
              getFilms(1, lukeFilms, response);
              getFilms(2, lukeFilms, response);
              getFilms(5, lukeFilms, response);
            });
          Promise.all([
            fetch("https://swapi.dev/api/starships/12/").then((resp) =>
              resp.json()
            ),
            fetch("https://swapi.dev/api/starships/22/").then((resp) =>
              resp.json()
            ),
          ]).then(function (response) {
            getShips(response, shipList);
            getPlanet(1, lukeHomeWorld);
          });
          break;
        case "Leia Organa":
          let lii = document.createElement("li");
          lii.innerHTML = appearance;
          leiaAppearance.appendChild(lii);
          fetch("https://swapi.dev/api/films")
            .then(function (response) {
              return response.json();
            })
            .then(function (response) {
              getFilms(0, leiaFilms, response);
              getFilms(1, leiaFilms, response);
              getFilms(2, leiaFilms, response);
              getFilms(3, leiaFilms, response);
              getFilms(4, leiaFilms, response);
              getFilms(5, leiaFilms, response);

              getPlanet(2, leiaHomeWorld);
            });

          break;
        case "Obi-Wan Kenobi":
          let lli = document.createElement("li");
          lli.innerHTML = appearance;
          obiAppearance.appendChild(lli);
          fetch("https://swapi.dev/api/films")
            .then(function (response) {
              return response.json();
            })
            .then(function (response) {
              getFilms(0, obiFilms, response);
              getFilms(1, obiFilms, response);
              getFilms(2, obiFilms, response);
              getFilms(3, obiFilms, response);
              getFilms(4, obiFilms, response);
              getFilms(5, obiFilms, response);
            });

          Promise.all([
            fetch("https://swapi.dev/api/starships/48/").then((resp) =>
              resp.json()
            ),
            fetch("https://swapi.dev/api/starships/59/").then((resp) =>
              resp.json()
            ),
            fetch("https://swapi.dev/api/starships/64/").then((resp) =>
              resp.json()
            ),
            fetch("https://swapi.dev/api/starships/65/").then((resp) =>
              resp.json()
            ),
            fetch("https://swapi.dev/api/starships/74/").then((resp) =>
              resp.json()
            ),
          ]).then(function (response) {
            getShips(response, obiShip);
            getPlanet(20, obiHomeWorld);
          });
          break;
        case "Darth Vader":
          let ll = document.createElement("li");
          ll.innerHTML = appearance;
          darthAppearance.appendChild(ll);

          fetch("https://swapi.dev/api/films")
            .then(function (response) {
              return response.json();
            })
            .then(function (response) {
              getFilms(0, darthFilms, response);
              getFilms(1, darthFilms, response);
              getFilms(2, darthFilms, response);
              getFilms(5, darthFilms, response);
            });
          fetch("https://swapi.dev/api/starships/13/")
            .then((resp) => resp.json())
            .then(function (response) {
              let li = document.createElement("li");
              let name = response.name;

              let model = response.model;

              let manufacturer = response.manufacturer;

              let cost = response.cost_in_credits;

              let ships = `Name: ${name} <br> Model: ${model} <br> Manufacturer: ${manufacturer} <br> Cost: ${cost}`;

              li.innerHTML = `${ships}`;
              darthShip.appendChild(li);
            });
          getPlanet(1, darthHome);
          break;
        default:
          "error";
      }
    });
}

function getPlanet(num, name) {
  fetch(`https://swapi.dev/api/planets/${num}/`)
    .then((resp) => resp.json())
    .then(function (response) {
      let homeworld = response.name;
      let rotation = response.orbital_period;
      let orbit = response.orbital_period;
      let diameter = response.diameter;
      let climate = response.climate;
      let gravity = response.gravity;
      let terrain = response.terrain;
      let surfaceWater = response.surface_water;
      let population = response.population;
      let div = document.createElement("div");
      let sentence = `Name: ${homeworld}<br>Rotation: ${rotation}<br> Orbit: ${orbit}<br>Diameter: ${diameter}<br> Climate: ${climate}<br> Gravity: ${gravity}<br>
    Terriain: ${terrain}<br> Surface Water: ${surfaceWater}<br> Population: ${population}`;
      div.innerHTML = sentence;
      name.appendChild(div);
    });
}
function getShips(response, parent) {
  for (i = 0; i < response.length; i++) {
    let li = document.createElement("li");
    let name = response[i].name;

    let model = response[i].model;

    let manufacturer = response[i].manufacturer;

    let cost = response[i].cost_in_credits;

    let ships = `Name: ${name} <br> Model: ${model} <br> Manufacturer: ${manufacturer} <br> Cost: ${cost}`;

    li.innerHTML = `${ships}`;
    parent.appendChild(li);
  }
}
function getFilms(num, name, response) {
  let film = response.results[num].title;
  let li = document.createElement("li");
  li.innerHTML = `<a href= "../Films/${film}.html">${film}</a>`;
  name.appendChild(li);
}
function getAppearance() {}

getInfo(0);
getInfo(3);
getInfo(4);
getInfo(9);
