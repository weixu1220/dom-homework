let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let myTitle = document.getElementById("main-title");
  myTitle.innerHTML = "DOM Toretto"
  

  // Part 2
  let mainBody = document.querySelector("body");
  mainBody.style.backgroundColor = "white";

  // Part 3
  let favThing = document.getElementById("favorite-things");
  favThing.removeChild(favThing.lastElementChild);

  // Part 4
  let specialT = document.getElementsByClassName("special-title");
  for(let special of specialT){
    special.style.fontSize = "2rem";
  }

  // Part 5
  let pastRace = document.getElementById("past-races");
  for(let place of pastRace.children){
    if (place.innerHTML === "Chicago") pastRace.removeChild(place)
  }

  // Part 6
  let newPlace = document.createElement("li");
  newPlace.innerHTML = "Hong Kong";
  pastRace.appendChild(newPlace)

  // Part 7
  let main = document.getElementsByClassName("main");
  let newPost = document.createElement("div");
  newPost.classList.add("blog-post");
  main[0].appendChild(newPost)
  let newH2 = document.createElement("h2");
  newH2.innerHTML = "Hong Kong";
  newPost.appendChild(newH2);
  let newP = document.createElement("p");
  newP.innerHTML = "I recruited Gisele and Han when they were living together in Hong Kong."
  newPost.appendChild(newP)
  // Part 8
  const quoteTitle = document.querySelector('#quote-title');
  quoteTitle.addEventListener("click",()=>{randomQuote()})

  // Part 9
let allPost = document.querySelectorAll(".blog-post");
for(let post of allPost) {
  post.addEventListener("mouseout",()=>{
    post.classList.toggle("purple"),false;
  })
  post.addEventListener("mouseenter",()=>{
    post.classList.toggle("red"),false;
  })
}
});
