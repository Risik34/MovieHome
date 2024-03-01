import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
export default function MovieSearch (){
const API_URL = "https://www.omdbapi.com/?apikey=da68c5d2";
const [movie, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("fast");

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}&s=${searchTerm}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };
 useEffect(() => {
    searchMovies();
  }, []);
    return (<div className="px-6 bg-bg py-6 text-text font-monsterrat">
          <form className="flex items-center   bg-secondary rounded-md shadow-md  justify-around ">
           <input
            className="py-3 px-3 w-full rounded-md bg-secondary"
          type="text"
        value={searchTerm}
          placeholder="Search for a movie"
               onChange={(e) => setSearchTerm(e.target.value)}
          
        
               />
          <button className="px-2 py-1 hover:bg-gray-50 h-full" onClick={searchMovies} type="button"><i className="fa-solid fa-search text-text text-xl"></i></button>
      </form>
      <div className="grid grid-cols-2 gap-4 mt-4 ">
        {movie?.length > 0 &&
          movie.map((movie) => <MovieCard movie={movie} key={movie.imdbID}/>)}

      </div>
    </div>)
}