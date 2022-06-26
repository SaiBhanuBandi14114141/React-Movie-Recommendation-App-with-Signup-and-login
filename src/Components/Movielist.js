import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Main.css'
const MovieDatabase = 
{
  Horror: 
  [
    { name: "Psycho", rating: "9/10"},
    { name: "The Shining", rating: "8.8/10" },
    { name: "Alien", rating: "8.7/10" },
    { name: "Tumbbad", rating: "8.6/10" },
    { name: "The Blue Elephant", rating: "8/10" },
    { name: "The Cabinet of Dr. Caligari", rating: "7.8/10" },
    { name: "The Exorcist", rating: "7.5/10" }
  ],
  Action: 
  [
    { name: "The Dark Knight", rating: "9/10" },
    { name: "The Lord of rings : The return of king", rating: "8.8/10" },
    { name: "The Mountain II", rating: "8.7/10" },
    { name: "Inception", rating: "8.6/10" },
    { name: "The Matrix", rating: "8/10" }
  ],
  Drama: 
  [
    { name: "The Shawshank Redemption", rating: "9/10" },
    { name: "Hababam Sinifi", rating: "8.8/10" },
    { name: "The God Father", rating: "8.7/10" },
    { name: "Schinder's List", rating: "8.6/10" },
    { name: "Fight Club", rating: "8/10" },
    { name: "Forest Gump", rating: "7.8/10" },
    { name: "Parasite", rating: "7.5/10" }
  ],
  War: 
  [
    { name: "The Mountain II", rating: "9/10" },
    { name: "Saving Private Ryan", rating: "8.8/10" },
    { name: "LIfe Is Beautiful", rating: "8.7/10" },
    { name: "The Painist", rating: "8.6/10" },
    { name: "Grave of Fireflies", rating: "8/10" },
    { name: "Apocalypse Now", rating: "7.8/10" },
    { name: "Paths of Glory", rating: "7.5/10" }
  ],
  SciFiction: 
  [
    { name: "Inception", rating: "9/10" },
    { name: "The Matrix", rating: "8.8/10" },
    { name: "Interstellar", rating: "8.7/10" },
    { name: "The Prestige", rating: "8.6/10" },
    { name: "Terminator 2 - Judgement Day", rating: "8/10" },
    { name: "Back to the Future", rating: "7.8/10" },
    { name: "Avengers: Infinity war", rating: "7.5/10" }
  ],
  Comedy:
  [
    { name: "Kick", rating: "8/10" },
    { name: "Jathi Ratnalu", rating: "8.5/10" },
    { name: "Hungama", rating: "9/10" },
    { name: "B.A Rao RMP", rating: "8.8/10" },
    { name: "Pilla Zamindar", rating: "8.2/10" },
    { name: "Sudigadu", rating: "8.4/10" },
    { name: "Gudumba Shankar", rating: "8/10" }
  ]
};
var movies = Object.keys(MovieDatabase);

const App=()=> {
  const [userGenre, setgenre] = useState("Horror");

  const OnClickHandler=(item)=> {
    setgenre(item);
  }

  return (
    <div className="App">
      <h2 className="head">
        <b> MOVIE RECOMMENDATION FOR YOU</b>
        <Link to="/"><button id='logout'>Logout</button></Link>
      </h2>
      <hr />
      <div className="bgm1">
        <h3>
          <b> Checkout my favorite movies.</b>
          <i>Select a genre to get started </i>
        </h3>
        <div>
          {movies.map((item) => 
          (
            <button className="btn" onClick={() =>OnClickHandler(item)}>{item}</button>
          )
          )}
        </div>
      </div>
      <hr />
      <div className="bgm">
        <div className="body">
          <ul>
            {MovieDatabase[userGenre].map((movie) => (
              <li className="li">
                <div className="div1" key={movie.name}>
                  <b> {movie.name}</b>
                </div>
                <div className="div2" key={movie.rating}>
                  <strong> Rating:{movie.rating} </strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;