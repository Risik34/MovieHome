import react,{useEffect,useState} from "react"; 
import searchMovies from "../functions/searchMovies";
import MovieCard from "../components/MovieCard"
export default function Watchlist(){
const movies=["Lakshya","Dunki","3 idiots","Munna bhai"]
    const [movie,setMovies]=useState([]);
useEffect(()=>{
    
    movies.map((item)=>{
        searchMovies(item).then(data=>{
            setMovies(data.Search);
            
        })
    })
    console.log(movie)
},[]);
    return(

    <h1 className="mx-auto my-auto text-4xl text-blue-600 ">Watchlist</h1>
 )
}