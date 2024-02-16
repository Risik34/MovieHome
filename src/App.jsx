import "./App.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com/?apikey=da68c5d2";
export default function App() {
  const [movie, setMovies] = useState([]);
  const searchMovies = async (search) => {
    const response = await fetch(`${API_URL}&s=${search}`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);
  return (
    <div className="container bg-gray-100 px-6">
      <h1 className="text-4xl font-bold text-center py-2">Movieland</h1>
      <form className="flex items-center justify-between mt-4 bg-white rounded-md p-3">
           <input
            className=""
          type="text"
          placeholder="Search for a movie"
          onChange={(e) => searchMovies(e.target.value)}
        />
        <button type="submit" className="bg-white">Search</button>
      </form>
      <div className="grid grid-cols-2 gap-4 mt-4 ">
        {movie?.length > 0 &&
          movie.map((movie) => <MovieCard movie={movie} />)}
      </div>
    </div>
  );
}
