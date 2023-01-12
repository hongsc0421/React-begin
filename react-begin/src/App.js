import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const json = await( await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div>
        {loading ? (<h1>Loading...</h1>) : 
            (<div>
            {movies.map((mv) => (
            <div key={mv.id}>
            <img src={mv.medium_cover_image} alt={mv.title}/>
            <h2>{mv.title}</h2>
            <p>{mv.summary} </p>
            <ul>
                {mv.genres.map((g) => <li key = {g}>{g}</li>)}
            </ul>
            </div>
            ))}
            </div>
        )}
        </div> 
    )

}

export default App;
