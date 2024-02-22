import React from "react";

export default function MovieCard({ movie }) {
  // Destructure the movie object to get the relevant properties
  const { Title, Year, Director, Poster, imdbID } = movie;


  return (

    <div className=" my-6 w-auto  sm:w-1/2 md:w-1/3 lg:w-1/4  bg-secondary rounded-md shadow-md" >
      
        <img src={Poster=== "N/A" ? "https://via.placeholder.com/300x450" : Poster} alt="movie poster" className="rounded-t-lg" />
        <div className="p-3">
          <h2 className="mb-1 text-md font-semibold">{Title}</h2>
          <p className="mb-1 text-sm text-gray-300">Release Date: {Year}</p>
          <p className="mb-2 text-sm text-gray-300">Director: {Director}</p>
          
        
      </div>
    </div>
  );
}
