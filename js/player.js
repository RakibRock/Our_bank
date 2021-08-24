const players = document.getElementsByClassName("player");

function playerStyle(player) {
  const s = player.style;
  s.border = "1px solid red";
  s.borderRadius = "5px";
  s.margin = "10px";
  s.padding = "10px";
}

//Since you got the elements by their classname, we get access to the individual players by looping through
//const player of players means: we will take a player from all the players
for (const player of players) {
  //now inside the loop, we can style the individual players
  playerStyle(player);
  player.addEventListener("click", function () {
    player.style.backgroundColor = "yellow";
  });
}

function addPlayer() {
  const playerConatiner = document.getElementById("players");
  const player = document.createElement("div");
  //adding a class name player
  player.classList.add("player");
  player.innerHTML = `<h4 class="player-name">New Player </h4>
  <p>
    Dolorum dolore temporibus in beatae sint? Labore vel accusamus ullam
    enim eaque laudantium nisi mollitia quam adipisci, aperiam animi nam
    maxime autem optio numquam perspiciatis repudiandae veniam
    doloremque quas beatae.
  </p>`;
  //to get the styles of the previous players
  playerStyle(player);
  //   player.addEventListener("click", function () {
  //     player.style.backgroundColor = "yellow";
  //   });
  playerConatiner.appendChild(player);
}
//event bubble
document.getElementById("players").addEventListener("click", function (event) {
  console.log();
  if (event.target.tagName.toLowerCase() == "div") {
    event.target.style.backgroundColor = "yellow";
  } else {
    //lets say event.target is h2, so its parent is the whole div so the whole section will be colored
    event.target.parentNode.style.backgroundColor = "yellow";
  }
});
