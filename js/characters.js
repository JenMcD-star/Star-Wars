
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

            let film4 = response.results[3].title

            let film5 = response.results[4].title;

            let film6 = response.results[5].title;

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li")
            let li6 = document.createElement("li")

            li.innerHTML = `<a href= "../Films/${film}.html">${film}</a>`;
            li2.innerHTML = `<a href= "../Films/${film2}.html">${film2}</a>`;
            li3.innerHTML = `<a href= "../Films/${film3}.html">${film3}</a>`;
            li4.innerHTML = `<a href= "../Films/${film4}.html">${film4}</a>`;
            li5.innerHTML = `<a href= "../Films/${film5}.html">${film5}</a>`;
            li6.innerHTML =`<a href= "../Films/${film6}.html">${film6}</a>`;

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
            let film4 = response.results[3].title
            let film5 = response.results[4].title;
            let film6 = response.results[5].title;

            let li = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li")
            let li6 = document.createElement("li")

            li.innerHTML = `<a href= "../Films/${film}.html">${film}</a>`;
            li2.innerHTML = `<a href= "../Films/${film2}.html">${film2}</a>`;
            li3.innerHTML = `<a href= "../Films/${film3}.html">${film3}</a>`;
            li4.innerHTML = `<a href= "../Films/${film4}.html">${film4}</a>`;
            li5.innerHTML = `<a href= "../Films/${film5}.html">${film5}</a>`;
            li6.innerHTML =`<a href= "../Films/${film6}.html">${film6}</a>`;

            obiFilms.appendChild(li);
            obiFilms.appendChild(li2);
            obiFilms.appendChild(li3);
            obiFilms.appendChild(li4);
            obiFilms.appendChild(li5);
            obiFilms.appendChild(li6);
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
            let li6 = document.createElement("li")

            li.innerHTML = `<a href= "../Films/${film}.html">${film}</a>`;
            li2.innerHTML = `<a href= "../Films/${film2}.html">${film2}</a>`;
            li3.innerHTML = `<a href= "../Films/${film3}.html">${film3}</a>`;
            li6.innerHTML =`<a href= "../Films/${film6}.html">${film6}</a>`;

            darthFilms.appendChild(li);
            darthFilms.appendChild(li2);
            darthFilms.appendChild(li3);
            darthFilms.appendChild(li6);
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

/*

films();

.fetch("https://swapi.dev/api/starships")
                .then(function (response) {
                  return response.json();
                });*/
