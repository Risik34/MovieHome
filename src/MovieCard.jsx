import React from "react";

export default function MovieCard({ movie }) {
  // Destructure the movie object to get the relevant properties
  const { Title, Year, Director, Poster, imdbID } = movie;

  // Define a function to handle the click event on the watch movie button
  const handleWatchMovie = () => {
    // Open the IMDb page for the movie in a new tab
    window.open(`https://www.imdb.com/title/${imdbID}`, "_blank");
  };

  return (
    // Use Tailwind CSS classes to style the movie card
    <div className="m-4 mb-8 w-auto px-4 mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="rounded-lg bg-white shadow-lg">
        <img src={Poster=== "N/A" ? "https://via.placeholder.com/300x450" : Poster} alt="movie poster" className="rounded-t-lg" />
        <div className="p-3">
          <h2 className="mb-1 text-md font-semibold">{Title}</h2>
          <p className="mb-1 text-sm text-gray-700">Release Date: {Year}</p>
          <p className="mb-2 text-sm text-gray-700">Director: {Director}</p>
          
        </div>
      </div>
    </div>
  );
}
