let favs = document.getElementById('charts');

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "Genre" : "Hip-Hop/Rap",
    "Title" : "Leray",
    "AlbumCover" : "Leray.jpg",
    "Artist" : "Trippie Redd"
  },
  {
    "Genre" : "R&B/Soul",
    "Title" : "SLOW DANCING IN THE DARK",
    "AlbumCover" : "joji.jpg",
    "Artist" : "Joji"
  },
  {
    "Genre" : "Alt Rock",
    "Title" : "Check Yes, Juliet",
    "AlbumCover" : "WeTheKings.jpeg",
    "Artist" : "We The Kings"
  },
  {
    "Genre" : "Classical",
    "Title" : "Clair De Lune",
    "AlbumCover" : "clairDeLune.jpeg",
    "Artist" : "Claude Debussy"
  }
]


for (var i = 0; i < jsonDatabase.length; i++) {
  createElements(jsonDatabase[i]);
}

  function createElements(incomingJSON) {

    //items
    let contentElement = document.createElement("div");
    contentElement.classList.add('contentItem');

    //Genre
    let genre = document.createElement("H2");
    genre.classList.add('contentTitle');
    genre.innerText = incomingJSON['Genre'];
    contentElement.appendChild(genre);

    //AlbumCover
    let img = document.createElement("IMG");
    img.classList.add('minionsImage');
    img.src = incomingJSON['AlbumCover'];
    contentElement.appendChild(img);

    let newList = document.createElement("div");
    newList.classList.add('pContain');
    contentElement.appendChild(newList);

    //Title
    let title = document.createElement("H3");
    title.classList.add('contentTitle');
    title.innerText = "Title: " + incomingJSON['Title'];
    contentElement.appendChild(title);

    //Artist
    let artist = document.createElement("H3");
    artist.classList.add('contentTitle');
    artist.innerText = "Artist: " + incomingJSON['Artist'];
    contentElement.appendChild(artist);


   favs.appendChild(contentElement);
  }
