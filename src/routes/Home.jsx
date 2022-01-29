import { useEffect, useState } from "react";
import Movies from "../components/Movies";

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => setMovieList(json.data.movies));
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <h3>Movie App</h3>
      {isLoading ? <div>loading ...</div> : <Movies movieList={movieList} />}
    </div>
  );
}

export default Home;
