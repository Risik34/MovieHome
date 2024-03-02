const searchMovies = async (searchTerm) => {
    const API_URL = "https://www.omdbapi.com/?apikey=da68c5d2";
    const response = await fetch(`${API_URL}&s=${searchTerm}`);
    const data = await response.json();
    
    return data;
  };
export default searchMovies;
