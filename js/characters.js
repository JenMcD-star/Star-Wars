function getAppearance(num) {
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
              let film = response.results[0].title;
              let film2 = response.results[1].title;
              let film3 = response.results[2].title;
              let film4 = response.results[5].title;
              let li = document.createElement("li");
              let li2 = document.createElement("li");
              let li3 = document.createElement("li");
              let li4 = document.createElement("li");

              li.innerHTML = `<a href= "../Films/${film}.html">${film}</a>`;
              li2.innerHTML = `<a href= "../Films/${film2}.html">${film2}</a>`;
              li3.innerHTML = `<a href= "../Films/${film3}.html">${film3}</a>`;
              li4.innerHTML = `<a href= "../Films/${film4}.html">${film4}</a>`;
              lukeFilms.appendChild(li);
              lukeFilms.appendChild(li2);
              lukeFilms.appendChild(li3);
              lukeFilms.appendChild(li4);
            });
          Promise.all([
            fetch("https://swapi.dev/api/starships/12/").then((resp) =>
              resp.json()
            ),
            fetch("https://swapi.dev/api/starships/22/").then((resp) =>
              resp.json()
            ),
          ]).then(function (response) {
            for (i = 0; i < response.length; i++) {
              let li = document.createElement("li");
              let name = response[i].name;

              let model = response[i].model;

              let manufacturer = response[i].manufacturer;

              let cost = response[i].cost_in_credits;

              let ships = `Name: ${name} <br> Model: ${model} <br> Manufacturer: ${manufacturer} <br> Cost: ${cost}`;

              li.innerHTML = `${ships}`;
              shipList.appendChild(li);
            }
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
              let film = response.results[0].title;
              let film2 = response.results[1].title;
              let film3 = response.results[2].title;

              let film4 = response.results[3].title;

              let film5 = response.results[4].title;

              let film6 = response.results[5].title;

              let li = document.createElement("li");
              let li2 = document.createElement("li");
              let li3 = document.createElement("li");
              let li4 = document.createElement("li");
              let li5 = document.createElement("li");
              let li6 = document.createElement("li");

              li.innerHTML = `<a href= "../Films/${film}.html">${film}</a>`;
              li2.innerHTML = `<a href= "../Films/${film2}.html">${film2}</a>`;
              li3.innerHTML = `<a href= "../Films/${film3}.html">${film3}</a>`;
              li4.innerHTML = `<a href= "../Films/${film4}.html">${film4}</a>`;
              li5.innerHTML = `<a href= "../Films/${film5}.html">${film5}</a>`;
              li6.innerHTML = `<a href= "../Films/${film6}.html">${film6}</a>`;

              leiaFilms.appendChild(li);
              leiaFilms.appendChild(li2);
              leiaFilms.appendChild(li3);
              leiaFilms.appendChild(li4);
              leiaFilms.appendChild(li5);
              leiaFilms.appendChild(li6);
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
              let film = response.results[0].title;
              let film2 = response.results[1].title;
              let film3 = response.results[2].title;
              let film4 = response.results[3].title;
              let film5 = response.results[4].title;
              let film6 = response.results[5].title;

              let li = document.createElement("li");
              let li2 = document.createElement("li");
              let li3 = document.createElement("li");
              let li4 = document.createElement("li");
              let li5 = document.createElement("li");
              let li6 = document.createElement("li");

              li.innerHTML = `<a href= "../Films/${film}.html">${film}</a>`;
              li2.innerHTML = `<a href= "../Films/${film2}.html">${film2}</a>`;
              li3.innerHTML = `<a href= "../Films/${film3}.html">${film3}</a>`;
              li4.innerHTML = `<a href= "../Films/${film4}.html">${film4}</a>`;
              li5.innerHTML = `<a href= "../Films/${film5}.html">${film5}</a>`;
              li6.innerHTML = `<a href= "../Films/${film6}.html">${film6}</a>`;

              obiFilms.appendChild(li);
              obiFilms.appendChild(li2);
              obiFilms.appendChild(li3);
              obiFilms.appendChild(li4);
              obiFilms.appendChild(li5);
              obiFilms.appendChild(li6);
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
            for (i = 0; i < response.length; i++) {
              let li = document.createElement("li");
              let name = response[i].name;

              let model = response[i].model;

              let manufacturer = response[i].manufacturer;

              let cost = response[i].cost_in_credits;

              let ships = `Name: ${name} <br> Model: ${model} <br> Manufacturer: ${manufacturer} <br> Cost: ${cost}`;

              li.innerHTML = `${ships}`;
              obiShip.appendChild(li);
            }
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
              let film = response.results[0].title;
              let film2 = response.results[1].title;
              let film3 = response.results[2].title;
              let film6 = response.results[5].title;

              let li = document.createElement("li");
              let li2 = document.createElement("li");
              let li3 = document.createElement("li");
              let li6 = document.createElement("li");

              li.innerHTML = `<a href= "../Films/${film}.html">${film}</a>`;
              li2.innerHTML = `<a href= "../Films/${film2}.html">${film2}</a>`;
              li3.innerHTML = `<a href= "../Films/${film3}.html">${film3}</a>`;
              li6.innerHTML = `<a href= "../Films/${film6}.html">${film6}</a>`;

              darthFilms.appendChild(li);
              darthFilms.appendChild(li2);
              darthFilms.appendChild(li3);
              darthFilms.appendChild(li6);
            });
            fetch("https://swapi.dev/api/starships/13/").then((resp) =>
            resp.json())
            .then(function (response) {
              console.log(response)
              
                let li = document.createElement("li");
                let name = response.name;
  
                let model = response.model;
  
                let manufacturer = response.manufacturer;
  
                let cost = response.cost_in_credits;
  
                let ships = `Name: ${name} <br> Model: ${model} <br> Manufacturer: ${manufacturer} <br> Cost: ${cost}`;
  
                li.innerHTML = `${ships}`;
                darthShip.appendChild(li);
            });
          break;
        default:
          "error";
      }
    });
}
getAppearance(0);
getAppearance(3);
getAppearance(4);
getAppearance(9);


