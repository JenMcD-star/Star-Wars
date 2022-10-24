const title = document.getElementById("title").innerHTML;
console.log(title);
let div = document.createElement("div");

if (title == "A New Hope") {
  div.innerHTML = `<img src = "../../pictures/1.jpeg" alt="A New Hope Movie Poster"><br>"A New Hope"</img>`;
  document.getElementById("poster").appendChild(div);
}
if (title == "The Empire Strikes Back") {
  div.innerHTML = `<img src = "../../pictures/2.jpeg" alt="The Empire Strikes Back Movie Poster"><br>"The Empire Strikes Back"</img>`;
  document.getElementById("poster").appendChild(div);
}
if (title == "Return of the Jedi") {
  div.innerHTML = `<img src = "../../pictures/3.jpeg" alt="Return of the Jedi Movie Poster"><br>${response.results[i].title}</img>`;
  document.getElementById("poster").appendChild(div);
}
if (title == "The Phantom Menace") {
  div.innerHTML = `<img src = "../../pictures/4.jpeg" alt="The Phantom Menace Movie Poster"><br>${response.results[i].title}</img>`;
  document.getElementById("poster").appendChild(div);
}
if (title == "Attack of the Clones") {
  div.innerHTML = `<img src = "../../pictures/5.jpeg" alt="Attack of the Clones Movie Poster"><br>${response.results[i].title}</img>`;
  document.getElementById("poster").appendChild(div);
}
if (title == "Revenge of the Sith") {
  div.innerHTML = `<img src = "../../pictures/6.jpeg" alt="Revenge of the Sith Movie Poster"><br>${response.results[i].title}</img>`;
  document.getElementById("poster").appendChild(div);
}
